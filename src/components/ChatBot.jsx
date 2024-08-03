import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#4CAF50',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#4CAF50',
  botFontColor: '#fff',
  userBubbleColor: '#ff5722',
  userFontColor: '#fff',
  fontFamily: 'Arial, sans-serif',
};

function SimpleForm() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hello! Welcome to Ability Assist. I am your friendly chatbot. What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Nice to meet you, {previousValue}! How can I assist you today?',
            trigger: '4',
          },
          {
            id: '4',
            options: [
              { value: 'services', label: 'Tell me about your services', trigger: 'services' },
              { value: 'contact', label: 'Contact support', trigger: 'contact' },
              { value: 'feedback', label: 'Give feedback', trigger: 'feedback' },
            ],
          },
          {
            id: 'services',
            message: 'We offer several features to assist people with disabilities. Which feature would you like to know more about?',
            trigger: 'featureOptions',
          },
          {
            id: 'featureOptions',
            options: [
              { value: 'objectDetection', label: 'Object Detection', trigger: 'objectDetection' },
              { value: 'textToSpeech', label: 'Text-to-Speech Detection', trigger: 'textToSpeech' },
              { value: 'speechToText', label: 'Speech-to-Text', trigger: 'speechToText' },
              { value: 'signDetection', label: 'Sign Detection', trigger: 'signDetection' },
              { value: 'dyslexia', label: 'Dyslexia', trigger: 'dyslexia' },
              { value: 'visuallyImpaired', label: 'Visually Impaired Assistance', trigger: 'visuallyImpaired' },
              { value: 'deafDumb', label: 'Deaf and Mute Assistance', trigger: 'deafDumb' },
            ],
          },
          {
            id: 'objectDetection',
            message: 'Our Object Detection feature helps identify objects in real-time using your device\'s camera. It\'s designed to assist visually impaired individuals.',
            trigger: 'moreHelp',
          },
          {
            id: 'textToSpeech',
            message: 'The Text-to-Speech Detection feature converts written text into spoken words, making it easier for people with reading disabilities to access written content.',
            trigger: 'moreHelp',
          },
          {
            id: 'speechToText',
            message: 'Speech-to-Text converts spoken words into text. This feature is helpful for individuals who have difficulty typing or writing.',
            trigger: 'moreHelp',
          },
          {
            id: 'signDetection',
            message: 'Our Sign Detection feature translates sign language into text, facilitating communication for those who use sign language.',
            trigger: 'moreHelp',
          },
          {
            id: 'dyslexia',
            message: 'Dyslexia is a learning disorder that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words (decoding). Also called a reading disability, dyslexia is a result of individual differences in areas of the brain that process language.',
            trigger: 'moreHelp',
          },
          {
            id: 'visuallyImpaired',
            message: 'For visually impaired users, we offer features like object detection, text-to-speech, and voice-guided navigation to make using our website easier.',
            trigger: 'moreHelp',
          },
          {
            id: 'deafDumb',
            message: 'For deaf and mute individuals, we provide speech-to-text and sign language detection features to assist with communication and content access.',
            trigger: 'moreHelp',
          },
          {
            id: 'language',
            message: 'Currently, we only support English. However, we are working on adding more languages soon.',
            trigger: 'moreHelp',
          },
          {
            id: 'liveChat',
            message: 'Connecting you to a live support agent...',
            // Logic for connecting to a live agent should be implemented here
            end: true,
          },
          {
            id: 'moreHelp',
            message: 'Is there anything else you would like to know about?',
            trigger: 'additionalHelpOptions',
          },
          {
            id: 'additionalHelpOptions',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'services' },
              { value: 'no', label: 'No', trigger: 'end' },
            ],
          },
          {
            id: 'contact',
            message: 'You can contact our support team at support@abilityassist.com or call us at (123) 456-7890.',
            end: true,
          },
          {
            id: 'feedback',
            message: 'We appreciate your feedback! Please type your feedback below.',
            trigger: 'feedbackInput',
          },
          {
            id: 'feedbackInput',
            user: true,
            trigger: 'thankYou',
          },
          {
            id: 'thankYou',
            message: 'Thank you for your feedback!',
          },
          {
            id: 'end',
            message: 'Thank you for visiting Ability Assist! Have a great day!',
            end: true,
          },
        ]}
        
      />
    </ThemeProvider>
  );
}

export default SimpleForm;
