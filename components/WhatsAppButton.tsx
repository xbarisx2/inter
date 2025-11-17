import React from 'react';
import { COMPANY_INFO } from '../constants';
import { WhatsAppIcon } from './Icons';

const WhatsAppButton: React.FC = () => {
    const prefilledText = encodeURIComponent('Merhaba, proje teklifi hakkında bilgi almak istiyorum.');
    const whatsappUrl = `${COMPANY_INFO.whatsapp}?text=${prefilledText}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
            aria-label="WhatsApp üzerinden mesaj gönder"
        >
            <WhatsAppIcon className="w-8 h-8" />
        </a>
    );
};

export default WhatsAppButton;