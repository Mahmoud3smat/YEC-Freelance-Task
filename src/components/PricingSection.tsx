import { Check } from "lucide-react";

const plans = [
  {
    title: "استشارة مجانية",
    price: "بدون",
    priceLabel: "رسوم",
    features: [
      "تقييم مبدئي لحالتك الهندسية",
      "مساعدتك في تحديد الحل المناسب",
      "فهم مشكلتك قبل اتخاذ القرار",
    ],
    highlighted: false,
  },
  {
    title: "استشارة مدفوعة",
    price: "100",
    priceLabel: "ريال سعودي",
    features: [
      "حل هندسي دقيق من مهندس مختص",
      "تحليل احترافي مع توجيه واضح للخطوات",
      "تواصل مباشر مع مهندس معتمد",
      "إجابة موثقة لحالتك الهندسية",
    ],
    highlighted: true,
  },
  {
    title: "زيارة ميدانية",
    price: "400",
    priceLabel: "ريال سعودي",
    features: [
      "معاينة الموقع على أرض الواقع",
      "تقييم الحالة من مهندس مختص",
      "تشخيص المشكلة بشكل عملي",
      "حلول هندسية مبنية على المعاينة",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-cairo font-black mb-12 lg:mx-24 text-[#4B3224]">
          اختر نوع الاستشارة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch lg:mx-36">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-2xl py-12 mt-7 md:mt-0 px-6 flex flex-col transition-transform hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-[#4B3224] text-brown-foreground shadow-3xl scale-[1.1]"
                  : "bg-[#FCEEEC] text-card-foreground shadow-lg"
              }`}
            >
              <h3 className="text-xl font-cairo font-bold text-center">{plan.title}</h3>
              <div className="text-center mt-4">
                <span className="text-3xl font-cairo font-black">{plan.price}</span>
                <p className="text-sm opacity-80">{plan.priceLabel}</p>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-6 py-3 rounded-lg font-cairo font-bold transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "bg-[#F6F6F6] text-[#222222]"
                    : "bg-[#8157BD] text-primary-foreground"
                }`}
              >
                اختار الباقة ←
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
