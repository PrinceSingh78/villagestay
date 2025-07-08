import React, { useState } from 'react';
import axios from 'axios';

const ChatAssistant = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = async () => {
    if (!query.trim()) return;
    try {
      const res = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt: query,
          max_tokens: 100
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer YOUR_OPENAI_API_KEY`
          }
        }
      );
      setResponse(res.data.choices[0].text);
    } catch (err) {
      setResponse('Something went wrong.');
    }
  };

  return (
    <div className="chat-box">
      <h3>Ask AI Assistant</h3>
      <input
        type="text"
        placeholder="Type your question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn" onClick={handleAsk}>Ask</button>
      {response && <div className="response">{response}</div>}
    </div>
  );
};

export default ChatAssistant;
