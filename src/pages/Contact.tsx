import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import DownloadSection from "@/components/DownloadSection";
import phoneMockup from "@/assets/phone-mockup.png";

const Contact = () => {
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
                تواصل معنا
              </h1>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground font-cairo">
                مستشارك الهندسي جاهز للإجابة على استفساراتك
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

      <ContactSection />
      <DownloadSection />
    </div>
  );
};

export default Contact;
