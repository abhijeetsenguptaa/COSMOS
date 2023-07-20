import axios from 'axios';
import React, { useRef, useState } from 'react';
export default function Cosmos() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const messagesRef = useRef(null);


  const handleInputChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSendClick = async () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, currentMessage]);
      setCurrentMessage('');

      try {
        // Send the user message to the backend
        const response = await axios.post('http://localhost:5000/chatbot/chat', {
          user_input: currentMessage,
        }, {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        });

        // Get the chatbot's response from the backend
        const chatbotResponse = response.data.chatbot_response;

        // Update the messages with the chatbot's response
        setMessages((prevMessages) => [...prevMessages, chatbotResponse]);
      } catch (error) {
        console.error('Error sending message to backend:', error);
      }
    }
  };

  return (
    <div className='flex w-full fixed'>
      {/* Left Side */}
      <div className='w-3/12 bg-custom-black text-white h-screen flex flex-col justify-between p-2 opacity-90'>
        <div className='flex justify-between'>
          <div className='border rounded flex w-5/6 p-2'>
            <div>+</div>
            <div className='mx-2'>New chat</div>
          </div>
          <div className='border rounded w-8'>
            <i></i>
          </div>
        </div>
        <div id='scroll-bar'>{/* History of the Message */}</div>
        <div className='flex border rounded mb-2 p-2 items-center'>
          <div>Abhijeet</div>
          <div>. . .</div>
        </div>
      </div>

      {/* Right Side */}
      <div className='bg-custom-gray w-full text-white flex justify-center'>
        <div className='w-11/12 text-center mt-6'>
          <h1 className='text-3xl font-bold'>COSMOS</h1>
          <div ref={messagesRef} className='h-3/4 mt-4 overflow-y-auto p-4 bg-custom-gray text-white'>
            {messages.map((message, index) => (
              <div key={index} className='border p-2 my-2 rounded'>
                {message}
              </div>
            ))}
          </div>
          <div className='relative'>
            <input
              type='text'
              value={currentMessage}
              onChange={handleInputChange}
              className='rounded bg-custom-gray fixed bottom-10 w-7/12 right-32 p-2.5 pl-10'
              style={{ boxShadow: '0 0 10px black' }}
              placeholder='Send a message'
            />
            <button
              className='fixed right-36 bottom-11 px-4 py-1 bg-custom-black text-white rounded'
              style={{ boxShadow: '0 0 10px black' }}
              onClick={handleSendClick}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
