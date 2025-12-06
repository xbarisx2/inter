
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const GuillotinePage: React.FC = () => {
    const { data } = useLanguage();
    const content = data.GUILLOTINE_CONTENT.TR; // Force TR

    return (
        <>
            {/* Header */}
            <div className="bg-brand-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Giyotin Cam Balkon Sistemleri
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="py-16 bg-white min-h-screen">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Description Text */}
                    <div className="text-center max-w-5xl mx-auto mb-10">
                        <p className="text-gray-600 leading-relaxed text-lg font-light">
                            {content.description}
                        </p>
                    </div>

                     {/* Catalog Button */}
                     <div className="text-center mb-16">
                        <a 
                            href={COMPANY_INFO.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-10 rounded hover:bg-blue-600 transition-colors shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            Kataloğu İncele
                        </a>
                    </div>


                    {/* Image Section */}
                    <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
                            <img 
                                src={content.image} 
                                alt="Giyotin Cam Balkon"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="md:col-span-1">
                            <h2 className="text-3xl font-bold text-brand-blue-900">
                                Giyotin Cam Balkon
                            </h2>
                        </div>
                        <div className="md:col-span-2 space-y-8">
                            {content.features.map((feature, index) => (
                                <div key={index}>
                                    <h4 className="text-gray-500 text-lg mb-2 uppercase tracking-wide font-semibold">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {feature.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default GuillotinePage;
