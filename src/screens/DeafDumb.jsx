import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import annyang from 'annyang';
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import './DeafDumb.css'; // Import external CSS file for styling

export const DeafDumb = () => {
  const [voiceSupported, setVoiceSupported] = useState(true);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    // Check if annyang is available
    if (!annyang) {
      setVoiceSupported(false);
      return;
    }

    // Define voice commands
    const commands = {
      'go to speech to text': () => { window.location.href = '/speech_to_text'; },
      'go to text to speech': () => { window.location.href = '/text_to_speech'; },
    };

    // Add commands to annyang
    annyang.addCommands(commands);

    // Request microphone access
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => {
        setPermissionGranted(true);
        annyang.start();
      })
      .catch(() => {
        setPermissionGranted(false);
      });
  }, []);

  return (
    <div className='deaf-dumb-page'>
      <Navbar />
      <div className="deaf-dumb-header">
        <h1 className='title'>Deaf and Dumb</h1>
        {!voiceSupported && (
          <p className="warning">Your browser does not support voice recognition. Please use a compatible browser.</p>
        )}
        {voiceSupported && !permissionGranted && (
          <p className="warning">Please grant microphone access to use voice commands.</p>
        )}
        {voiceSupported && permissionGranted && (
          <div className="deaf-dumb-cards">
            <Link to='/speech_to_text' className='deaf-dumb-card'>
              <Card name='Speech to Text' data='The speech to text feature will convert spoken words into the text.' />
            </Link>
            <Link to='/text_to_speech' className='deaf-dumb-card'>
              <Card name='Text to Speech' data='The text to speech feature will convert the text written on the screen into the voice available in the system.' />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
