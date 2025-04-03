
import { ArrowRight, Video } from "lucide-react";
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-heading">
            Practice Interviews.
            <span className="hero-heading-highlight"> Level Up Together.</span>
          </h1>
          <p className="hero-description">
            Connect with peers for realistic mock interviews over video calls. 
            Give feedback, receive insights, and ace your next interview.
          </p>
          <div className="hero-buttons">
            <button className="hero-primary-button">
              Start Practicing Now
              <ArrowRight className="hero-button-icon" size={20} />
            </button>
            <button className="hero-secondary-button">
              Watch Demo
              <Video className="hero-button-icon" size={20} />
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-main">
            <div className="hero-image-video">
              <div className="hero-image-backdrop"></div>
              <div className="hero-image-content">
                <div className="hero-image-grid">
                  <div className="hero-image-person">
                    <div className="hero-image-person-avatar"></div>
                  </div>
                  <div className="hero-image-person">
                    <div className="hero-image-person-avatar"></div>
                  </div>
                </div>
                <div className="hero-image-status">
                  <p className="hero-image-status-title">Connection established</p>
                  <p className="hero-image-status-subtitle">Mock interview in progress...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image-backdrop"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
