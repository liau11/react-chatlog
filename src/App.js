import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';


const App = () => {

  // Update messages when like button is toggled
  const [messages, setMessages] = useState(chatMessages);

  const updateChat = (entryId) => {
    const updateMessages = messages.map(message => {
      if (message.id === entryId) {
        return {
          ...message,
          liked: !message.liked
        }
      };

      return message
    });

    setMessages(updateMessages);
  }

  // Update total like count 
  const [likeCount, setLikeCount] = useState(0);

  const updateLikeCount = (unlike) => {
    setLikeCount(prevCount => unlike ? prevCount - 1 : prevCount + 1)
  }

  // Update color
  const [color, setColor] = useState({ local: 'blue', remote: 'green' })

  const changeColor = (sender, newColor) => {
    setColor(prevColor => ({ ...prevColor, [sender]: newColor }));
  }

  // Assign which senders are localSender and remoteSender
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
              <p className={color.remote}>{remoteSender}'s color</p>
              <ColorChoice setColorCallback={newColor => changeColor('remote', newColor)} />
            </div>
          </div>
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatMessages}
          localSender={localSender}
          localColor={color.local}
          remoteColor={color.remote}
          changeLike={(unlike, entryId) => {
            updateLikeCount(unlike);
            updateChat(entryId);
          }
          } />
      </main>
    </div>
  );
};

export default App;
