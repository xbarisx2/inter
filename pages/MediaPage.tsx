
import React from 'react';

const galleryImages = [
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0003.jpg?raw=true', alt: 'Proje Uygulaması 1' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0004.jpg?raw=true', alt: 'Proje Uygulaması 2' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0005.jpg?raw=true', alt: 'Proje Uygulaması 3' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0006.jpg?raw=true', alt: 'Proje Uygulaması 4' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0007.jpg?raw=true', alt: 'Proje Uygulaması 5' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0008.jpg?raw=true', alt: 'Proje Uygulaması 6' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0009.jpg?raw=true', alt: 'Proje Uygulaması 7' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0010.jpg?raw=true', alt: 'Proje Uygulaması 8' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0011.jpg?raw=true', alt: 'Proje Uygulaması 9' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0012.jpg?raw=true', alt: 'Proje Uygulaması 10' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0013.jpg?raw=true', alt: 'Proje Uygulaması 11' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0014.jpg?raw=true', alt: 'Proje Uygulaması 12' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0015.jpg?raw=true', alt: 'Proje Uygulaması 13' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0016.jpg?raw=true', alt: 'Proje Uygulaması 14' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0017.jpg?raw=true', alt: 'Proje Uygulaması 15' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0018.jpg?raw=true', alt: 'Proje Uygulaması 16' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0019.jpg?raw=true', alt: 'Proje Uygulaması 17' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0020.jpg?raw=true', alt: 'Proje Uygulaması 18' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0021.jpg?raw=true', alt: 'Proje Uygulaması 19' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0022.jpg?raw=true', alt: 'Proje Uygulaması 20' },
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3]">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-brand-blue-900 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                                    <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300 px-4 text-center">
                                        {image.alt}
                                    </p>
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
