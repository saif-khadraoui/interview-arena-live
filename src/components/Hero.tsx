
import { Button } from "@/components/ui/button";
import { ArrowRight, Video } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-interview-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-interview-slate-900 leading-tight mb-6">
              Practice Interviews.
              <span className="text-interview-blue-600"> Level Up Together.</span>
            </h1>
            <p className="text-xl text-interview-slate-600 mb-8 max-w-lg">
              Connect with peers for realistic mock interviews over video calls. 
              Give feedback, receive insights, and ace your next interview.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-interview-blue-600 hover:bg-interview-blue-700 text-white font-medium py-3 px-6">
                Start Practicing Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-interview-slate-300 text-interview-slate-700 font-medium py-3 px-6">
                Watch Demo
                <Video className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white p-2 rounded-xl shadow-xl">
              <div className="bg-interview-slate-800 rounded-lg aspect-video flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-interview-blue-900/20 backdrop-blur-sm"></div>
                <div className="z-10 text-center p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-interview-blue-600 rounded-lg p-4 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-interview-slate-100"></div>
                    </div>
                    <div className="bg-interview-blue-500 rounded-lg p-4 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-interview-slate-100"></div>
                    </div>
                  </div>
                  <div className="bg-interview-slate-700 p-3 rounded-lg text-white">
                    <p className="font-medium">Connection established</p>
                    <p className="text-sm text-interview-slate-300">Mock interview in progress...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-interview-blue-100 h-full w-full rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
