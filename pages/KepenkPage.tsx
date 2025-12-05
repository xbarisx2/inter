
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const KepenkPage: React.FC = () => {
    const { data, language, t } = useLanguage();
    const sections = data.KEPENK_SECTIONS;
    const content = data.KEPENK_CONTENT[language === 'tr' ? 'TR' : 'EN'];
    const [activeTab, setActiveTab] = useState(sections[0].id);

    const activeSection = sections.find(s => s.id === activeTab) || sections[0];

    return (
        <>
            {/* Header */}
            <div className="bg-brand-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        {language === 'tr' ? 'Kepenk Sistemleri' : 'Roller Shutter Systems'}
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
                                ? "Özellikle iş yerleri, depolar ve garajlar için tasarlanan kepenk sistemleri, fiziksel güvenliği en üst düzeye çıkaran profesyonel çözümler sunar. Sağlam yapısı ve üstün koruma özellikleriyle, değerli varlıklarınızı dış etkenlere ve izinsiz girişlere karşı tam koruma altına alır."
                                : "Designed especially for workplaces, warehouses, and garages, roller shutter systems offer professional solutions that maximize physical security. With its robust structure and superior protection features, it provides full protection for your valuable assets against external factors and unauthorized access."}
                        </p>
                    </div>

                    {/* Catalog Button (Blue as per screenshot) */}
                    <div className="text-center mb-16">
                        <a 
                            href={COMPANY_INFO.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-brand-blue-600 text-white font-bold py-3 px-8 rounded hover:bg-brand-blue-700 transition-colors shadow-lg"
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up mb-20">
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

                    {/* Feature Descriptions (Bottom Text) */}
                    <div className="grid md:grid-cols-3 gap-12 border-t pt-16 mt-16">
                        <div className="md:col-span-1">
                            <h2 className="text-2xl font-bold text-brand-blue-900 mb-6">
                                {language === 'tr' ? 'Kepenk Sistemleri' : 'Shutter Systems'}
                            </h2>
                        </div>
                        <div className="md:col-span-2 space-y-8">
                            {content.map((item, index) => (
                                <div key={index}>
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default KepenkPage;
