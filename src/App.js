import "./App.css";
import Login from "./screens/Login.js";
import SignUp from "./screens/SignUp.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ObjectDetection from "./screens/ObjectDetection";
import SignDetection from "./screens/SignDetection";
import SpeechToText from "./screens/SpeechToText";
import TextToSpeech from "./screens/TextToSpeech";
import About from "./screens/About.jsx";
import Footer from './components/Footer';
import Contact from './screens/Contact.js';
import PDFReader from "./screens/PDFReader";
import { Home } from './screens/Home.jsx'
import { VisuallyImpaired } from "./screens/VisuallyImpaired";
import { DeafDumb } from "./screens/DeafDumb";
import { Dyslexia } from "./screens/Dyslexia";
import { DyslexiaReader } from "./screens/DyslexiaReader";
import { Chat } from "./screens/Chat";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path="/" element={<Home />} />   
          <Route path="/visually_impaired" element={<VisuallyImpaired />} />   
          <Route path="/deaf_and_dumb" element={<DeafDumb />} />   
          <Route path="/dyslexia" element={<Dyslexia />} />   
          <Route path="/dyslexia_reader" element={<DyslexiaReader />} />   
          <Route path="/pdf_reader" element={<PDFReader />} />   
          <Route path="/speech_to_text" element={<SpeechToText />} />   
          <Route path="/text_to_speech" element={<TextToSpeech />} />   
          <Route path="/object_detection" element={<ObjectDetection />} />     
          <Route path="/sign_detection" element={<SignDetection />} /> 
          <Route path="/About_us" element={<About/>} />
          <Route path="chat" element={<Chat />} />    
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/footer" element={<Footer/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;