import React from 'react';

class ChatItemRight extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <div className="imageParentMain">
              <img className="personImage chatImageRight" src="../images/chris_profile_cropped.jpg"/>
          </div>
          <div className="chatMessageRight">
            <p className="chatTextRight">{this.props.message}</p>
          </div>
          <div className="chatTimeRight">
            <p>{this.props.time}</p>
          </div>
      </div>
    );
  }
}

export default ChatItemRight;
