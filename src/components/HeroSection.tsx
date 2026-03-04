import { Link } from "react-router-dom";
import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => {
  return (
    <section className="pt-24 overflow-hidden">
      <div className="container flex flex-col md:flex-row items-center gap-10 lg:gap-0">
        {/* Text - Left side */}
        <div className="flex-1 text-center order-2 animate-fade-in-up">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-cairo font-bold leading-tight text-[#4B3224]">
            مستشارك الهندسي
          </h1>
          <p className="font-cairo mt-3 py-5 text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed text-[#4B3224]">
            منصة سعودية للاستشارات الهندسية
          </p>
          <p className="text-xl md:text-2xl lg:text-4xl font-semibold font-cairo leading-relaxed text-[#989898]">
            ابدأ استشارتك الهندسية بثقة
          </p>
          <div className="mt-14 flex flex-col sm:flex-row gap-8 justify-center">
            {/* زر تحميل التطبيق */}
            <button
              className="
    group flex items-center justify-center gap-2
    text-[#4B3224]
    hover:bg-[#4B3224] hover:text-white
    text-xl font-cairo font-bold
    px-6 py-2
    bg-white rounded-lg
    transition-all duration-300 ease-in-out
    hover:scale-105
  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="
      text-[#4B3224]
      group-hover:text-white
      transition-colors duration-300 ease-in-out
    "
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              تحميل التطبيق
            </button>

            {/* زر ابدأ استشاراتك */}
            <Link
              to="/contact"
              className="
    text-xl
    bg-brown hover:bg-white
    text-brown-foreground hover:text-brown
    font-cairo font-bold
    px-6 py-5
    rounded-lg
    flex justify-center items-center
    text-center
    transition-all duration-300 ease-in-out
    hover:scale-105
  "
            >
              ابدأ استشاراتك الآن
            </Link>
          </div>
        </div>

        {/* Phone mockup - Right side */}
        <div className="flex-1 flex justify-center order-1 md:order-1">
          <img
            src={phoneMockup}
            alt="تطبيق مستشارك الهندسي"
            width={288}
            height={423}
            loading="lazy"
            decoding="async"
            className="w-56 md:w-72 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
