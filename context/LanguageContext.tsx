'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Record<string, string>> = {
    tr: {
        // Navigation
        'nav.about': 'Hakkımda',
        'nav.skills': 'Yetenekler',
        'nav.projects': 'Projeler',
        'nav.contact': 'İletişim',

        // Hero
        'hero.greeting': 'Merhaba, ben',
        'hero.viewProjects': 'Projeleri Gör',
        'hero.downloadCV': 'CV İndir',
        'hero.subtitle': 'Yapay Zeka & Makine Öğrenmesi odaklı mühendis adayı. Erasmus+ deneyimli, gerçek dünya problemlerini yazılımla çözen.',

        // About
        'about.title': 'Hakkımda',
        'about.education': 'Eğitim',
        'about.experience': 'Deneyim',
        'about.paragraph1': 'Karmaşık, ölçeklenebilir sistemler inşa etme tutkusuyla hareket eden kararlı bir Yazılım Mühendisliği öğrencisiyim. Yolculuğum, yazılımın dünyayı nasıl şekillendirdiğine duyduğum merakla başladı ve mühendislik mükemmelliği arayışına dönüştü.',
        'about.paragraph2': 'Şu anda <strong>Yapay Zeka</strong> ve <strong>Bulut Mimarisi</strong> üzerine odaklanıyorum. Temiz, sürdürülebilir kod yazmaya ve gerçekten önemli problemleri çözmeye inanıyorum.',
        'about.paragraph3': 'Kod yazmadığım zamanlarda, ML alanındaki son makaleleri araştırıyor, hackathon\'lara katılıyorum. Matematik ve uzay alanları ile alakalı tutkumu da her zaman ayakta tutmak istiyorum.',

        // Education
        'edu.degree': 'Yazılım Mühendisliği Lisans',
        'edu.institution': 'Fırat Üniversitesi',
        'edu.period': '2027 Beklenen Mezuniyet',
        'edu.description': 'GANO: 3.65. Yapay Zeka, Makine Öğrenmesi ve Veri Bilimi üzerine yoğunlaşıyorum.',

        // Experience
        'exp.role': 'Yapay Zeka Mühendisi Stajyeri (Erasmus+ Stajı)',
        'exp.company': 'WSTI - Wyższa Szkoła Technologii Informatycznych',
        'exp.period': 'Temmuz 2025 – Eylül 2025',
        'exp.description': 'Görüntü veri setlerinden metin çıkarmak için OCR çözümü geliştirdim. Python/Flask kullanarak AI modellerini sunan RESTful API tasarladım. Docker ile uygulamaları konteynerize ettim.',

        // Skills
        'skills.title': 'Teknik Yetenekler',
        'skills.languages': 'Programlama Dilleri',
        'skills.ml_ai': 'Yapay Zeka & ML',
        'skills.cloud_devops': 'Bulut & DevOps',
        'skills.web': 'Web Teknolojileri',
        'skills.tools': 'Araçlar',

        // Projects
        'projects.title': 'Öne Çıkan Projeler',
        'projects.subtitle': 'AI/ML araştırmalarından ölçeklenebilir bulut mimarilerine uzanan mühendislik projelerimden bir seçki.',
        'projects.viewArchive': 'Tüm Arşivi Gör',

        // Project titles & descriptions
        'project1.title': 'Sahte Haber Tespiti (Tarayıcı Eklentisi)',
        'project1.description': 'Gerçek zamanlı olarak potansiyel sahte haber makalelerini tespit edip işaretleyen akademik bir proje. Makine öğrenmesi tahminlerini sunmak için FastAPI backend geliştirdim ve metin sınıflandırması için NLP modeli uyguladım.',
        'project2.title': 'AWS Sıfırdan Zirveye (Bulut Projesi)',
        'project2.description': 'Backend sistemleri, bulut tabanlı uygulamalar ve DevOps pratiklerine aktif katkı. AWS altyapısı ve otomasyon üzerine odaklanıyorum.',
        'project3.title': 'Optik Karakter Tanıma (OCR) API',
        'project3.description': 'OCR görevleri için RESTful API tasarladım ve dağıttım. Derin öğrenme modelleri kullanarak görüntü veri setlerinden metin çıkardım, kolay dağıtım için Docker ile konteynerize ettim.',

        // Contact
        'contact.preTitle': 'Sırada Ne Var?',
        'contact.title': 'İletişime Geç',
        'contact.description': 'Şu anda <strong>Yaz 2026 Stajları</strong> arıyorum ve AI & Bulut Mühendisliği alanlarında yeni fırsatları değerlendirmeye açığım. Bir sorunuz varsa veya sadece merhaba demek istiyorsanız, size geri dönmek için elimden geleni yapacağım!',
        'contact.sayHello': 'İletişim',

        // Footer
        'footer.rights': 'Tüm hakları saklıdır.',

        // Personal
        'personal.title': 'Yazılım Mühendisliği Öğrencisi | Yapay Zeka & Veri Bilimi Meraklısı',

        // Certifications
        'cert1.title': 'AWS Cloud Practitioner',
        'cert1.issuer': 'Amazon Web Services',
        'cert1.date': '2025',
        'cert2.title': 'Python for Data Science',
        'cert2.issuer': 'Coursera / IBM',
        'cert2.date': '2024',
        'cert3.title': 'Machine Learning Fundamentals',
        'cert3.issuer': 'Stanford Online',
        'cert3.date': '2024',
    },
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': 'Hi, I\'m',
        'hero.viewProjects': 'View Projects',
        'hero.downloadCV': 'Download CV',
        'hero.subtitle': 'AI & Machine Learning focused engineering student. Erasmus+ experienced, solving real-world problems with software.',

        // About
        'about.title': 'About Me',
        'about.education': 'Education',
        'about.experience': 'Experience',
        'about.paragraph1': 'I\'m a dedicated Software Engineering student driven by a passion for building complex, scalable systems. My journey began with curiosity about how software shapes the world and evolved into a pursuit of engineering excellence.',
        'about.paragraph2': 'Currently focusing on <strong>Artificial Intelligence</strong> and <strong>Cloud Architecture</strong>. I believe in writing clean, maintainable code and solving problems that truly matter.',
        'about.paragraph3': 'When I\'m not coding, I research the latest ML papers and participate in hackathons. I also want to keep my passion for mathematics and space alive.',

        // Education
        'edu.degree': 'B.Sc. in Software Engineering',
        'edu.institution': 'Fırat University',
        'edu.period': 'Expected Graduation 2027',
        'edu.description': 'GPA: 3.65. Focusing on AI, Machine Learning, and Data Science.',

        // Experience
        'exp.role': 'AI Engineer Intern (Erasmus+ Internship)',
        'exp.company': 'WSTI - Wyższa Szkoła Technologii Informatycznych',
        'exp.period': 'July 2025 – September 2025',
        'exp.description': 'Developed OCR solution for extracting text from image datasets. Designed RESTful API serving AI models using Python/Flask. Containerized applications with Docker.',

        // Skills
        'skills.title': 'Technical Skills',
        'skills.languages': 'Programming Languages',
        'skills.ml_ai': 'AI & Machine Learning',
        'skills.cloud_devops': 'Cloud & DevOps',
        'skills.web': 'Web Technologies',
        'skills.tools': 'Tools',

        // Projects
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'A selection of engineering projects ranging from AI/ML research to scalable cloud architectures.',
        'projects.viewArchive': 'View All Archive',

        // Project titles & descriptions
        'project1.title': 'Fake News Detection (Browser Extension)',
        'project1.description': 'An academic project that detects and flags potential fake news articles in real-time. Developed FastAPI backend for ML predictions and implemented NLP model for text classification.',
        'project2.title': 'AWS Zero to Hero (Cloud Project)',
        'project2.description': 'Active contribution to backend systems, cloud-based applications and DevOps practices. Focusing on AWS infrastructure and automation.',
        'project3.title': 'Optical Character Recognition (OCR) API',
        'project3.description': 'Designed and deployed RESTful API for OCR tasks. Extracted text from image datasets using deep learning models, containerized with Docker for easy deployment.',

        // Contact
        'contact.preTitle': 'What\'s Next?',
        'contact.title': 'Get In Touch',
        'contact.description': 'Currently looking for <strong>Summer 2026 Internships</strong> and open to new opportunities in AI & Cloud Engineering. If you have a question or just want to say hello, I\'ll do my best to get back to you!',
        'contact.sayHello': 'Say Hello',

        // Footer
        'footer.rights': 'All rights reserved.',

        // Personal
        'personal.title': 'Software Engineering Student | AI & Data Science Enthusiast',

        // Certifications
        'cert1.title': 'AWS Cloud Practitioner',
        'cert1.issuer': 'Amazon Web Services',
        'cert1.date': '2025',
        'cert2.title': 'Python for Data Science',
        'cert2.issuer': 'Coursera / IBM',
        'cert2.date': '2024',
        'cert3.title': 'Machine Learning Fundamentals',
        'cert3.issuer': 'Stanford Online',
        'cert3.date': '2024',
    },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('tr');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Check localStorage for saved preference
        const saved = localStorage.getItem('portfolio-language') as Language;
        if (saved && (saved === 'tr' || saved === 'en')) {
            setLanguage(saved);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('portfolio-language', language);
            // Update html lang attribute
            document.documentElement.lang = language;
        }
    }, [language, mounted]);

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    // Always provide context - but use default language during SSR
    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
