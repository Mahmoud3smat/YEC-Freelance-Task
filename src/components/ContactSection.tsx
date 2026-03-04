import { Phone, Mail, MapPin } from "lucide-react";
import Form from "./Form";

const ContactSection = () => {
  return (
    <>
      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Info - Left */}
            <div className="order-1 text-center lg:text-right">
              <h2 className="text-3xl md:text-4xl font-cairo font-black text-[#4B3224] mb-3">
                يسعدنا تواصلك
              </h2>
              <p className="text-[#4B3224] font-cairo text-lg mb-8">
                ابدأ رحلتك الهندسية معنا اليوم
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-3 flex-row">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-cairo text-[#4B3224] font-semibold text-md">
                      حي، ٦٨٧٥ الطريق الدائري الغربي، الرياض
                    </p>
                    <p className="font-cairo text-[#4B3224] text-md">
                      ١٢٩٩٣، المملكة العربية السعودية
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-row">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <p
                    className="font-cairo text-[#4B3224] font-semibold text-md"
                    dir="ltr"
                  >
                    +966 55 449 5955
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-row">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-cairo text-[#4B3224] font-semibold text-md">
                    jawharaaldar@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Form - Right */}
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
