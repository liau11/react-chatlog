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

  const [color, setColor] = useState({ local: 'blue', remote: 'green' })

  const changeColor = (sender, newColor) => {
    setColor(prevColor => ({ ...prevColor, [sender]: newColor }));
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
        <h1>Chat between <span className={color.local}>{localSender}</span> and <span className={color.remote}>{remoteSender}</span></h1>
        <section>
          <div className='colorSelector'>
            <div>
              <p className={color.local}>{localSender}'s color</p>
              <ColorChoice setColorCallback={newColor => changeColor('local', newColor)} />
            </div>
            <p id='heartWidget'>{likeCount} ❤️s</p>
            <div>
              <p className={color.remote}>{color.remote}'s color</p>
              <ColorChoice setColorCallback={newColor => changeColor('remote', newColor)} />
            </div>
          </div>
        </section>

      </header>
      <main>
        <ChatLog entries={chatMessages} localSender={localSender} localColor={color.remote} remoteColor={color.remote} pressLike={likeCounter} />
      </main>
    </div>
  );
};

export default App;

