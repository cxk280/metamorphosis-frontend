import React from 'react';

class ChatBottom extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        data : '',
        inputValue : ''
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidUpdate(){
    console.log('this.state.data: ',this.state.data);
  }

  handleKeyPress(e) {
    if(e.key == "Enter"){
      if(e.preventDefault) e.preventDefault();
      this.setState({data: e.target.value})
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
