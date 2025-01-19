import React, { useState } from 'react';
    import './MessageInput.css';
    import { v4 as uuidv4 } from 'uuid';
    import { IoSend } from 'react-icons/io5';

    function MessageInput({ onSendMessage }) {
      const [message, setMessage] = useState('');

      const handleInputChange = (event) => {
        setMessage(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (message.trim()) {
          onSendMessage(message);
          setMessage('');
        }
      };

      return (
        <form className="message-input" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleInputChange}
          />
          <button type="submit">
            <IoSend />
          </button>
        </form>
      );
    }

    export default MessageInput;
