import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [isLiked, changeLikeStatus] = useState(false);

  const toggleLike = () => {
    changeLikeStatus(!isLiked)
  }

  const likeStatus = isLiked ? '❤️' : '🤍';

  let entryLocation = 'chat-entry remote';

  if (props.sender === 'Vladimir') {
    entryLocation = 'chat-entry local';
  }

  return (
    <div className={entryLocation}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp timeStamp={props.timeStamp} /></p>
        <button className="like" onClick={event => { toggleLike(); props.changeLike(isLiked); }}>{likeStatus}</button>
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
