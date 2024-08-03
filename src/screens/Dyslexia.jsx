import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import annyang from 'annyang';
import Card from '../components/Card';
import { Navbar } from '../components/Navbar';
import './Dyslexia.css'; // Import the external CSS file

export const Dyslexia = () => {
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
      'go to dyslexia reader': () => { window.location.href = '/dyslexia_reader'; },
      'go to sign detection': () => { window.location.href = '/sign_detection'; },
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

    // Cleanup function to stop annyang when component unmounts
    return () => {
      if (annyang) {
        annyang.abort();
      }
    };
  }, []);

  return (
    <div className='dyslexia-page'>
      <Navbar />
      <div className="dyslexia-header">
        <h1 className='title'>Dyslexia</h1>
      </div>
      <div className="dyslexia-content">
        {!voiceSupported && (
          <p className='warning'>Your browser does not support voice recognition. Please use a compatible browser.</p>
        )}
        {voiceSupported && !permissionGranted && (
          <p className='warning'>Please grant microphone access to use voice commands.</p>
        )}
        {voiceSupported && permissionGranted && (
          <div className="dyslexia-cards">
            <Link to='/dyslexia_reader' className='dyslexia-card'>
              <Card
                name='Dyslexia Reader'
                data='This tool converts unreadable fonts in images to normal text that is easier to read.'
              />
            </Link>
            <Link to='/sign_detection' className='dyslexia-card'>
              <Card
                name='Sign Detection'
                data='This feature converts hand gestures made by the user into words.'
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
