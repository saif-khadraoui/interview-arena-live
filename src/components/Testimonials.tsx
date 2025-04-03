
import { Quote } from "lucide-react";
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "InterviewArena helped me prepare for my Google interview. The feedback I received from my practice partners was invaluable.",
      author: "Sarah Johnson",
      role: "Software Engineer at Google",
      avatar: "SJ"
    },
    {
      quote: "After 4 practice interviews on this platform, I felt so much more confident. I ended up getting offers from 3 different companies!",
      author: "Michael Chen",
      role: "Product Manager at Stripe",
      avatar: "MC"
    },
    {
      quote: "The realistic interview practice made all the difference. I could identify my weak points and work on them before the real interviews.",
      author: "Priya Patel",
      role: "Data Scientist at Netflix",
      avatar: "PP"
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Success Stories
          </h2>
          <p className="testimonials-description">
            See how InterviewArena has helped job seekers land their dream roles.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="testimonial-quote-icon" />
              <p className="testimonial-text">
                "{testimonial.quote}"
              </p>
              
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.avatar}
                </div>
                <div className="testimonial-info">
                  <p className="testimonial-info-name">{testimonial.author}</p>
                  <p className="testimonial-info-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
