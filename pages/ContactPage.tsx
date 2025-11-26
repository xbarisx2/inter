
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { PhoneIcon, MailIcon, LocationMarkerIcon, CheckCircleIcon } from '../components/Icons';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage('Lütfen tüm alanları doldurunuz.');
            setFormStatus('error');
            return;
        }

        setFormStatus('sending');
        setErrorMessage('');

        const { name, email, message } = formData;
        
        const subject = `İletişim Formu Mesajı: ${name}`;
        const body = `
Ad Soyad: ${name}
E-posta: ${email}
---
Mesaj:
${message}
        `;

        const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;
        
        // This will attempt to open the user's default email client
        window.location.href = mailtoLink;

        setFormStatus('sent');
        // NOTE: We do not clear the form immediately so the user can resend if needed,
        // but we switch the UI to a success state.
    };

    const resetForm = () => {
        setFormStatus('idle');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <div className="relative h-96 bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.954215286591!2d30.75572567645166!3d36.86718097223049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391d3c054e7ab%3A0xe54e1c251d8b9d5c!2s%C3%87a%C4%9Flayan%2C%20Bar%C4%B1naklar%20Blv.%20No%3A99%2C%2007230%20Muratpa%C5%9Fa%2FAntalya!5e0!3m2!1str!2str!4v1721841370591!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="İnter Akdeniz Alüminyum Konumu"
                ></iframe>
            </div>

            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-blue-900">Bize Ulaşın</h1>
                        <p className="mt-4 text-lg text-gray-600">Projeniz hakkında görüşmek veya teklif almak için bizimle iletişime geçin.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form Area */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-all duration-300 min-h-[500px] flex flex-col justify-center">
                            {formStatus === 'sent' ? (
                                <div className="text-center animate-fade-in py-8">
                                    <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                                        <CheckCircleIcon className="h-12 w-12 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Yönlendiriliyorsunuz!</h3>
                                    <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
                                        E-posta istemciniz otomatik olarak açıldı. Lütfen mesajınızı kontrol edip gönder butonuna basarak işlemi tamamlayın.
                                    </p>
                                    <button 
                                        onClick={resetForm} 
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-brand-blue-700 bg-brand-blue-100 hover:bg-brand-blue-200 transition-colors duration-300"
                                    >
                                        Yeni Mesaj Gönder
                                    </button>
                                </div>
                            ) : (
                                <div className="w-full">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mesaj Gönderin</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Adınız Soyadınız</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta Adresiniz</label>
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500" />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mesajınız</label>
                                            <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500"></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" disabled={formStatus === 'sending'} className="w-full bg-brand-blue-600 text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-brand-blue-700 transition-colors duration-300 disabled:bg-brand-blue-400 disabled:cursor-not-allowed">
                                                {formStatus === 'sending' ? 'Yönlendiriliyor...' : 'Gönder'}
                                            </button>
                                        </div>
                                        {formStatus === 'error' && (
                                            <div className="p-4 bg-red-100 text-red-800 rounded-md text-sm border border-red-200">
                                                {errorMessage}
                                            </div>
                                        )}
                                    </form>
                                </div>
                            )}
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-brand-blue-100 p-3 rounded-full">
                                    <LocationMarkerIcon className="w-6 h-6 text-brand-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Adres</h3>
                                    <p className="text-gray-600">{COMPANY_INFO.address}</p>
                                </div>
                            </div>
                             <div className="flex items-start">
                                <div className="flex-shrink-0 bg-brand-blue-100 p-3 rounded-full">
                                    <PhoneIcon className="w-6 h-6 text-brand-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Telefon</h3>
                                    <a href={`tel:${COMPANY_INFO.phone1}`} className="text-gray-600 hover:text-brand-blue-600 block">{COMPANY_INFO.phone1}</a>
                                    <a href={`tel:${COMPANY_INFO.phone2}`} className="text-gray-600 hover:text-brand-blue-600 block">{COMPANY_INFO.phone2}</a>
                                </div>
                            </div>
                             <div className="flex items-start">
                                <div className="flex-shrink-0 bg-brand-blue-100 p-3 rounded-full">
                                    <MailIcon className="w-6 h-6 text-brand-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold text-gray-800">E-posta</h3>
                                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-600 hover:text-brand-blue-600">{COMPANY_INFO.email}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
