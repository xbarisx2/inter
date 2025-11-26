
import React from 'react';
import { COMPANY_INFO, NAVIGATION_LINKS } from '../constants';
import type { Page } from '../types';
import { InstagramIcon, PhoneIcon, MailIcon, LocationMarkerIcon } from './Icons';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
    return (
        <footer className="bg-brand-blue-950 text-white border-t-4 border-brand-red-600">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-2 rounded mb-4 w-fit">
                            <img 
                                src="https://github.com/xbarisx2/logo/blob/main/logoointer.jpg?raw=true" 
                                alt="İnter Akdeniz Alüminyum Logo" 
                                className="h-12 object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-4">İNTER AKDENİZ ALÜMİNYUM</h3>
                        <p className="text-brand-blue-200 text-sm leading-relaxed">
                           Modern mimarinin gereksinimlerini, yenilikçi alüminyum ve PVC sistemleriyle buluşturarak yaşam alanlarınıza değer katıyoruz.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-brand-red-400">Hızlı Erişim</h3>
                        <ul className="space-y-2">
                            {NAVIGATION_LINKS.map(link => (
                                <li key={link.name}>
                                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(link.name); }} className="text-brand-blue-200 hover:text-white hover:pl-2 transition-all duration-300 text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-brand-red-400">İletişim</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <LocationMarkerIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-brand-red-500" />
                                <span className="text-brand-blue-200">{COMPANY_INFO.address}</span>
                            </li>
                            <li className="flex items-center">
                                <PhoneIcon className="w-5 h-5 mr-3 flex-shrink-0 text-brand-red-500" />
                                <a href={`tel:${COMPANY_INFO.phone1}`} className="text-brand-blue-200 hover:text-white">{COMPANY_INFO.phone1}</a>
                            </li>
                            <li className="flex items-center">
                                <MailIcon className="w-5 h-5 mr-3 flex-shrink-0 text-brand-red-500" />
                                <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-blue-200 hover:text-white">{COMPANY_INFO.email}</a>
                            </li>
                        </ul>
                    </div>
                     {/* Social */}
                     <div>
                        <h3 className="text-lg font-semibold mb-4 text-brand-red-400">Sosyal Medya</h3>
                         <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center p-2 bg-brand-red-600 hover:bg-brand-red-700 rounded-full transition-colors">
                            <InstagramIcon className="w-6 h-6 text-white" />
                        </a>
                     </div>
                </div>

                <div className="mt-12 border-t border-brand-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="text-sm text-brand-blue-300">&copy; {new Date().getFullYear()} {COMPANY_INFO.name} Tüm hakları saklıdır.</p>
                    <p className="text-sm text-brand-blue-400 mt-2 md:mt-0 opacity-70 hover:opacity-100 transition-opacity">
                        Web Tasarım: <a href="mailto:barisyldrm@pm.me" className="hover:text-white transition-colors">barisyldrm@pm.me</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
