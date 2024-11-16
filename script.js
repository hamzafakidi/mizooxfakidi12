// بيانات تسجيل الدخول الصحيحة
const validUsername = "colleg";
const validPassword = "ifri";

// عناصر النموذج
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const loader = document.getElementById("loader");

// التحقق عند محاولة تسجيل الدخول
loginForm.addEventListener("submit", function(event) {
  // منع الإرسال الافتراضي للنموذج
  event.preventDefault();

  // جلب القيم المدخلة
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // إظهار رسالة "جارٍ التحقق" والدائرة
  errorMessage.textContent = "جارٍ التحقق من البيانات...";
  errorMessage.style.color = "gold"; // لون أزرق
  loader.style.display = "block"; // عرض الدائرة

  // تأخير لمدة 3 ثوانٍ قبل التحقق
  setTimeout(() => {
    // التحقق من صحة البيانات
    if (username === validUsername && password === validPassword) {
      // الانتقال إلى الصفحة الرئيسية
      window.location.href = "into.html";
    } else {
      // عرض رسالة خطأ
      errorMessage.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة. حاول مرة أخرى.";
      errorMessage.style.color = "red"; // لون أحمر عند الخطأ
    }

    // إخفاء الدائرة
    loader.style.display = "none";
  }, 3000); // 3000 ميلي ثانية = 3 ثوانٍ
});
