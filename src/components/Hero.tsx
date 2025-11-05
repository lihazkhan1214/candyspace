import { Grid3X3, User } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import male from "../assets/male.png"
import female from "../assets/female.png"

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">


      <div 
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-end ">
          <div className="bg-white/95 md:mt-40 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-sm w-full">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button className="flex flex-col border border-black items-center justify-center p-4 bg-[hsl(199,100%,40%)] rounded-xl text-white hover:opacity-90 transition-opacity">
                
                <p className="text-[12px] text-center uppercase leading-tight font-medium">
                  I'm a gentleman<br />looking to support<br />a lady
                </p>
                <img src={male} alt="" className="" />
              </button>
              
              <button className="flex flex-col border border-black items-center justify-center p-4 bg-[hsl(330,85%,52%)] rounded-xl text-white hover:opacity-90 transition-opacity">
                
                <p className="text-[12px] text-center leading-tight uppercase font-medium">
                  I'm a lady looking<br />for support and<br />guidance
                </p>
                 <img src={female} alt="" className="" />
              </button>
            </div>
            
            <button className="w-full bg-gradient-to-r border border-black from-[hsl(199,100%,40%)] to-[hsl(330,85%,52%)] hover:opacity-90 transition-opacity text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wide">
              JOIN FOR FREE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
