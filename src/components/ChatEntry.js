import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [isLiked, changeLikeStatus] = useState(false);

  const toggleLike = () => {
    changeLikeStatus(!isLiked)
    props.changeLike(isLiked);
  }

  const likeStatus = isLiked ? '❤️' : '🤍';

  let entryStyle = 'chat-entry remote';

  if (props.sender === 'Vladimir') {
    entryStyle = 'chat-entry local';
  }

  return (
    <div className={entryStyle}>
      <h2 className={props.sender === props.localSender ? props.localColor : props.remoteColor}>{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp timeStamp={props.timeStamp} /></p>
        <button className="like" onClick={() => { toggleLike() }}>{likeStatus}</button>
      </section>
    </div >
  );
};
ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
