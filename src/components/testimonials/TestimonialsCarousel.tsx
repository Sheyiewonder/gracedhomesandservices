// "use client";

// import { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// type Props = {
//   children: React.ReactNode;
// };

// export default function TestimonialsCarousel({
//   children,
// }: Props) {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (!scrollRef.current) return;

//     const amount = scrollRef.current.clientWidth * 0.85;

//     scrollRef.current.scrollBy({
//       left: direction === "left" ? -amount : amount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="relative">

//       {/* Navigation */}

//       <div className="absolute -top-20 right-0 hidden gap-3 md:flex">

//         <button
//           onClick={() => scroll("left")}
//           className="
//             flex
//             h-12
//             w-12
//             items-center
//             justify-center
//             rounded-full
//             border
//             border-border
//             bg-card/80
//             backdrop-blur-xl
//             transition-all
//             duration-300
//             hover:border-primary
//             hover:bg-primary
//             hover:text-white
//           "
//         >
//           <ChevronLeft size={22} />
//         </button>

//         <button
//           onClick={() => scroll("right")}
//           className="
//             flex
//             h-12
//             w-12
//             items-center
//             justify-center
//             rounded-full
//             border
//             border-border
//             bg-card/80
//             backdrop-blur-xl
//             transition-all
//             duration-300
//             hover:border-primary
//             hover:bg-primary
//             hover:text-white
//           "
//         >
//           <ChevronRight size={22} />
//         </button>

//       </div>

//       {/* Scroll Area */}

//       <div
//         ref={scrollRef}
//         className="
//           flex
//           snap-x
//           snap-mandatory
//           gap-8
//           overflow-x-auto
//           scroll-smooth
//           pb-6

//           scrollbar-hide
//         "
//       >
//         {children}
//       </div>

//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/testimonials";

const AUTO_PLAY_DELAY = 5000;

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setDirection(-1);
    setIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

    useEffect(() => {

        const handleKey = (e: KeyboardEvent) => {

            if (e.key === "ArrowLeft") {
                previous();
            }

            if (e.key === "ArrowRight") {
                next();
            }

        };

        window.addEventListener("keydown", handleKey);

        return () => window.removeEventListener("keydown", handleKey);

    }, []);

  const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.96,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },

  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.96,
  }),
};

return (
  <div
    className="relative mx-auto max-w-4xl select-none"
    >

    <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-background to-transparent" />

    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="relative h-full w-full overflow-visible">
            <AnimatePresence
                mode="wait"
                custom={direction}
            >

               <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {

                        const swipe = info.offset.x;

                        if (swipe < -100) {
                            next();
                        } else if (swipe > 100) {
                            previous();
                        }

                    }}
                    transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                    }}

                    className="flex h-full items-center justify-center cursor-grab active:cursor-grabbing"
                >
                   <TestimonialCard
                        {...testimonials[index]}
                        currentIndex={index}
                        total={testimonials.length}
                        onSelect={(i) => {
                            setDirection(i > index ? 1 : -1);
                            setIndex(i);
                        }}
                    />
                </motion.div>
            </AnimatePresence>

           

            <button
                onClick={previous}
                aria-label="Previous testimonial"
                className="
                    absolute
                    left-4
                    top-1/2
                    z-50

                    -translate-y-1/2

                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-full
                    border
                    border-border

                    bg-card/90
                    backdrop-blur-xl

                    shadow-xl

                    transition-all
                    duration-300

                    hover:scale-110
                    hover:bg-primary
                    hover:text-white

                    active:scale-95
                "
                >
                <ChevronLeft size={22} />
            </button>

            <button
                onClick={next}
                aria-label="Next testimonial"
                className="
                    absolute
                    right-4
                    top-1/2
                    z-50

                    -translate-y-1/2

                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-full
                    border
                    border-border

                    bg-card/90
                    backdrop-blur-xl

                    shadow-xl

                    transition-all
                    duration-300

                    hover:scale-110
                    hover:bg-primary
                    hover:text-white

                    active:scale-95
                    
                "
                >
                <ChevronRight size={22} />
            </button>
        </div>

        
</div>
);
}
        
