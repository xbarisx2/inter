
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';
import type { Page } from '../types';
import { InstagramIcon, PhoneIcon, MailIcon, LocationMarkerIcon } from './Icons';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
    const { t, data } = useLanguage();
    
    return (
        <footer className="bg-gray-900 text-white border-t-4 border-brand-blue-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-2 rounded mb-4 w-fit">
                            <img 
                                src="https://github.com/xbarisx2/logo/blob/main/logoointer-removebg-preview.png?raw=true" 
                                alt="İnter Akdeniz Alüminyum Logo" 
                                className="h-12 object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">İNTER AKDENİZ ALÜMİNYUM</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                           {t('productsPageSubtitle')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">{t('quickAccess')}</h3>
                        <ul className="space-y-2">
                            {data.NAVIGATION_LINKS.map(link => (
                                <li key={link.name}>
                                    <a 
                                        href="#" 
                                        onClick={(e) => { 
                                            e.preventDefault(); 
                                            // Fallback to name if page not strictly defined
                                            setCurrentPage(link.page || (link.name as Page)); 
                                        }} 
                                        className="text-gray-400 hover:text-brand-blue-400 hover:pl-2 transition-all duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">{t('communication')}</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <LocationMarkerIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-brand-blue-500" />
                                <span className="text-gray-400">{COMPANY_INFO.address}</span>
                            </li>
                            <li className="flex items-center">
                                <PhoneIcon className="w-5 h-5 mr-3 flex-shrink-0 text-brand-blue-500" />
                                <a href={`tel:${COMPANY_INFO.phone1}`} className="text-gray-400 hover:text-white">{COMPANY_INFO.phone1}</a>
                            </li>
                            <li className="flex items-center">
                                <MailIcon className="w-5 h-5 mr-3 flex-shrink-0 text-brand-blue-500" />
                                <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-400 hover:text-white">{COMPANY_INFO.email}</a>
                            </li>
                        </ul>
                    </div>
                     {/* Social */}
                     <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">{t('socialMedia')}</h3>
                         <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center p-2 bg-brand-blue-800 hover:bg-brand-blue-700 rounded-full transition-colors">
                            <InstagramIcon className="w-6 h-6 text-white" />
                        </a>
                     </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} {COMPANY_INFO.name} {t('rightsReserved')}</p>
                    <p className="text-sm text-gray-600 mt-2 md:mt-0 opacity-70 hover:opacity-100 transition-opacity">
                        {t('webDesign')}: <a href="mailto:barisyldrm@pm.me" className="hover:text-white transition-colors">barisyldrm@pm.me</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
