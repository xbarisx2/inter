
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from './Icons';

const SocialSidebar: React.FC = () => {
    return (
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
            <a 
                href={COMPANY_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 shadow-lg hover:bg-gray-50 hover:w-14 w-12 transition-all duration-300 rounded-l-md flex items-center justify-center group"
                aria-label="Instagram"
            >
                <InstagramIcon className="w-6 h-6 text-brand-blue-900 group-hover:scale-110 transition-transform" />
            </a>
            <a 
                href={COMPANY_INFO.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 shadow-lg hover:bg-gray-50 hover:w-14 w-12 transition-all duration-300 rounded-l-md flex items-center justify-center group"
                aria-label="WhatsApp"
            >
                <WhatsAppIcon className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
            </a>
            <a 
                href={`tel:${COMPANY_INFO.phone1}`}
                className="bg-white p-3 shadow-lg hover:bg-gray-50 hover:w-14 w-12 transition-all duration-300 rounded-l-md flex items-center justify-center group"
                aria-label="Telefon"
            >
                <PhoneIcon className="w-6 h-6 text-brand-blue-900 group-hover:scale-110 transition-transform" />
            </a>
        </div>
    );
};

export default SocialSidebar;
