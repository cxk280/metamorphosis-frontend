import React      from 'react';
import ChatMain   from './ChatMain';
import ChatTop    from './ChatTop';
// import ChatBottom from './ChatBottom';
import ChatLeft   from './ChatLeft';
import ChatRight  from './ChatRight';

class ChatPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        user: '',
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
      console.log('response: ',response);
      console.log('response.json(): ',response.json());
    })
    .then(
      setTimeout(function () {
        console.log('running setTimeout');
        fetch("http://localhost:8082/consumers/my_json_consumer/instances/my_consumer_instance/subscription", {
          body: "{\"topics\":[\"jsontest\"]}",
          headers: {
            "Content-Type": "application/vnd.kafka.v2+json"
          },
          method: "POST"
        }).then(response => {
            //There is no response body to this one even when done correctly
            console.log('finished second fetch')
            console.log('second response: ',response);
          })
      }, 5000)
    )
  }

  componentDidUpdate(){
    fetch("http://localhost:8082/topics/jsontest", {
      body: "{\"records\":[{\"value\":{\"user\": \"" + this.state.user + "\", \"message\": \"" + this.state.message + "\"}}]}",
      headers: {
        "Content-Type": "application/vnd.kafka.json.v2+json"
      },
      method: "POST"
    })
    .then(response => {
      console.log('response: ',response);
      console.log('response.json(): ',response.json());
    })
  }

  handleKeyPress(e) {
    if(e.key == "Enter"){
      if(e.preventDefault) e.preventDefault();
      this.setState({user: 'Chris', message: e.target.value})
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
