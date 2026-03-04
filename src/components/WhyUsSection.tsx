import eng1 from "@/assets/engineer1.png";
import eng2 from "@/assets/engineer2.png";
import eng3 from "@/assets/engineer3.png";
import { Quote } from "lucide-react";

const reasons = [
  {
    title: "خبرة",
    description: "نخبة من المهندسين المتخصصين بخبرات عملية ومعايير معتمدة",
    image: eng1,
  },
  {
    title: "دقة",
    description: "استشارات واضحة مبنية على تحليل احترافي لحالتك الهندسية",
    image: eng2,
  },
  {
    title: "ثقة",
    description: "تواصل مباشر عبر التطبيق مع ضمان الخصوصية التامة",
    image: eng3,
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-cairo font-black text-[#4B3224] md:mx-24 mb-12">
          لماذا تختار مستشارك الهندسي؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-card lg:m-5 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote size={28} className="mx-auto text-primary mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {reason.description}
              </p>
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-primary">
                <img
                  src={reason.image}
                  alt={reason.title}
                  width={76}
                  height={76}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-cairo font-bold text-foreground">
                {reason.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
