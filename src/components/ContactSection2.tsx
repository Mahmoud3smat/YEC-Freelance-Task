import Form from "./Form";
import contact from "../assets/contact.png";

export default function ContactSection2() {
  return (
    <div className="container mb-16">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-cairo font-black text-[#4B3224] md:mx-24 mb-3">
        تواصل معنا
      </h2>
      <p className="text-pretty md:text-xl lg:text-2xl text-[#4B3224] font-semibold md:mx-24 mb-12">
        فريق مستشارك الهندسي جاهز للإجابة على استفساراتك
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-2 sm:mx-5 md:mx-20">
        <img src={contact} className="w-96 mx-auto mb-10" />
        <Form />
      </div>
    </div>
  );
}
