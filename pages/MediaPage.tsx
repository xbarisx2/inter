
import React from 'react';
import { useLanguage } from '../LanguageContext';

const MediaPage: React.FC = () => {
    const { data, t } = useLanguage();
    const galleryImages = data.MEDIA_IMAGES;

    return (
        <>
            <div className="bg-brand-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">{t('mediaPageTitle')}</h1>
                    <p className="mt-4 text-lg text-brand-blue-200">{t('mediaPageSubtitle')}</p>
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
                                    decoding="async"
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
