import { MdElderlyWoman } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import { LuCookingPot } from "react-icons/lu";
import { MdCleaningServices } from "react-icons/md";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const services = [
  {
    icon: (
      <MdElderlyWoman className="text-7xl sm:text-8xl text-primary mb-2 hover:animate-wiggle" />
    ),
    label: "Elderly Care",
  },
  {
    icon: <FaBaby className="text-7xl sm:text-8xl text-primary mb-2" />,
    label: "Infant Care",
  },
  {
    icon: <FaChild className="text-7xl sm:text-8xl text-primary mb-2" />,
    label: "Child Care",
  },
  {
    icon: <FaLanguage className="text-7xl sm:text-8xl text-primary mb-2" />,
    label: "Language Support",
  },
  {
    icon: <LuCookingPot className="text-7xl sm:text-8xl text-primary mb-2" />,
    label: "Cooking Services",
  },
  {
    icon: (
      <MdCleaningServices className="text-7xl sm:text-8xl text-primary mb-2" />
    ),

    label: "Cleaning Services",
  },
  {
    icon: (
      <PiChalkboardTeacherDuotone className="text-7xl sm:text-8xl text-primary mb-2" />
    ),
    label: "Professionally Trained",
  },
  {
    icon: (
      <FaHandHoldingHeart className="text-7xl sm:text-8xl text-primary mb-2" />
    ),
    label: "Family Friendly",
  },
];

export default function Services() {
  return (
    <section className="py-8 min-h-screen flex flex-col items-center justify-center px-4 sm:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 max-w-4xl w-full mx-auto">
        {services.map((service, idx) => {
          const [top, bottom] = service.label.split(" ");
          return (
            <div key={idx} className="flex flex-col items-center p-4">
              {service.icon}
              <span className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-800 text-center leading-tight">
                <span>{top}</span>
                <br />
                <span>{bottom}</span>
              </span>
            </div>
          );
        })}
      </div>
      <Button
        className="mt-20 py-6 text-lg text-emerald-100 rounded-2xl shadow-xl"
        effect="expandIcon"
        icon={ArrowRightIcon}
        iconPlacement="right"
      >
        Tell me more!
      </Button>
    </section>
  );
}
