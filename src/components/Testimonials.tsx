
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

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
    <section id="testimonials" className="py-20 bg-interview-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-interview-slate-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-interview-slate-600 max-w-2xl mx-auto">
            See how InterviewArena has helped job seekers land their dream roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md relative"
            >
              <Quote className="h-10 w-10 text-interview-blue-100 absolute top-6 right-6" />
              <p className="text-interview-slate-700 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-interview-blue-200 text-interview-blue-700">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-interview-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-interview-slate-500">{testimonial.role}</p>
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
