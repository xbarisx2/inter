
import React from 'react';

const galleryImages = [
    { src: 'https://picsum.photos/seed/gallery1/800/600', alt: 'Proje 1' },
    { src: 'https://picsum.photos/seed/gallery2/600/800', alt: 'Proje 2' },
    { src: 'https://picsum.photos/seed/gallery3/800/600', alt: 'Proje 3' },
    { src: 'https://picsum.photos/seed/gallery4/800/600', alt: 'Proje 4' },
    { src: 'https://picsum.photos/seed/gallery5/600/800', alt: 'Proje 5' },
    { src: 'https://picsum.photos/seed/gallery6/800/600', alt: 'Proje 6' },
    { src: 'https://picsum.photos/seed/gallery7/800/600', alt: 'Proje 7' },
    { src: 'https://picsum.photos/seed/gallery8/600/800', alt: 'Proje 8' },
];

const MediaPage: React.FC = () => {
    return (
        <>
            <div className="bg-brand-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">Medya Galerisi</h1>
                    <p className="mt-4 text-lg text-brand-blue-200">Projelerimizden ve uygulamalarımızdan görseller.</p>
                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {galleryImages.map((image, index) => (
                            <div key={index} className={`group relative overflow-hidden rounded-lg shadow-lg ${index === 1 || index === 4 || index === 7 ? 'col-span-1 row-span-2' : ''}`}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                    <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">{image.alt}</p>
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
