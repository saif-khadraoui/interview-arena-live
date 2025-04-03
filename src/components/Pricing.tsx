
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for casual interview practice",
      price: "Free",
      period: "forever",
      features: [
        "3 practice interviews per month",
        "Basic video quality",
        "Community question bank",
        "Email support"
      ],
      popular: false,
      className: "basic"
    },
    {
      name: "Pro",
      description: "For serious job seekers",
      price: "$19",
      period: "per month",
      features: [
        "Unlimited practice interviews",
        "HD video quality",
        "Industry-specific questions",
        "Performance analytics",
        "Priority support"
      ],
      popular: true,
      className: "popular"
    },
    {
      name: "Team",
      description: "For career centers and organizations",
      price: "$49",
      period: "per month",
      features: [
        "Everything in Pro plan",
        "Team management dashboard",
        "Custom question libraries",
        "Advanced analytics",
        "Dedicated account manager"
      ],
      popular: false,
      className: ""
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            Simple, Transparent Pricing
          </h2>
          <p className="pricing-description">
            Choose the plan that's right for your interview practice needs.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.className}`}>
              <h3 className="pricing-card-title">{plan.name}</h3>
              <p className="pricing-card-description">{plan.description}</p>
              <div className="pricing-card-price">
                <span className="pricing-card-amount">{plan.price}</span>
                <span className="pricing-card-period">{plan.period}</span>
              </div>
              <div className="pricing-card-features">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="pricing-card-feature">
                    <Check className="pricing-card-feature-icon" size={18} />
                    <span className="pricing-card-feature-text">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="pricing-card-button">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
