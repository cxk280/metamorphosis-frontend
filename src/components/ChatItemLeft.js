import React from 'react';

class ChatItemLeft extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        time: Math.round(new Date().getTime()/1000.0),
        message: ''
    };
  }

  componentWillMount(){

    //Convert UNIX time to date
    let a = new Date(this.state.time*1000);
    let year = a.getFullYear();
    year = year.toString();
    let month = a.getMonth() + 1;
    month = month.toString();
    if (month.length === 1) {
      month = '0' + month;
    }
    let date = a.getDate();
    date = date.toString();
    if (date.length === 1) {
      date = '0' + date;
    }
    let formattedTime = month + '-' + date + '-' + year;

    this.state.time = formattedTime;
    console.log('this.state.time after setting state in left component: ',this.state.time);

    // Fetch the appropriate chat message from Kafka
    fetch("http://localhost:8082/consumers/my_json_consumer/instances/my_consumer_instance/records", {
      headers: {
        Accept: "application/vnd.kafka.json.v2+json"
      }
    }).then(response => {

      // Need to set the response message to this.state.message
      console.log('running componentWillMount');
      console.log('response: ',response);
      console.log('response.json(): ',response.json());

    })

  }

  componentDidUpdate(){

    // Fetch the appropriate chat message from Kafka
    fetch("http://localhost:8082/consumers/my_json_consumer/instances/my_consumer_instance/records", {
      headers: {
        Accept: "application/vnd.kafka.json.v2+json"
      }
    }).then(response => {

      // Need to set the response message to this.state.message
      console.log('running componentDidUpdate');
      console.log('response: ',response);
      console.log('response.json(): ',response.json());
      
    })

  }

  render() {
    return (
      <div>
          <div className="imageParentMain">
              <img className="personImage chatImageLeft" src="../images/chris_profile_cropped.jpg"/>
          </div>
          <div className="chatMessageLeft">
            <p className="chatTextLeft">{this.props.message}</p>
          </div>
          <div className="chatTimeLeft">
            <p>{this.props.time}</p>
          </div>
      </div>
    );
  }
}

export default ChatItemLeft;
