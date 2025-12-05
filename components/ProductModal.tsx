
import React from 'react';
import type { Product } from '../types';
import { XIcon, CheckCircleIcon, WhatsAppIcon } from './Icons';
import { COMPANY_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
    const { t } = useLanguage();
    if (!isOpen || !product) return null;

    const whatsappUrl = `${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Merhaba, ${product.name} hakkında teklif ve teknik bilgi almak istiyorum.`)}`;

    return (
        <div className="fixed inset-0 z-[200] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {/* Background backdrop */}
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div 
                    className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" 
                    aria-hidden="true" 
                    onClick={onClose}
                ></div>

                {/* Modal panel */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
                    
                    {/* Header */}
                    <div className="bg-brand-blue-900 px-4 py-3 sm:px-6 flex justify-between items-center">
                        <h3 className="text-lg leading-6 font-bold text-white" id="modal-title">
                            {product.name} - {t('techDetailsTitle')}
                        </h3>
                        <button onClick={onClose} className="text-white hover:text-gray-200 focus:outline-none">
                            <XIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left: Image */}
                            <div className="flex flex-col">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-auto object-cover rounded-lg shadow-md mb-6"
                                />
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2">{t('productDescTitle')}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                                </div>
                            </div>

                            {/* Right: Technical Specs */}
                            <div className="flex flex-col h-full overflow-y-auto max-h-[70vh] lg:max-h-none">
                                {product.technicalDetails ? (
                                    <>
                                        {/* Features List */}
                                        <div className="mb-8">
                                            <h4 className="font-bold text-brand-blue-900 text-lg mb-4 border-b pb-2">{t('featuresTitle')}</h4>
                                            <ul className="space-y-3">
                                                {product.technicalDetails.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-700 text-sm">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Specs Table */}
                                        <div>
                                            <h4 className="font-bold text-brand-blue-900 text-lg mb-4 border-b pb-2 italic">{t('specsTitle')}</h4>
                                            <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                        {product.technicalDetails.specifications.map((spec, idx) => (
                                                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                                <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900 w-1/2">
                                                                    {spec.label}
                                                                </td>
                                                                <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-600">
                                                                    {spec.value}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-center py-12">
                                        <p className="text-gray-500 text-lg mb-4">{t('techDataPending')}</p>
                                        <p className="text-gray-400 text-sm">{t('contactForDetails')}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-100">
                        <a 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm items-center"
                        >
                            <WhatsAppIcon className="w-4 h-4 mr-2" />
                            {t('offer')}
                        </a>
                        <button 
                            type="button" 
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={onClose}
                        >
                            {t('closeButton')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
