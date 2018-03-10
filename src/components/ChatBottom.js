import React from 'react';

class ChatBottom extends React.Component {

  handleSubmit(data) {
      console.log('form submission data', data);
  }

  handleKeyPress(e) {
    e.preventDefault();
    if(e.keyCode == 13){
      console.log('enter pressed!');
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
