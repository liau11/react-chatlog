import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likeCount, setLikeCount] = useState(0);

  const likeCounter = (unlike) => {
    setLikeCount(unlike ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <p>{likeCount} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={chatMessages} pressLike={likeCounter} />
      </main>
    </div>
  );
};

export default App;

