import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "../../assets/hero-bg.png";
import Button from "../ui/Button";
import SearchCard from "./SearchCard";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center overflow-hidden bg-cover bg-center bg-no-repeat px-4 pt-28 pb-10" style={{backgroundImage: `url(${heroBg})`}}>

      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-blue-950/20"/>
      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5text-[11px] font-semibold tracking-wider text-white backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" />
          AI-POWERED TRAVEL PLANNER
        </span>
        <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          Explore the World <br /> With Confidence
        </h1>
        <p className="mt-5 max-w-xl text-sm text-white/90 sm:text-base">
          Seamless global travel planning, personalized experiences, and trusted booking - all in one place.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <Button>
            Start Your Journey <ArrowRight className="" />
          </Button>
          <Button variant="outline">
            View Destinations <ArrowRight className="" />
          </Button>
        </div>
      </div>
      <div className="min-h-40 flex-1" />

      <div className="relative z-10 flex-full justify-center">
        <SearchCard/>
      </div>
    </section>
  );
}