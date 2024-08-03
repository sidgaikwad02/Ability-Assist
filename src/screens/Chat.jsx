import React from 'react';
import SimpleForm from '../components/ChatBot';
import { Navbar } from '../components/Navbar';
import './Chat.css'; // Import the external CSS file

export const Chat = () => {
  return (
    <div className="chat-page">
      <Navbar />
      <div className="chat-container">
        <h1 className="chat-header">Ability Assist 🩵</h1>
        <div className="chat-form">
          <SimpleForm />
        </div>
        <div className="chat-footer">
          &copy; 2024 Ability Assist. All rights reserved.
        </div>
      </div>
    </div>
  );
}
