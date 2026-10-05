# أدوات الذكاء الاصطناعي المجانية

مشروع مجاني 100% لبناء أدوات مصغرة بالذكاء الاصطناعي باستخدام Next.js و Google Gemini API.

## 🚀 المميزات

- 5 أدوات مجانية بالذكاء الاصطناعي
- واجهة عربية احترافية
- تصميم متجاوب مع جميع الأجهزة
- استخدام Google Gemini API المجاني
- نشر سهل على Vercel

## 🛠️ الأدوات المتوفرة

1. **مولد نقاط الخبرة للسيرة الذاتية** - توليد نقاط احترافية متوافقة مع ATS
2. **مولد خطاب التغطية** - كتابة Cover Letter احترافي
3. **ملخص الأبحاث العلمية** - تلخيص الأوراق البحثية والمقالات
4. **تحضير أسئلة المقابلات** - إعداد أسئلة متوقعة وإجابات نموذجية
5. **مصحح الأسلوب الأكاديمي** - تحسين النصوص وإعادة صياغتها

## 📋 المتطلبات

- Node.js 18 أو أحدث
- حساب على Google AI Studio للحصول على API Key مجاني

## 🔧 خطوات التثبيت

1. **استنساخ المشروع أو إنشائه محلياً**

2. **تثبيت المكتبات**
   ```bash
   npm install
   ```

3. **الحصول على مفتاح API المجاني**
   - اذهب إلى [aistudio.google.com](https://aistudio.google.com)
   - اضغط على "Get API Key"
   - أنشئ مفتاحاً مجانياً وانسخه

4. **إعداد ملف البيئة**
   - أنشئ ملف `.env.local` في جذر المشروع
   - أضف المفتاح:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     ```

5. **تشغيل المشروع محلياً**
   ```bash
   npm run dev
   ```
   - افتح المتصفح على `http://localhost:3000`

## 🚀 النشر على Vercel

1. **ادفع المشروع إلى GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **النشر على Vercel**
   - اذهب إلى [vercel.com](https://vercel.com)
   - اضغط "Add New Project"
   - استورد مستودع GitHub الخاص بك
   - في إعدادات البيئة، أضف:
     - `GEMINI_API_KEY` = مفتاح API الخاص بك
   - اضغط "Deploy"

3. **النتيجة**
   - ستحصل على رابط مجاني مثل: `your-project.vercel.app`

## 📁 هيكل المشروع

```
my-ai-tools/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.js       <-- مسار الربط مع Gemini API
│   ├── tools/
│   │   └── [slug]/
│   │       └── page.js        <-- الصفحة الديناميكية للأداة
│   ├── layout.js              <-- التنسيق العام للموقع
│   ├── page.js                <-- الصفحة الرئيسية
│   └── globals.css            <-- أنماط Tailwind
├── data/
│   └── tools.json             <-- ملف البيانات (قائمة الأدوات)
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── .env.local.example
```

## 💡 إضافة أداة جديدة

1. أضف الأداة في `data/tools.json`
2. سيتم إنشاء الصفحة تلقائياً عند زيارة `/tools/slug`

## 📝 الترخيص

هذا المشروع مجاني ومفتوح المصدر للاستخدام الشخصي والتعليمي.

## 🤝 المساهمة

المساهمات مرحب بها! لا تتردد في فتح Issue أو Pull Request.
