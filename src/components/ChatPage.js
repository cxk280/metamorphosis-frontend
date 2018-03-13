import React      from 'react';
import ChatMain   from './ChatMain';
import ChatTop    from './ChatTop';
import ChatLeft   from './ChatLeft';
import ChatRight  from './ChatRight';

class ChatPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        user: 'Chris',
        message: ''
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {
    fetch("http://localhost:8082/consumers/my_json_consumer", {
      body: "{\"name\": \"my_consumer_instance\", \"format\": \"json\", \"auto.offset.reset\": \"earliest\"}",
      headers: {
        "Content-Type": "application/vnd.kafka.v2+json"
      },
      method: "POST"
    })
    .then(response => {
      fetch("http://localhost:8082/consumers/my_json_consumer/instances/my_consumer_instance/subscription", {
        body: "{\"topics\":[\"jsontest\"]}",
        headers: {
          "Content-Type": "application/vnd.kafka.v2+json"
        },
        method: "POST"
      }).then(response => {
          //There is no response body to this one even when done correctly
      })
    })
  }

  handleKeyPress(e) {
    if(e.key == "Enter"){
      if(e.preventDefault) e.preventDefault();

      fetch("http://localhost:8082/topics/jsontest", {
        body: "{\"records\":[{\"value\":{\"user\": \"" + this.state.user + "\", \"message\": \"" + e.target.value + "\"}}]}",
        headers: {
          "Content-Type": "application/vnd.kafka.json.v2+json"
        },
        method: "POST"
      })
      .then(response => {
        console.log('first then');
        fetch("http://localhost:8082/consumers/my_json_consumer/instances/my_consumer_instance/records", {
          headers: {
            Accept: "application/vnd.kafka.json.v2+json"
          }
        })
        .then(response => response.json())
          .then(data => {
            console.log('last then');
            console.log('data: ',data);
            console.log('this.state.user: ',this.state.user);
            console.log('data[0].value.user: ',data[0].value.user);
            // console.log(this.state.message);
            // console.log(data[0].value.message);
            if((this.state.user != data[0].value.user) || (this.state.message != data[0].value.message)) {
              this.setState({ user: data[0].value.user, message: data[0].value.message});
              console.log('this.state.user after setState: ',this.state.user);
              console.log('this.state.message after setState: ',this.state.message);
            } else {
              console.log('returning')
              return
            }
          })
      })
      e.target.value = '';
    }
  }



  render() {
    return (
      <div className="chatPage">
          <ChatLeft />
          <ChatTop />
          <ChatRight />
          <ChatMain message={this.state.message}/>
          <center>
            <div className="chatBottom">
              <form name="chatMessageForm" className="chatTextareaForm" onKeyDown={this.handleKeyPress}>
                <textarea className="chatTextarea" placeholder="Type something..."/>
              </form>
            </div>
          </center>
      </div>
    );
  }
}

export default ChatPage;
