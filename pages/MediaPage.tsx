
import React from 'react';

const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80', alt: 'Modern Cephe Uygulaması' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80', alt: 'Lüks Villa Projesi' },
    { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', alt: 'Plaza Giydirme Cephe' },
    { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80', alt: 'Kurumsal Ofis Projesi' },
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80', alt: 'Sürme Cam Sistemleri' },
    { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80', alt: 'Üretim Kalitesi' },
    { src: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80', alt: 'Modern Mimari Detaylar' },
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80', alt: 'Ofis Bölme Sistemleri' },
];

const MediaPage: React.FC = () => {
    return (
        <>
            <div className="bg-brand-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">Medya Galerisi</h1>
                    <p className="mt-4 text-lg text-brand-blue-200">Projelerimizden ve uygulamalarımızdan seçkin kareler.</p>
                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {galleryImages.map((image, index) => (
                            <div key={index} className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${index === 1 || index === 4 || index === 7 ? 'col-span-1 row-span-2' : ''}`}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-blue-900 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                                    <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300 px-4 text-center">{image.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MediaPage;
