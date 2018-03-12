import React from 'react';

class ChatItemLeft extends React.Component {

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
    console.log('year: ',year);
    let month = a.getMonth() + 1;
    month = month.toString();
    console.log('month: ',month);
    if (month.length === 1) {
      month = '0' + month;
    }
    let date = a.getDate();
    date = date.toString();
    console.log('month: ',month);
    if (date.length === 1) {
      date = '0' + date;
    }
    let formattedTime = month + '-' + date + '-' + year;

    console.log('formattedTime: ',formattedTime);
    this.state.time = formattedTime;
    console.log('this.state.time after setting state: ',this.state.time);
  }

  render() {
    return (
      <div>
          <div className="imageParentMain">
              <img className="personImage chatImageLeft" src="../images/chris_profile_cropped.jpg"/>
          </div>
          <div className="chatMessageLeft">
            <p className="chatTextLeft">Chat message</p>
          </div>
          <div className="chatTimeLeft">
            <p>{this.state.time}</p>
          </div>
      </div>
    );
  }
}

export default ChatItemLeft;
