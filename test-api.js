// سكريبت لاختبار API
const fetch = require('node-fetch');

async function testAPI() {
  console.log('=== اختبار API ===\n');
  
  try {
    const response = await fetch('http://localhost:3004/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userInput: 'مهندس برمجيات',
        systemPrompt: 'أنت خبير توظيف. اكتب نقطة خبرة واحدة:'
      })
    });

    const data = await response.json();
    
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(data, null, 2));
    
    if (response.ok) {
      console.log('\n✅ API يعمل بنجاح!');
    } else {
      console.log('\n❌ API حدث خطأ');
    }
  } catch (error) {
    console.error('❌ فشل الاتصال:', error.message);
  }
}

testAPI();
