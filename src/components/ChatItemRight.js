import React from 'react';

class ChatItemRight extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        time: Math.round(new Date().getTime()/1000.0)
    };
  }

  componentWillMount(){
    console.log('this.state.time: ',this.state.time);

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
    console.log('this.state.time after setting state in right component: ',this.state.time);
  }

  render() {
    return (
      <div>
          <div className="imageParentMain">
              <img className="personImage chatImageRight" src="../images/chris_profile_cropped.jpg"/>
          </div>
          <div className="chatMessageRight">
            <p className="chatTextRight">Chat message</p>
          </div>
          <div className="chatTimeRight">
            <p>{this.props.time}</p>
          </div>
      </div>
    );
  }
}

export default ChatItemRight;
