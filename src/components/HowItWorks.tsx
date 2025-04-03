
import { Calendar, Users, Video, MessageSquare } from "lucide-react";
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Users />,
      title: "Create Your Profile",
      description: "Sign up and specify your industry, role, and experience level to find relevant interview partners."
    },
    {
      icon: <Calendar />,
      title: "Schedule a Session",
      description: "Book a time slot that works for both you and your matched interview partner."
    },
    {
      icon: <Video />,
      title: "Join the Interview",
      description: "Connect via our high-quality video platform and take turns interviewing each other."
    },
    {
      icon: <MessageSquare />,
      title: "Exchange Feedback",
      description: "Provide constructive feedback to help each other improve interview skills."
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">
            How InterviewArena Works
          </h2>
          <p className="how-it-works-description">
            A simple four-step process to help you practice and improve your interview skills.
          </p>
        </div>

        <div className="steps-container">
          {/* Connection Line */}
          <div className="steps-connection-line"></div>
          
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-icon">
                  {step.icon}
                </div>
                <h3 className="step-title">
                  {step.title}
                </h3>
                <p className="step-description">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
