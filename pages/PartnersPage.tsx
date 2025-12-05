
import React from 'react';
import { useLanguage } from '../LanguageContext';

const PartnersPage: React.FC = () => {
    const { data, t } = useLanguage();

    return (
        <>
            <div className="bg-brand-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">{t('partnersPageTitle')}</h1>
                    <p className="mt-4 text-lg text-brand-blue-200">{t('partnersPageSubtitle')}</p>
                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('partnersPageText')}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                        {data.PARTNERS.map((partner, index) => (
                            <div key={index} className="flex justify-center items-center p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-gray-100 h-32">
                                <img src={partner.logo} alt={partner.name} className="max-h-16 object-contain transition-all duration-300"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnersPage;
