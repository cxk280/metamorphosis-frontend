import React from 'react';
import ChatItemLeft from './ChatItemLeft';
import ChatItemRight from './ChatItemRight';

class ChatMain extends React.Component {

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
    console.log('this.state.time after setting state in right: ',this.state.time);
  }




  render() {
    return (
        <div className="chatMain">
          <div className="chatMessages">
            <ChatItemLeft message={this.props.message} time={this.state.time}/>
            <br />
            <ChatItemRight time={this.state.time} />
          </div>
        </div>
    );
  }
}

export default ChatMain;
