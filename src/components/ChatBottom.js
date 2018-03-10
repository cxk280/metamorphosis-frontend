import React from 'react';

class ChatBottom extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        data : {message: ''},
        inputValue : ''
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidUpdate(){
    console.log('this.state.data before fetch: ',this.state.data);
    fetch("http://localhost:8082/topics")
    .then(response => {
        console.log('response: ',response);
        console.log('response.json(): ',response.json());
    })
  }

  handleKeyPress(e) {
    if(e.key == "Enter"){
      if(e.preventDefault) e.preventDefault();
      this.setState({data: {message: e.target.value}})
      e.target.value = '';
    };
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
