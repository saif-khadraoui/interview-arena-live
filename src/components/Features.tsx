
import { Users, Video, MessageSquare, Clock, Zap, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Video className="h-8 w-8 text-interview-blue-500" />,
      title: "High-Quality Video",
      description: "Crystal clear HD video calls for a realistic interview experience."
    },
    {
      icon: <Users className="h-8 w-8 text-interview-blue-500" />,
      title: "Peer Matching",
      description: "Connect with others in your field for relevant practice interviews."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-interview-blue-500" />,
      title: "Instant Feedback",
      description: "Exchange constructive feedback after each interview session."
    },
    {
      icon: <Clock className="h-8 w-8 text-interview-blue-500" />,
      title: "Flexible Scheduling",
      description: "Book sessions when it's convenient for both parties."
    },
    {
      icon: <Zap className="h-8 w-8 text-interview-blue-500" />,
      title: "Industry Questions",
      description: "Access to a library of real interview questions by industry."
    },
    {
      icon: <Award className="h-8 w-8 text-interview-blue-500" />,
      title: "Performance Tracking",
      description: "Monitor your progress and improvement over time."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-interview-slate-900 mb-4">
            Features Designed for Interview Success
          </h2>
          <p className="text-xl text-interview-slate-600 max-w-2xl mx-auto">
            Everything you need to practice effectively and improve your interview skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-interview-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-interview-blue-50 p-3 inline-flex rounded-lg mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-interview-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-interview-slate-600">
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
