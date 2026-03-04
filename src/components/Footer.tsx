import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brown text-brown-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          {/* Logo */}
          <div>
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto md:mx-0">
              <span className="text-primary-foreground font-cairo font-bold text-xl">YEC</span>
            </div>
            <p className="mt-4 text-sm opacity-80 leading-relaxed">
              منصة سعودية متخصصة في الاستشارات الهندسية، نوفر لك مهندسين متخصصين في مختلف المجالات.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">الرئيسية</Link>
              <Link to="/about" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">نبذة عنا</Link>
              <Link to="/contact" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">اتصل بنا</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <p className="text-sm opacity-80">info@yec-sa.com</p>
            <p className="text-sm opacity-80 mt-1">+966 50 000 0000</p>
            <p className="text-sm opacity-80 mt-1">المملكة العربية السعودية</p>
          </div>
        </div>

        <div className="border-t border-brown-foreground/20 mt-8 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} مستشارك الهندسي. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
