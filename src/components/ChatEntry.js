import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  // Change states of isLiked and likeCount (in Parent component)
  const [isLiked, changeLikeStatus] = useState(props.liked);

  const toggleLike = () => {
    changeLikeStatus(!isLiked)
    props.changeLike(isLiked, props.id);
  }

  const likeStatus = isLiked ? '❤️' : '🤍';

  // Assign classNames based on sender
  let entryStyle = 'chat-entry remote';

  if (props.sender === props.localSender) {
    entryStyle = 'chat-entry local';
  }

  return (
    <div className={entryStyle}>
      <h2 className={props.sender === props.localSender ? props.localColor : props.remoteColor}>{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp timeStamp={props.timeStamp} /></p>
        <button className="like" onClick={toggleLike}>{likeStatus}</button>
      </section>
    </div >
  );
};


ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  localSender: PropTypes.string,
  changeLike: PropTypes.func
};

export default ChatEntry;