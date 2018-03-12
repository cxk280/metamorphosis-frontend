import React from 'react';

class ChatBottom extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        data : {user: '', message: ''},
        inputValue : '',
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  //Maybe start consumer and subscription in componentWillMount?
  // componentWillMount() {
  //   console.log('running componentWillMount');
  //   fetch("http://localhost:8082/topics/jsontest", {
  //     body: "{\"records\":[{\"value\":{\"foo\":\"bar\"}}]}",
  //     headers: {
  //       Accept: "application/vnd.kafka.v2+json",
  //       "Content-Type": "application/vnd.kafka.json.v2+json"
  //     },
  //     method: "POST"
  //   })
  //     .then(response => {
  //       console.log('first componentWillMount fetch response: ',response);
  //       console.log('first componentWillMount fetch response.json(): ',response.json());
  //   })
  //     .then(fetch("http://localhost:8082/consumers/my_json_consumer", {
  //       body: "{\"name\": \"my_consumer_instance\", \"format\": \"json\", \"auto.offset.reset\": \"earliest\"}",
  //       headers: {
  //         "Content-Type": "application/vnd.kafka.v2+json"
  //       },
  //       method: "POST"
  //     }))
  //     .then(response => {
  //       console.log('second componentWillMount fetch response: ',response);
  //       // console.log('second componentWillMount fetch response.json(): ',response.json());
  //     })
  //     .then(fetch("http://localhost:8082/consumers/my_json_consumer/instances/my_consumer_instance/subscription", {
  //       body: "{\"topics\":[\"jsontest\"]}",
  //       headers: {
  //         "Content-Type": "application/vnd.kafka.v2+json"
  //       },
  //       method: "POST"
  //     }))
  //     .then(response => {
  //       console.log('second componentWillMount fetch response: ',response);
  //       // console.log('second componentWillMount fetch response.json(): ',response.json());
  //     })
  //     .then(fetch("http://localhost:8082/consumers/my_json_consumer/instances/my_consumer_instance/records", {
  //       headers: {
  //         Accept: "application/vnd.kafka.json.v2+json"
  //       }
  //     }))
  //     .then(response => {
  //       console.log('second componentWillMount fetch response: ',response);
  //       // console.log('second componentWillMount fetch response.json(): ',response.json());
  //     })
  // }

  componentDidUpdate(){

    //[{"topic":"jsontest","key":null,"value":{"name":"testUser"},"partition":0,"offset":0}]
    //Above, change the value to message and then message contents
    console.log('this.state.data before fetch: ',this.state.data);
    console.log('this.state.data["user"] before fetch: ',this.state.data["user"]);
    console.log('this.state.data["message"] before fetch: ',this.state.data["message"]);
    let thisBody = "{\"records\":[{\"value\":{\"user\": \"" + this.state.data["user"] + "\", \"message\": \"" + this.state.data["message"] + "\"}}]}";
    console.log('thisBody: ',thisBody);
    fetch("http://localhost:8082/topics/jsontest", {
      body: "{\"records\":[{\"value\":{\"user\": \"" + this.state.data["user"] + "\", \"message\": \"" + this.state.data["message"] + "\"}}]}",
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
      this.setState({data: {user: 'Chris', message: e.target.value}})
      // this.setState({data: {message: e.target.value}})
      e.target.value = '';
    }
  }

  render() {
    return (
      <center>
        <div className="chatBottom">
          <form name="chatMessageForm" className="chatTextareaForm" onKeyDown={this.handleKeyPress}>
            <textarea className="chatTextarea" placeholder="Type something..."/>
          </form>
        </div>
      </center>
    );
  }
}

export default ChatBottom;
