import { Navbar } from "../components/Navbar";
import logo from '../utils/logo.png';
import Footer from "../components/Footer";
import './Home.css'; 

export const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='content-wrapper'>
        <img className='logo-img' src={logo} alt="logo" />
        <div className='text-section'>
          <h1 className='main-heading'>Believe you can and you’re halfway there.</h1>
          <h2 className='sub-heading'>
            Your success and happiness lies in you. Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.
          </h2>
        </div>
        <div className='stats-section'>
          <div className='stat'>
            <h2>10x</h2>
            <p>Increased accessibility over traditional programs</p>
          </div>
          <div className='stat'>
            <h2>+20,000</h2>
            <p>Empowered individuals with disabilities</p>
          </div>
          <div className='stat'>
            <h2>95%</h2>
            <p>User satisfaction rate</p>
          </div>
          <div className='stat'>
            <h2>+1,000</h2>
            <p>Assistance requests fulfilled within seconds</p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <div className="left-text">
          <h2>-we rise to great heights by a winding staircase of small steps.</h2>
          <p className="subb-heading">GIVE A HELPING HAND TO THOSE WHO NEED IT!</p>
        </div>
        <div className="gallery">
          <div className="box row-2" id="box-1"  style={{ backgroundImage: "url('https://i.pinimg.com/736x/8b/74/12/8b74127c9a47dbfe07ec24b3b06f4381.jpg')" }}></div>
          <div className="box row-2" style={{ backgroundImage: "url('https://i.pinimg.com/564x/21/a9/7f/21a97f2a896f1df801cdc6997767bae2.jpg')" }}></div>
          <div className="box row-2" style={{ backgroundImage: "url('https://images.healthshots.com/healthshots/en/uploads/2022/12/03161045/disabled-people-770x436.jpg')" }}></div>
          <div className="box row-2" style={{ backgroundImage: "url('https://miro.medium.com/v2/resize:fit:828/format:webp/1*gFLwi2FnVr2SdqlgbUdLSw.png')" }}></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
