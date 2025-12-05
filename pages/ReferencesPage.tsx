
import React from 'react';
import { useLanguage } from '../LanguageContext';

const ReferencesPage: React.FC = () => {
    const { data, t } = useLanguage();

    return (
        <>
            <div className="bg-brand-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">{t('referencesPageTitle')}</h1>
                    <p className="mt-4 text-lg text-brand-blue-200">{t('referencesPageSubtitle')}</p>
                </div>
            </div>

            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                           {t('referencesPageText')}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
                        {data.REFERENCES.map((ref, index) => (
                            <div key={index} className="group flex flex-col items-center justify-center text-center transition-all duration-300">
                                <div className="bg-white p-6 rounded-lg shadow-md group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 w-full h-40 flex items-center justify-center">
                                    <img 
                                        src={ref.logo} 
                                        alt={`${ref.name} logosu`} 
                                        className="max-h-20 max-w-full object-contain transition-all duration-300" 
                                    />
                                </div>
                                <p className="text-sm font-medium text-gray-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{ref.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReferencesPage;
