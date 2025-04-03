
import { Users, Video, MessageSquare, Clock, Zap, Award } from "lucide-react";
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Video />,
      title: "High-Quality Video",
      description: "Crystal clear HD video calls for a realistic interview experience."
    },
    {
      icon: <Users />,
      title: "Peer Matching",
      description: "Connect with others in your field for relevant practice interviews."
    },
    {
      icon: <MessageSquare />,
      title: "Instant Feedback",
      description: "Exchange constructive feedback after each interview session."
    },
    {
      icon: <Clock />,
      title: "Flexible Scheduling",
      description: "Book sessions when it's convenient for both parties."
    },
    {
      icon: <Zap />,
      title: "Industry Questions",
      description: "Access to a library of real interview questions by industry."
    },
    {
      icon: <Award />,
      title: "Performance Tracking",
      description: "Monitor your progress and improvement over time."
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">
            Features Designed for Interview Success
          </h2>
          <p className="features-description">
            Everything you need to practice effectively and improve your interview skills.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">
                {feature.title}
              </h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
