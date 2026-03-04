import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import DownloadSection from "@/components/DownloadSection";
import phoneMockup from "@/assets/phone-mockup.png";
import contactEngineers from "@/assets/contact-engineer.png";
import { Link } from "react-router-dom";

const stats = [
  { value: "+9", label: "من الخدمات" },
  { value: "+6", label: "مهندسين خبراء" },
  { value: "+10", label: "سنوات خبرة" },
  { value: "+100", label: "عملاء راضون" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="background-image">
        <Header />

        {/* Hero */}
        <section className="pt-24 overflow-hidden">
          <div className="container flex flex-col md:flex-row items-center gap-10">
            {/* Text - Left */}
            <div className="flex-1 text-center order-2 md:order-2">
              <h1 className="text-4xl md:text-5xl font-cairo font-black text-foreground leading-tight mb-10">
                نبذه عنا
              </h1>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground font-cairo">
                منصة سعودية للاستشارات الهندسية
              </p>
            </div>

            {/* Phone - Right */}
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
      </div>

      <ServicesSection />

      {/* Stats */}
      <section className="bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-secondary rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-cairo font-black text-primary mb-1">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-cairo text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* من نحن */}
      <section className="bg-[#FDF3EF] pt-16 md:pt-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-cairo text-[#4B3224] font-black mb-8">
            من نحن ؟
          </h2>
          <p className="text-muted-foreground font-cairo leading-loose max-w-2xl mx-auto text-base md:text-lg mb-16">
            مستشارك الهندسي منصة سعودية متخصصة في تقديم الاستشارات الهندسية
            بطريقة سهلة وموثوقة. نهدف إلى ربط العملاء بنخبة من المهندسين
            المعتمدين لمساعدتهم في اتخاذ قرارات هندسية صحيحة وواضحة.
            <br />
            نوفر استشارات فورية، زيارات ميدانية، وتقارير هندسية باحترافية عالية
            مع التزام كامل بالجودة والشفافية وسرعة الاستجابة. في مستشارك
            الهندسي.. خبرتك تبدأ بثقة.
          </p>
          <Link
            to="/about"
            className="inline-block bg-brown text-brown-foreground font-cairo font-bold px-8 py-3 rounded-lg hover:bg-brown-light transition-colors"
          >
            المزيد عنا
          </Link>
          <div className="mt-12 flex justify-center">
            <img
              src={contactEngineers}
              alt="فريق المهندسين"
              width={512}
              height={300}
              loading="lazy"
              decoding="async"
              className="w-full max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </section>

      <WhyUsSection />
      <DownloadSection />
    </div>
  );
};

export default About;
