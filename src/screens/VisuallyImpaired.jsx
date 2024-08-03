import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import annyang from 'annyang';
import Card from '../components/Card';
import { Navbar } from '../components/Navbar';
import './VisuallyImpaired.css'; // Import the CSS file

export const VisuallyImpaired = () => {
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
      'go to object detection': () => { window.location.href = '/object_detection'; },
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

    // Cleanup function to stop annyang when component unmounts
    return () => {
      if (annyang) {
        annyang.abort();
      }
    };
  }, []);

  return (
    <div className='visually-impaired-page'>
      <Navbar />
      <div className="visually-impaired-header">
        <h1 className='title'>Visually Impaired</h1>
      </div>
      <div className="visually-impaired-content">
        {!voiceSupported && (
          <p className='warning'>Your browser does not support voice recognition. Please use a compatible browser.</p>
        )}
        {voiceSupported && !permissionGranted && (
          <p className='warning'>Please grant microphone access to use voice commands.</p>
        )}
        {voiceSupported && permissionGranted && (
          <div className="visually-impaired-cards">
            <Link to='/object_detection' className='visually-impaired-card'>
              <Card
                name='Object Detection'
                data='The Object Detection Tool is designed to detect objects shown in front of the camera.'
              />
            </Link>
            <Link to='/text_to_speech' className='visually-impaired-card'>
              <Card
                name='Text to Speech'
                data='The Text to Speech feature converts text on the screen into spoken voice.'
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
