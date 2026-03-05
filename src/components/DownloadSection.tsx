import phoneFooter from "../assets/phone-footer.png";

const DownloadSection = () => {
  return (
    <section className="back text-brown-foreground h-52 relative">
      <div className="container mx-auto relative h-full">
        {/* Text */}
        <div className="flex flex-col items-center justify-center pt-10 md:pt-0 md:absolute top-5 sm:top-10 sm:left-20 md:left-32 lg:left-64 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight mb-2">
            حمّل تطبيق مستشارك الهندسي
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl">
            وابدأ استشارتك الهندسية بثقة
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="bg-foreground/90 text-background font-semibold px-7 sm:px-10 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
              App Store
            </button>

            <button className="bg-foreground/90 text-background font-semibold px-7 sm:px-10 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
              Google Play
            </button>
          </div>
        </div>

        {/* Phone Image */}
        <div className="hidden md:block absolute bottom-0 right-0">
          <img
            src={phoneFooter}
            alt="تطبيق مستشارك الهندسي"
            loading="lazy"
            decoding="async"
            className="w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
