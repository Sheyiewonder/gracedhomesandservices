// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { CheckCircle, Sparkles } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden pt-24 sm:pt-32">

//       {/* Background glow */}
//       <div
//         className="
//           absolute
//           -right-20
//           top-20
//           h-64
//           w-64
//           rounded-full
//           bg-secondary/20
//           blur-3xl
//           sm:h-96
//           sm:w-96
//         "
//       />


//       <div
//         className="
//           mx-auto
//           grid
//           max-w-7xl
//           gap-10
//           px-5
//           sm:px-6
//           md:grid-cols-2
//           md:items-center
//           md:gap-12
//         "
//       >

//         {/* Text Content */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.7,
//           }}
//         >

//           {/* Badge */}
//           <div
//             className="
//               mb-5
//               inline-flex
//               items-center
//               gap-2
//               rounded-full
//               bg-muted
//               px-3
//               py-2
//               text-xs
//               font-medium
//               text-primary
//               sm:px-4
//               sm:text-sm
//             "
//           >
//             <Sparkles size={16} />
//             Professional Cleaning Solutions
//           </div>


//           {/* Heading */}
//           <h1
//             className="
//               text-4xl
//               font-bold
//               leading-tight
//               sm:text-5xl
//               md:text-6xl
//             "
//           >
//             Your Space,
//             <span className="block text-primary">
//               Our Signature Shine.
//             </span>
//           </h1>


//           {/* Description */}
//           <p
//             className="
//               mt-5
//               max-w-xl
//               text-base
//               leading-relaxed
//               text-foreground/70
//               sm:mt-6
//               sm:text-lg
//             "
//           >
//             We provide reliable residential, commercial and specialized
//             cleaning services that transform your space into a healthier,
//             fresher environment.
//           </p>


//           {/* CTA Buttons */}
//           <div
//             className="
//               mt-7
//               flex
//               flex-col
//               gap-3
//               sm:flex-row
//             "
//           >

//             <button
//               className="
//                 rounded-full
//                 bg-primary
//                 px-8
//                 py-3.5
//                 font-semibold
//                 text-white
//                 shadow-lg
//                 transition
//                 hover:bg-secondary
//               "
//             >
//               Book Cleaning
//             </button>


//             <button
//               className="
//                 rounded-full
//                 border
//                 border-primary
//                 px-8
//                 py-3.5
//                 font-semibold
//                 text-primary
//                 transition
//                 hover:bg-primary
//                 hover:text-white
//               "
//             >
//               View Services
//             </button>

//           </div>


//           {/* Trust Points */}
//           <div className="mt-8 flex flex-col gap-3">

//             {[
//               "Trusted cleaning professionals",
//               "Residential & commercial services",
//               "Quality guaranteed",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="
//                   flex
//                   items-center
//                   gap-3
//                   text-sm
//                   sm:text-base
//                 "
//               >
//                 <CheckCircle
//                   className="shrink-0 text-secondary"
//                   size={20}
//                 />

//                 <span>
//                   {item}
//                 </span>

//               </div>
//             ))}

//           </div>


//         </motion.div>



//         {/* Hero Image */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.9,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//           }}
//           transition={{
//             duration: 0.7,
//           }}
//           className="relative"
//         >

//           <div
//             className="
//               relative
//               aspect-[4/3]
//               overflow-hidden
//               rounded-[2rem]
//               shadow-2xl
//               sm:aspect-[16/10]
//               md:h-[500px]
//             "
//           >

//             <Image
//               src="/images/hero/28a34acc37b584d20cb67131b092427f.jpg"
//               alt="Professional cleaning service"
//               fill
//               priority
//               className="object-cover"
//               sizes="
//                 (max-width: 768px) 100vw,
//                 (max-width: 1200px) 50vw,
//                 600px
//               "
//             />

//           </div>

//         </motion.div>


//       </div>

//     </section>
//   );
// }

"use client";

import Container from "../ui/Container";
import HeroContent from "../hero/HeroContent";
import HeroImage from "../hero/HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32">

      {/* Background Effects */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container>

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.15fr]">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-auto w-full"
        >
          <path
            fill="var(--background)"
            d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,80C1120,64,1280,32,1360,16L1440,0V120H0Z"
          />
        </svg>
      </div>

    </section>
  );
}