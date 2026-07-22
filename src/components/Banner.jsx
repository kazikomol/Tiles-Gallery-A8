



import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
return (
  <div className="bg-[url('https://images.pexels.com/photos/36394708/pexels-photo-36394708.jpeg')] animate__bounceIn animate_delay-2s h-[80vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
    {/* Overlay */}
    <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-3xl leading-[1.1]">
        Discover Your Perfect{" "}
        <span className="bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Aesthetic
        </span>
      </h1>
        

        <div className="flex flex-wrap gap-4 items-center">
        <Link href="/all-tiles">
          <Button 
            size="lg"
            className="bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-95 transition-all rounded-xl border-none"
          >
            Browse Now
          </Button>
        </Link>

        <Link href="/about">
          <Button 
            size="lg"
            variant="bordered"
            className="border-white/30 text-white hover:bg-white/10 font-medium rounded-xl backdrop-blur-md transition-all"
          >
            Learn More
          </Button>
        </Link>
      </div>
      </div>
    </div>
  </div>
);
};

export default Banner;