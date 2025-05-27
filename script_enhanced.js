// تحسين تفاعلات المستخدم مع الموقع
document.addEventListener('DOMContentLoaded', function() {
    // تصفية المنتجات حسب الفئة
    const categoryButtons = document.querySelectorAll('.category-btn');
    const products = document.querySelectorAll('.product');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // إزالة الفئة النشطة من جميع الأزرار
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // إضافة الفئة النشطة للزر المضغوط
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // إظهار/إخفاء المنتجات حسب الفئة
            products.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.classList.remove('hidden');
                    // إضافة تأثير الظهور التدريجي
                    product.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    product.classList.add('hidden');
                }
            });
        });
    });
    
    // زر العودة للأعلى
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // تأثيرات التمرير للعناصر
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .product, .gallery-item, .contact-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // تطبيق التأثيرات عند التمرير
    window.addEventListener('scroll', animateOnScroll);
    
    // تطبيق التأثيرات عند تحميل الصفحة
    animateOnScroll();
    
    // تحسين تجربة المستخدم على الهاتف المحمول
    if (window.innerWidth < 768) {
        // تعديل حجم الخط والعناصر للشاشات الصغيرة
        document.querySelectorAll('.product p').forEach(text => {
            text.style.fontSize = '0.9rem';
        });
    }
    
    // تحميل الصور بشكل كسول (Lazy Loading)
    if ('loading' in HTMLImageElement.prototype) {
        // استخدام خاصية loading="lazy" المدمجة في المتصفح
        document.querySelectorAll('img').forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    } else {
        // تحميل مكتبة lazysizes للمتصفحات القديمة
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
        
        document.querySelectorAll('img').forEach(img => {
            img.classList.add('lazyload');
            img.setAttribute('data-src', img.getAttribute('src'));
            img.removeAttribute('src');
        });
    }
    
    // تحسين تجربة النقر على الهاتف المحمول
    document.querySelectorAll('.btn, .category-btn').forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.backgroundColor = '#800000';
        });
        button.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 200);
        });
    });
    
    // تأثير التمرير السلس للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
