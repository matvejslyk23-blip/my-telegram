'use client';
import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, {
        id: Date.now(),
        text: input,
        time: new Date().toLocaleTimeString()
      }]);
      setInput('');
    }
  };

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <header style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '1rem',
        textAlign: 'center',
        color: 'white',
        backdropFilter: 'blur(10px)'
      }}>
        <h1>Telegram Clone 🔒</h1>
        <p>Secure Messaging</p>
      </header>

      <div style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
        {messages.map(msg => (
          <div key={msg.id} style={{
            background: 'rgba(255,255,255,0.9)',
            marginBottom: '0.5rem',
            padding: '0.75rem',
            borderRadius: '1rem',
            maxWidth: '70%'
          }}>
            <div>{msg.text}</div>
            <div style={{ fontSize: '0.75rem', color: '#666', textAlign: 'right' }}>
              {msg.time}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        padding: '1rem',
        gap: '0.5rem',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: '0.75rem',
            border: 'none',
            borderRadius: '2rem',
            outline: 'none'
          }}
        />
        <button onClick={sendMessage} style={{
          padding: '0.75rem 1.5rem',
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '2rem',
          cursor: 'pointer'
        }}>
          Send
        </button>
      </div>
    </div>
  );
}