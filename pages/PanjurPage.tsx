
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const PanjurPage: React.FC = () => {
    const { data, language, t } = useLanguage();
    const sections = data.PANJUR_SECTIONS;
    const [activeTab, setActiveTab] = useState(sections[0].id);

    const activeSection = sections.find(s => s.id === activeTab) || sections[0];

    return (
        <>
            {/* Header */}
            <div className="bg-brand-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        {language === 'tr' ? 'Panjur Sistemleri' : 'Shutter Systems'}
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="py-16 bg-white min-h-screen">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Description Text */}
                    <div className="text-center max-w-4xl mx-auto mb-10">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {language === 'tr' 
                                ? "Modern mimarinin vazgeçilmez bir unsuru olan panjur sistemleri, estetik ve fonksiyonelliği mükemmel bir şekilde birleştirir. Yaşam alanlarınızı dış etkenlere karşı koruyarak güvenlik ve mahremiyet sağlarken, sunduğu üstün yalıtım özellikleriyle konforu en üst seviyeye çıkarır ve enerji tasarrufuna katkıda bulunur."
                                : "Shutter systems, an indispensable element of modern architecture, combine aesthetics and functionality perfectly. While providing security and privacy by protecting your living spaces against external factors, it maximizes comfort with its superior insulation features and contributes to energy saving."}
                        </p>
                    </div>

                    {/* Catalog Button (Red as per screenshot) */}
                    <div className="text-center mb-16">
                        <a 
                            href={COMPANY_INFO.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-brand-red-600 text-white font-bold py-3 px-8 rounded hover:bg-brand-red-700 transition-colors shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            {language === 'tr' ? 'Kataloğu İncele' : 'View Catalog'}
                        </a>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 border-b border-gray-200 pb-2">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveTab(section.id)}
                                className={`text-sm md:text-base font-bold py-2 px-4 transition-all duration-300 relative ${
                                    activeTab === section.id 
                                    ? 'text-brand-red-600' 
                                    : 'text-gray-500 hover:text-gray-800'
                                }`}
                            >
                                {section.title}
                                {/* Active Underline */}
                                <span className={`absolute bottom-0 left-0 w-full h-1 bg-brand-red-600 transform transition-transform duration-300 ${activeTab === section.id ? 'scale-x-100' : 'scale-x-0'}`}></span>
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
                        {activeSection.items.map((item, index) => (
                            <div key={index} className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center group">
                                <div className="h-40 w-full mb-6 flex items-center justify-center">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                                {item.code && (
                                    <span className="text-xs text-gray-400 font-mono tracking-wide uppercase">{item.code}</span>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default PanjurPage;
