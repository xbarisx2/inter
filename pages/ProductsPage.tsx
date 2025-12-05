
import React from 'react';
import { useLanguage } from '../LanguageContext';

const ProductsPage: React.FC = () => {
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.PRODUCTS.map((product, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                <div className="relative">
                                    <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
                                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity"></div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-semibold text-brand-blue-900 mb-2">{product.name}</h3>
                                    <p className="text-gray-600 flex-grow">{product.description}</p>
                                    <button className="mt-6 w-full bg-brand-blue-50 text-brand-blue-700 font-semibold py-2 px-4 rounded-md hover:bg-brand-blue-100 transition-colors">
                                        {t('detailInfoButton')}
                                    </button>
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
