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
        message: [],
        messageNumber: [0]
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {

    // Create a Kafka topic before the component mounts
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

          // GET and, if there is an error, PUT to create the relevant ElasticSearch index
          fetch("http://localhost:9200/kafkachat?pretty", {
            method: "GET"
          })
            .then(response => {
              if (response.status != 200) {
                fetch("http://localhost:9200/kafkachat?pretty", {
                  method: "PUT"
                })
                  .then(response => {
                    console.log('ElasticSearch componentWillMount PUT response: ',response);
                  })   
              }
            })        
      })
    })
  }

  // Send the submitted message to Kafka
  handleKeyPress(e) {

    // Only do something if the user hits Enter
    if(e.key == "Enter"){
      if(e.preventDefault) e.preventDefault();

      // Post the submitted message to Kafka
      fetch("http://localhost:8082/topics/jsontest", {
        body: "{\"records\":[{\"value\":{\"user\": \"" + this.state.user + "\", \"message\": \"" + e.target.value + "\"}}]}",
        headers: {
          "Content-Type": "application/vnd.kafka.json.v2+json"
        },
        method: "POST"
      })

        // Get the submitted message from the Kafka consumer
        .then(response => {
          console.log('first then');
          console.log('this.state.message at beginning of first then: ',this.state.message);
          fetch("http://localhost:8082/consumers/my_json_consumer/instances/my_consumer_instance/records", {
            headers: {
              "Accept": "application/vnd.kafka.json.v2+json"
            }
          })

            // Convert the response to JSON
            .then(response => response.json())

              // Modify state based on the response
              .then(data => {
                let messageVar = this.state.message;

                // Change state if the submitted value and current state are different
                // Do not change state if the submitted value and current state are not different
                if (messageVar[messageVar.length - 1] != data[0].value.message) {
                  this.state.messageNumber.push(this.state.messageNumber[this.state.messageNumber.length - 1] + 1);
                  messageVar.push(data[0].value.message);
                  this.setState({ user: data[0].value.user, message: messageVar, messageNumber: this.state.messageNumber});
                
                  // Put the submitted message to ElasticSearch
                  // See https://www.elastic.co/guide/en/elasticsearch/reference/6.2/_index_and_query_a_document.html

                  // WHy is PUT giving 400 error?
                  fetch("http://localhost:9200/kafkachat?pretty", {
                    // body: "{\"user\": \"" + data[0].value.user + "\", \"message\": \"" + data[0].value.message + "\"}",
                    body: {"name": "Chris King"},
                    headers: {
                      "Content-Type": "application/json"
                    },
                    method: "PUT"
                  })
                    .then(response => {
                      console.log('PUT message to ElasticSearch response: ',response);
                    });

                }
              })

              

                  
        });

      e.target.value = '';
    }
  }



  render() {
    return (
      <div className="chatPage">
          <ChatLeft />
          <ChatTop />
          <ChatRight />
          <ChatMain message={this.state.message} messageNumber={this.state.messageNumber}/>
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
