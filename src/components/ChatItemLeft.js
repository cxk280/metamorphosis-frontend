import React from 'react';

class ChatItemLeft extends React.Component {

  constructor(props) {
    super(props);
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
