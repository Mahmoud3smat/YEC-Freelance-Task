import { useRef, useState, useEffect } from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";
import arrow from "../assets/arrow.png";
import upArrow from "../assets/upArrow.png";

const services = [
  { title: "مدنى", image: service1 },
  { title: "معماري", image: service2 },
  { title: "كهرباء", image: service3 },
  { title: "إلكتروميكانيك", image: service4 },
  { title: "تصميم داخلى وخارجى", image: service5 },
  { title: "صيانة", image: service6 },
];

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [steps, setSteps] = useState(1);

  useEffect(() => {
    const calculateSteps = () => {
      if (!scrollRef.current) return;

      const containerWidth = scrollRef.current.offsetWidth;
      const card = scrollRef.current.querySelector(".service-card");
      if (!card) return;

      const gap = 24; // gap-6
      const cardWidth = (card as HTMLElement).offsetWidth + gap;

      const visibleCards = Math.max(1, Math.floor(containerWidth / cardWidth));
      const totalSteps = Math.ceil(services.length / visibleCards);

      setSteps(totalSteps);
    };

    calculateSteps();
    window.addEventListener("resize", calculateSteps);
    return () => window.removeEventListener("resize", calculateSteps);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollLeft = Math.abs(scrollRef.current.scrollLeft);
      const containerWidth = scrollRef.current.offsetWidth;

      const index = Math.round(scrollLeft / containerWidth);
      setActiveIndex(Math.min(index, steps - 1));
    };

    const container = scrollRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [steps]);

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-lg sm:text-3xl md:text-4xl font-cairo font-black flex items-center gap-2">
            <p className="text-[#4B3224]">الخدمات الهندسية</p>
            <img src={upArrow} width="35" />
          </h2>

          <div className="text-[#8157BD] flex gap-2 items-center cursor-pointer">
            <p>عرض المزيد</p>
            <img src={arrow} width="24" />
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          dir="rtl"
          ref={scrollRef}
          className="flex flex-row-reverse gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
      service-card
      w-full
      sm:w-[calc((100%-1.5rem)/2)]
      lg:w-[calc((100%-3rem)/3)]
      flex-shrink-0
      bg-card
      rounded-2xl
      overflow-hidden
      shadow-lg
      hover:shadow-xl
      transition-shadow
      group
      snap-start
    "
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-cairo font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <button className="bg-[#4B3224] hover:bg-[#8157BD] text-white font-cairo font-semibold px-6 py-2 rounded-lg transition-opacity">
                  اختر استشارتك
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: steps }).map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-primary" : "w-4 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
