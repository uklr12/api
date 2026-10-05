import Link from 'next/link';
import tools from '../data/tools.js';
import SEOContent from './components/SEOContent';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            بناء تطبيقات ذكاء اصطناعي باستخدام Next.js
          </h1>
          <p className="text-lg text-gray-600">
            نطور تطبيقات الـ AI بتقنيات Next.js متقدمة وحلول SEO برمجية متكاملة لرواد الأعمال والمطورين الطموحين
          </p>
        </header>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">لماذا تختار تطوير تطبيقات الذكاء الاصطناعي؟</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            في عصر التحول الرقمي المتسارع، أصبح بناء تطبيقات ذكاء اصطناعي باستخدام Next.js ضرورة استراتيجية للشركات الناشئة ورواد الأعمال. نحن نقدم حلولاً برمجية متقدمة تجمع بين قوة الذكاء الاصطناعي وأداء Next.js الفائق، مع التركيز على تحقيق نتائج SEO متميزة تضمن لك الصدارة في نتائج البحث.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>تطوير تطبيقات الـ AI بأحدث التقنيات وأعلى معايير الأمان</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>تكنولوجيا Next.js متقدمة تضمن سرعة فائقة وتجربة مستخدم استثنائية</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>برمجة مواقع بالذكاء الاصطناعي قابلة للتوسع والنمو المستمر</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>حلول الـ SEO البرمجية المتكاملة لتحقيق تصدر نتائج البحث</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">مميزات استخدام Next.js في تطبيقات الذكاء الاصطناعي</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">الأداء الفائق</h3>
              <p className="text-gray-600 leading-relaxed">
                تتميز تكنولوجيا Next.js متقدمة بنظام Rendering ذكي يضمن تحميل صفحاتك في أجزاء من الثانية، مما يعزز تجربة المستخدم ويحسن ترتيبك في جوجل.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">تحسين SEO تلقائي</h3>
              <p className="text-gray-600 leading-relaxed">
                عند بناء تطبيقات ذكاء اصطناعي باستخدام Next.js، تستفيد من ميزات Server-Side Rendering و Static Generation التي تحبها محركات البحث.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">قابلية التوسع</h3>
              <p className="text-gray-600 leading-relaxed">
                برمجة مواقع بالذكاء الاصطناعي تتطلب بنية مرنة، وNext.js توفر بنية تحتية تدعم النمو من prototype إلى تطبيق enterprise ضخم.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">تكامل سلس مع AI APIs</h3>
              <p className="text-gray-600 leading-relaxed">
                تطوير تطبيقات الـ AI يصبح أكثر سهولة مع Next.js بفضل دعمها القوي لـ API Routes والتكامل مع خدمات الذكاء الاصطناعي الرائدة.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">مقارنة: الطرق التقليدية مقابل تطبيقات الذكاء الاصطناعي الحديثة</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-right font-semibold text-gray-800">المعيار</th>
                  <th className="border border-gray-300 p-4 text-right font-semibold text-gray-800">الطرق التقليدية</th>
                  <th className="border border-gray-300 p-4 text-right font-semibold text-gray-800">تطبيقات AI بـ Next.js</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">سرعة التحميل</td>
                  <td className="border border-gray-300 p-4 text-gray-600">بطيئة إلى متوسطة</td>
                  <td className="border border-gray-300 p-4 text-green-600 font-semibold">سريعة جداً</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">تحسين SEO</td>
                  <td className="border border-gray-300 p-4 text-gray-600">يتطلب جهد إضافي</td>
                  <td className="border border-gray-300 p-4 text-green-600 font-semibold">مدمج تلقائياً</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">التفاعلية</td>
                  <td className="border border-gray-300 p-4 text-gray-600">محدودة</td>
                  <td className="border border-gray-300 p-4 text-green-600 font-semibold">ذكية وتفاعلية</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">قابلية التوسع</td>
                  <td className="border border-gray-300 p-4 text-gray-600">صعبة</td>
                  <td className="border border-gray-300 p-4 text-green-600 font-semibold">سهلة ومرنة</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">التكلفة على المدى الطويل</td>
                  <td className="border border-gray-300 p-4 text-gray-600">مرتفعة</td>
                  <td className="border border-gray-300 p-4 text-green-600 font-semibold">منخفضة</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">الأسئلة الشائعة</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ما هو بناء تطبيقات ذكاء اصطناعي باستخدام Next.js؟</h3>
              <p className="text-gray-600 leading-relaxed">
                هو عملية تطوير تطبيقات ويب ذكية تجمع بين قدرات الذكاء الاصطناعي ومزايا إطار العمل Next.js، مما ينتج عنه تطبيقات سريعة، متجاوبة، ومحسنة لمحركات البحث بشكل تلقائي.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">كم من الوقت يستغرق تطوير تطبيق AI بـ Next.js؟</h3>
              <p className="text-gray-600 leading-relaxed">
                يعتمد على تعقيد المشروع، لكن بفضل تكنولوجيا Next.js المتقدمة، يمكننا إطلاق MVP في 4-6 أسابيع، مع إمكانية التوسع التدريجي حسب احتياجات عملك.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">كيف تساعد حلول الـ SEO البرمجية في تصدر نتائج البحث؟</h3>
              <p className="text-gray-600 leading-relaxed">
                نطبق أفضل ممارسات SEO التقني من البنية التحتية: تحسين Core Web Vitals، بنية URL نظيفة، Schema Markup، وتحسين Mobile-First، مما يضمن تفضيل جوجل لموقعك.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">هل يمكن دمج تطبيقات الـ AI مع الأنظمة الموجودة؟</h3>
              <p className="text-gray-600 leading-relaxed">
                نعم، برمجة مواقع بالذكاء الاصطناعي التي نطورها مصممة للتكامل السلس مع أنظمتك الحالية، سواء كانت CRM، ERP، أو أي منصات إدارة محتوى.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ما هي التكلفة المتوقعة لمشروع تطوير تطبيق AI؟</h3>
              <p className="text-gray-600 leading-relaxed">
                تختلف التكلفة بناءً على النطاق والمتطلبات، لكننا نقدم خطط مرنة تناسب الميزانيات المختلفة، مع ضمان عائد استثمار واضح من خلال تحسين الكفاءة التشغيلية.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4">جاهز لتحويل فكرتك إلى واقع؟</h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            دعنا نعمل معاً على بناء تطبيق ذكاء اصطناعي مبتكر باستخدام Next.js يضعك في الصدارة. فريقنا من الخبراء جاهز لتحويل رؤيتك إلى منتج رقمي ناجح.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              تواصل معنا الآن
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              احجز استشارة مجانية
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{tool.h1_heading}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {tool.meta_description}
                </p>
              </div>
              <span className="text-blue-600 font-semibold text-sm hover:underline inline-block mt-2">
                جرب الأداة الآن →
              </span>
            </Link>
          ))}
        </div>
      </div>
      <SEOContent />
    </main>
  );
}
