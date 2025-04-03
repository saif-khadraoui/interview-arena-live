
import { Calendar, Users, Video, MessageSquare } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Create Your Profile",
      description: "Sign up and specify your industry, role, and experience level to find relevant interview partners."
    },
    {
      icon: <Calendar className="h-10 w-10 text-white" />,
      title: "Schedule a Session",
      description: "Book a time slot that works for both you and your matched interview partner."
    },
    {
      icon: <Video className="h-10 w-10 text-white" />,
      title: "Join the Interview",
      description: "Connect via our high-quality video platform and take turns interviewing each other."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      title: "Exchange Feedback",
      description: "Provide constructive feedback to help each other improve interview skills."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-interview-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-interview-slate-900 mb-4">
            How InterviewArena Works
          </h2>
          <p className="text-xl text-interview-slate-600 max-w-2xl mx-auto">
            A simple four-step process to help you practice and improve your interview skills.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute hidden md:block top-1/2 left-0 right-0 h-1 bg-interview-blue-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-interview-blue-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-interview-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-interview-slate-600">
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
