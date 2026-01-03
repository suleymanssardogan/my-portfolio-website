export const PORTFOLIO_DATA = {
    personal: {
        name: "Süleyman Sardoğan",
        title: "Yazılım Mühendisliği Öğrencisi | Yapay Zeka & Veri Bilimi Meraklısı",
        summary:
            "Yapay Zeka, Makine Öğrenmesi ve Veri Bilimi odaklı 3. sınıf Yazılım Mühendisliği öğrencisiyim. Erasmus+ stajımda Optik Karakter Tanıma (OCR) çözümleri ve RESTful API geliştirme deneyimi kazandım. Python, C#, SQL ve Derin Öğrenme (CNN) konularında güçlü becerilerimle gerçek dünya problemlerini yazılımla çözmeye odaklanıyorum.",
        email: "sardogansuleyman04@gmail.com",
        github: "https://github.com/suleymanssardogan",
        linkedin: "https://www.linkedin.com/in/suleyman-sardogan-369875286/",
        cv: "/cv.pdf",
    },
    education: [
        {
            degree: "Yazılım Mühendisliği Lisans",
            institution: "Fırat Üniversitesi",
            period: "2027 Beklenen Mezuniyet",
            description: "GANO: 3.65. Yapay Zeka, Makine Öğrenmesi ve Veri Bilimi üzerine yoğunlaşıyorum.",
        },
    ],
    experience: [
        {
            role: "Yapay Zeka Mühendisi Stajyeri (Erasmus+ Stajı)",
            company: "WSTI - Wyższa Szkoła Technologii Informatycznych",
            period: "Temmuz 2025 – Eylül 2025",
            description:
                "Görüntü veri setlerinden metin çıkarmak için OCR çözümü geliştirdim. Python/Flask kullanarak AI modellerini sunan RESTful API tasarladım. Docker ile uygulamaları konteynerize ettim.",
        },
    ],
    skills: {
        languages: ["Python", "C#", "C", "SQL", "JavaScript"],
        ml_ai: ["TensorFlow", "Keras", "Derin Öğrenme (CNN)", "Bilgisayarlı Görü", "Pandas", "NumPy", "NLP"],
        cloud_devops: ["AWS", "Docker", "Git/GitHub", "Linux"],
        web: ["FastAPI", "Flask", "RESTful API", ".NET", "React", "Next.js"],
        tools: ["MS SQL Server", "MySQL", "MongoDB", "Tableau", "Google Colab"],
    },
    projects: [
        {
            title: "Sahte Haber Tespiti (Tarayıcı Eklentisi)",
            description:
                "Gerçek zamanlı olarak potansiyel sahte haber makalelerini tespit edip işaretleyen akademik bir proje. Makine öğrenmesi tahminlerini sunmak için FastAPI backend geliştirdim ve metin sınıflandırması için NLP modeli uyguladım.",
            tech: ["Python", "FastAPI", "NLP", "Scikit-learn", "PostgreSQL/MongoDB"],
            github: "https://github.com/suleymanssardogan",
            featured: true,
        },
        {
            title: "AWS Sıfırdan Zirveye (Bulut Projesi)",
            description:
                "Backend sistemleri, bulut tabanlı uygulamalar ve DevOps pratiklerine aktif katkı. AWS altyapısı ve otomasyon üzerine odaklanıyorum.",
            tech: ["AWS", "DevOps", "Bulut Mimarisi", "CI/CD"],
            github: "https://github.com/selmanmoon/aws-zero-to-yeto",
            featured: true,
        },
        {
            title: "Optik Karakter Tanıma (OCR) API",
            description:
                "OCR görevleri için RESTful API tasarladım ve dağıttım. Derin öğrenme modelleri kullanarak görüntü veri setlerinden metin çıkardım, kolay dağıtım için Docker ile konteynerize ettim.",
            tech: ["Python", "Flask", "Docker", "OCR", "Bilgisayarlı Görü"],
            github: "https://github.com/suleymanssardogan/Pytesseract-with-Python-OCR-",
            featured: true,
        },
    ],
    // UI Metinleri (Türkçe)
    ui: {
        nav: {
            about: "Hakkımda",
            skills: "Yetenekler",
            projects: "Projeler",
            contact: "İletişim",
        },
        hero: {
            greeting: "Merhaba, ben",
            viewProjects: "Projeleri Gör",
            downloadCV: "CV İndir",
        },
        about: {
            title: "Hakkımda",
            education: "Eğitim",
            experience: "Deneyim",
            paragraph1:
                "Karmaşık, ölçeklenebilir sistemler inşa etme tutkusuyla hareket eden kararlı bir Yazılım Mühendisliği öğrencisiyim. Yolculuğum, yazılımın dünyayı nasıl şekillendirdiğine duyduğum merakla başladı ve mühendislik mükemmelliği arayışına dönüştü.",
            paragraph2:
                "Şu anda <strong>Yapay Zeka</strong> ve <strong>Bulut Mimarisi</strong> üzerine odaklanıyorum. Temiz, sürdürülebilir kod yazmaya ve gerçekten önemli problemleri çözmeye inanıyorum.",
            paragraph3:
                "Kod yazmadığım zamanlarda, ML alanındaki son makaleleri araştırıyor, hackathon'lara katılıyorum. Matematik ve uzay alanları ile alakalı tutkumu da her zaman ayakta tutmak istiyorum.",
        },
        skills: {
            title: "Teknik Yetenekler",
            categories: {
                languages: "Programlama Dilleri",
                ml_ai: "Yapay Zeka & ML",
                cloud_devops: "Bulut & DevOps",
                web: "Web Teknolojileri",
                tools: "Araçlar",
            },
        },
        projects: {
            title: "Öne Çıkan Projeler",
            subtitle:
                "AI/ML araştırmalarından ölçeklenebilir bulut mimarilerine uzanan mühendislik projelerimden bir seçki.",
            viewArchive: "Tüm Arşivi Gör",
        },
        contact: {
            preTitle: "Sırada Ne Var?",
            title: "İletişime Geç",
            description:
                "Şu anda <strong>Yaz 2026 Stajları</strong> arıyorum ve AI & Bulut Mühendisliği alanlarında yeni fırsatları değerlendirmeye açığım. Bir sorunuz varsa veya sadece merhaba demek istiyorsanız, size geri dönmek için elimden geleni yapacağım!",
            sayHello: "İletişim",
        },
        footer: {
            rights: "Tüm hakları saklıdır.",
        },
    },
};
