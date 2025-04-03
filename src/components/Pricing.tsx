
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out the platform",
      features: [
        "3 practice interviews per month",
        "Basic video quality",
        "Community question bank",
        "Post-interview feedback"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For serious job seekers",
      features: [
        "Unlimited practice interviews",
        "HD video quality",
        "Industry-specific questions",
        "Detailed performance analytics",
        "Priority matching",
        "Interview recordings"
      ],
      buttonText: "Get Pro",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Team",
      price: "$49",
      period: "per month",
      description: "For teams and organizations",
      features: [
        "All Pro features",
        "Up to 10 team members",
        "Custom interview scenarios",
        "Admin dashboard",
        "Team progress reports",
        "Dedicated support"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-interview-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-interview-slate-600 max-w-2xl mx-auto">
            Choose the plan that works best for your interview preparation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden border transition-all ${
                plan.popular 
                  ? "border-interview-blue-500 shadow-xl scale-105 md:scale-110 relative z-10" 
                  : "border-interview-slate-200 shadow-md hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="bg-interview-blue-500 text-white py-2 px-4 text-center">
                  <p className="font-medium text-sm">MOST POPULAR</p>
                </div>
              )}
              
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-interview-slate-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-interview-slate-900">{plan.price}</span>
                  <span className="text-interview-slate-500 ml-2">/{plan.period}</span>
                </div>
                <p className="text-interview-slate-600 mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-interview-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-interview-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant as "default" | "outline"} 
                  className={`w-full py-6 ${
                    plan.buttonVariant === 'default' 
                      ? 'bg-interview-blue-600 hover:bg-interview-blue-700' 
                      : 'border-interview-slate-300 text-interview-slate-800'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
