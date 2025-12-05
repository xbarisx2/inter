
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const PergolaPage: React.FC = () => {
    const { data, language, t } = useLanguage();
    const content = data.PERGOLA_CONTENT[language === 'tr' ? 'TR' : 'EN'];
    const models = data.PERGOLA_MODELS;

    return (
        <>
            {/* Header */}
            <div className="bg-brand-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        {language === 'tr' ? 'Pergola Sistemleri' : 'Pergola Systems'}
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

                    {/* Catalog Button (Blue) */}
                    <div className="text-center mb-16">
                        <a 
                            href={COMPANY_INFO.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-10 rounded hover:bg-blue-600 transition-colors shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            {language === 'tr' ? 'Kataloğu İncele' : 'View Catalog'}
                        </a>
                    </div>

                    {/* Product Grid - Model Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 animate-fade-in-up">
                        {models.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col group h-full">
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-2xl font-bold">{item.name}</h3>
                                        <p className="text-sm font-medium opacity-90 uppercase tracking-wide">{item.subtitle}</p>
                                    </div>
                                </div>
                                
                                <div className="p-6 bg-white flex-grow">
                                    <h4 className="font-bold text-gray-900 mb-3 border-b pb-2 text-sm uppercase tracking-wider text-brand-blue-900">Teknik Özellikler</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        {item.specs && item.specs.map((spec: any, i: number) => (
                                            <li key={i} className="flex justify-between items-center">
                                                <span className="font-semibold text-gray-700">{spec.label}:</span>
                                                <span>{spec.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Features Section (Bottom Text) */}
                    <div className="grid md:grid-cols-3 gap-12 border-t pt-16 mt-8">
                        <div className="md:col-span-1">
                            <h2 className="text-3xl font-bold text-brand-blue-900 mb-6">
                                {language === 'tr' ? 'Pergola Sistemleri' : 'Pergola Systems'}
                            </h2>
                        </div>
                        <div className="md:col-span-2 space-y-12">
                            {content.features.map((feature, index) => (
                                <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                    <h4 className="text-gray-500 font-medium text-lg hover:text-brand-blue-600 transition-colors cursor-default">
                                        {feature}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PergolaPage;
