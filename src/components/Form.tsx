import { useState } from "react";

export default function Form() {
  const [agreed, setAgreed] = useState(false);

  return (
    <form
      className="space-y-5 order-2 lg:order-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-cairo font-semibold text-foreground mb-1">
            الاسم الأول
          </label>
          <input className="w-full border-2 border-primary/30 rounded-lg px-4 py-3 bg-background text-foreground font-cairo focus:border-primary outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-cairo font-semibold text-foreground mb-1">
            الاسم الأخير
          </label>
          <input className="w-full border-2 border-primary/30 rounded-lg px-4 py-3 bg-background text-foreground font-cairo focus:border-primary outline-none transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-cairo font-semibold text-foreground mb-1">
            رقم الجوال
          </label>
          <input className="w-full border-2 border-primary/30 rounded-lg px-4 py-3 bg-background text-foreground font-cairo focus:border-primary outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-cairo font-semibold text-foreground mb-1">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            className="w-full border-2 border-primary/30 rounded-lg px-4 py-3 bg-background text-foreground font-cairo focus:border-primary outline-none transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-cairo font-semibold text-foreground mb-1">
          الرسالة
        </label>
        <textarea
          rows={5}
          placeholder="اكتب تفاصيل المشكلة..."
          className="w-full border-2 border-primary/30 rounded-lg px-4 py-3 bg-background text-foreground font-cairo focus:border-primary outline-none transition-colors resize-none"
        />
      </div>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="accent-primary w-4 h-4"
        />
        <span className="text-sm text-muted-foreground font-cairo">
          أوافق على الشروط والأحكام
        </span>
      </label>
      <button
        type="submit"
        disabled={!agreed}
        className="bg-primary text-primary-foreground font-cairo font-bold py-3 px-12 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        إرسال الآن
      </button>
    </form>
  );
}
