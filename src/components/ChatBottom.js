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
    console.log('this.state.data before fetch: ',this.state.data);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log('this.state.data in fetch: ',this.state.data);
        console.log('response: ',response);
        console.log('response.json(): ',response.json());
    })
  }

  handleKeyPress(e) {
    if(e.key == "Enter"){
      if(e.preventDefault) e.preventDefault();
      this.setState({data: e.target.value})
      // console.log('e.target.value before Ajax: ',e.target.value);
      // $.ajax({
      //   url: '/kafka',
      //   type: 'POST',
      //   dataType: 'json',
      //   data: e.target.value,
      //   success: function(data) {
      //     console.log('Ajax success');
      //     console.log('e.target.value in Ajax success: ',e.target.value);
      //     // console.log('data: ',data);
      //   },
      //   error: function(data) {
      //     console.log('There was an Ajax error');
      //     // console.log('e.target.value in Ajax failure: ',e.target.value);
      //     console.log('data: ',data);
      //   }
      // });
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
