import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [likeCount, setLikeCount] = useState(0);

  const likeCounter = (unlike) => {
    setLikeCount(unlike ? likeCount - 1 : likeCount + 1);
  };

  const [remoteColor, setRemoteColor] = useState('green')
  const [localColor, setLocalColor] = useState('blue')

  const changeRemoteColor = (newColor) => {
    setRemoteColor(newColor);
  }

  const changeLocalColor = (newColor) => {
    setLocalColor(newColor);
  }

  const localSender = chatMessages[0]['sender'];
  let remoteSender = '';
  for (const entry of chatMessages) {
    if (entry.sender !== localSender) {
      remoteSender = entry.sender;
      break;
    }
  }


  return (
    <div id="App">
      <header>
        <h1>Chat between {localSender} and {remoteSender}</h1>
        <section>
          <div className='colorSelector'>
            <div>
              <p className={localColor}>{localSender}'s color</p>
              <ColorChoice setColorCallback={changeLocalColor} />
            </div>
            <p id='heartWidget'>{likeCount} ❤️s</p>
            <div>
              <p className={remoteColor}>{remoteSender}'s color</p>
              <ColorChoice setColorCallback={changeRemoteColor} />
            </div>
          </div>
        </section>

      </header>
      <main>
        <ChatLog entries={chatMessages} localSender={localSender} localColor={localColor} remoteColor={remoteColor} pressLike={likeCounter} />
      </main>
    </div>
  );
};

export default App;

