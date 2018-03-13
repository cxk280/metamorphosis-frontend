import React from 'react';
import ChatItemLeft from './ChatItemLeft';
import ChatItemRight from './ChatItemRight';

// {this.props.messageNumber.map(function(result) {
//               if (this.props.messageNumber.length == 0) {
//                 return
//               }
//               else if (this.props.messageNumber.length % 2 != 0) {
//                 return <ChatItemLeft key={result.id} message={this.props.message} time={this.state.time}/>;
//               }
//               else if (this.props.messageNumber % 2 == 0) {
//                 return <ChatItemRight key={result.id} message={this.props.message} time={this.state.time}/>;
//               }
//               <br />
//             })}

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


    console.log('this.props.messageNumber in componentWillMount: ',this.props.messageNumber);
  }

  componentDidUpdate() {
    console.log('this.props.messageNumber in componentDidUpdate: ',this.props.messageNumber);
  }




  render() {

    let myMessage = this.props.message;
    console.log('myMessage: ',myMessage);
    let myTime = this.state.time;
    console.log('mytime: ',myTime);
    let myMessageNumber = this.props.messageNumber;
    console.log('myMessageNumber: ',myMessageNumber);

    return (
        <div className="chatMain">
          <div className="chatMessages">
              {this.props.messageNumber.map(function(result) {
                    return <ChatItemLeft key={result} message={myMessage[result]} time={myTime} messageNumber={myMessageNumber}/>
              })}
          </div>
        </div>
    );
  }
}



export default ChatMain;
