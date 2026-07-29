import Image from "next/image";
import {
  Sparkles,
  Home,
  Sofa,
  Hammer,
  PartyPopper,
  Bug,
  Building2,
} from "lucide-react";

const services = [
  {
    title: "Residential & Deep Cleaning",
    description:
      "Complete home cleaning solutions that refresh and restore your living spaces.",
    image: "/images/Services/Residential cleaning 2.jpg",
    icon: Home,
  },
  {
    title: "Upholstery & Carpet Care",
    description:
      "Professional cleaning for carpets, sofas, and fabrics to remove dirt and stains.",
    image: "/images/Services/Sofa Cleaning Service in Bangalore _ TechSquadTeam.jpg",
    icon: Sofa,
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "We transform newly built spaces into clean, comfortable environments.",
    image: "/images/Services/post construction.jpg",
    icon: Hammer,
  },
  {
    title: "Events Before & After Cleaning",
    description:
      "Keep your event spaces spotless before guests arrive and after they leave.",
    image: "/images/Services/Event Hall.jpg",
    icon: PartyPopper,
  },
  {
    title: "Fumigation & Pest Control",
    description:
      "Effective pest management solutions for homes and businesses.",
    image: "/images/Services/Fumigation and pest control.jpg",
    icon: Bug,
  },
  {
    title: "Commercial & Industrial Maintenance",
    description:
      "Reliable cleaning services for offices, facilities, and workplaces.",
    image: "/images/Services/Industrial.jpg",
    icon: Building2,
  },
];


export default function Services() {
  return (
    <section
      id="services"
      className="py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm text-primary bg-muted">
            <Sparkles size={14} />
            Our Services
          </div>


          <h2 className="text-3xl font-bold sm:text-4xl">
            Professional Cleaning
            <span className="block text-primary">
              For Every Space
            </span>
          </h2>


          <p className="mt-4 text-foreground/70">
            From homes to businesses, we provide reliable cleaning
            solutions tailored for your specific needs.
          </p>

        </div>


        {/* Cards */}
        <div
          className="
          mt-12
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
                group
                overflow-hidden
                rounded-3xl
                bg-card
                shadow-lg
                border
                border-black/5
                dark:border-white/10
                "
              >

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="
                    object-cover
                    transition duration-500
                    group-hover:scale-110
                    "
                    sizes="
                    (max-width:640px) 100vw,
                    (max-width:1024px) 50vw,
                    33vw
                    "
                  />

                </div>


                {/* Content */}
                <div className="p-6">

                  <div
                    className="
                    mb-4
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary
                    text-white
                    "
                  >
                    <Icon size={22}/>
                  </div>


                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>


                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {service.description}
                  </p>


                  <button
                    className="
                    mt-5
                    text-sm
                    font-semibold
                    text-primary
                    hover:text-secondary
                    "
                  >
                    Learn More →
                  </button>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}