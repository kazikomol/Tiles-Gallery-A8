"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const DEFAULT_IMAGE = "https://images.pexels.com/photos/36394708/pexels-photo-36394708.jpeg";

const Banner = ({ tiles = [] }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // 1. Stabilize the images array so reference changes don't trigger re-renders
  const images = useMemo(() => {
    if (!Array.isArray(tiles) || tiles.length === 0) return [DEFAULT_IMAGE];

    const extracted = tiles
      .map((tile) => (typeof tile === "string" ? tile : tile?.image || tile?.src))
      .filter(Boolean);

    return extracted.length > 0 ? extracted : [DEFAULT_IMAGE];
  }, [tiles]);

  // 2. Safe interval rotation without effect loops
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images]); // Safe now because `images` is memoized

  const activeImage = images[currentIdx] || DEFAULT_IMAGE;

  return (
    <div className="relative h-[80vh] w-full overflow-hidden rounded-lg shadow-2xl bg-black">
      {/* Background Image Crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: `url('${activeImage}')` }}
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        />
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full rounded-lg bg-black/50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-3xl leading-[1.1]"
          >
            Discover Your Perfect{" "}
            <span className="bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Aesthetic
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: 0.30 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Link href="/browse">
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;



// import { Button } from "@heroui/react";
// import Link from "next/link";

// const Banner = () => {
// return (
//   <div className="bg-[url('https://images.pexels.com/photos/36394708/pexels-photo-36394708.jpeg')] h-[80vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
//     {/* Overlay */}
//     <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
//       <div className="max-w-7xl mx-auto px-6 text-white">
//         <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-3xl leading-[1.1]">
//         Discover Your Perfect{" "}
//         <span className="bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
//           Aesthetic
//         </span>
//       </h1>
        

//         <div className="flex flex-wrap gap-4 items-center">
//         <Link href="/browse">
//           <Button 
//             size="lg"
//             className="bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-95 transition-all rounded-xl border-none"
//           >
//             Browse Now
//           </Button>
//         </Link>

//         <Link href="/about">
//           <Button 
//             size="lg"
//             variant="bordered"
//             className="border-white/30 text-white hover:bg-white/10 font-medium rounded-xl backdrop-blur-md transition-all"
//           >
//             Learn More
//           </Button>
//         </Link>
//       </div>
//       </div>
//     </div>
//   </div>
// );
// };

// export default Banner;