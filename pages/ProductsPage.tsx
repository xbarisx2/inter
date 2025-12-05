
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { COMPANY_INFO } from '../constants';
import { Page } from '../types';

interface ProductsPageProps {
    setCurrentPage?: (page: Page) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ setCurrentPage }) => {
    const { data, t } = useLanguage();
    
    return (
        <>
            <div className="bg-brand-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">{t('productsPageTitle')}</h1>
                    <p className="mt-4 text-lg text-brand-blue-200">{t('productsPageSubtitle')}</p>
                </div>
            </div>

            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.PRODUCT_CATEGORIES.map((category, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={category.image} 
                                        alt={category.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-opacity"></div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-brand-blue-900 mb-3">{category.title}</h3>
                                    <div className="h-1 w-12 bg-brand-blue-500 mb-4"></div>
                                    <p className="text-gray-600 flex-grow leading-relaxed">
                                        {category.description}
                                    </p>
                                    <div className="mt-8">
                                        {category.page && setCurrentPage ? (
                                            <button 
                                                onClick={() => setCurrentPage(category.page as Page)}
                                                className="inline-block w-full text-center bg-white text-brand-blue-900 font-bold py-3 px-4 rounded border-2 border-brand-blue-900 hover:bg-brand-blue-900 hover:text-white transition-colors uppercase tracking-wide text-sm"
                                            >
                                                {t('examine')}
                                            </button>
                                        ) : (
                                            <a 
                                                href={`${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Merhaba, ${category.title} hakkında detaylı bilgi ve teklif almak istiyorum.`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block w-full text-center bg-brand-blue-900 text-white font-bold py-3 px-4 rounded hover:bg-brand-blue-800 transition-colors uppercase tracking-wide text-sm"
                                            >
                                                {t('offer')}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsPage;
