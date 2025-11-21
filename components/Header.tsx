
import React, { useState, useEffect } from 'react';
import type { Page, NavLink } from '../types';
import { NAVIGATION_LINKS, COMPANY_INFO } from '../constants';
import { InstagramIcon, MenuIcon, XIcon, PhoneIcon, MailIcon } from './Icons';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const NavItem: React.FC<{ link: NavLink; currentPage: Page; setCurrentPage: (page: Page) => void; closeMenu?: () => void }> = ({ link, currentPage, setCurrentPage, closeMenu }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const hasSublinks = link.subLinks && link.subLinks.length > 0;

    const handleMainLinkClick = () => {
        // Allow navigation for all main links, including those with sublinks like 'Ürünlerimiz'.
        setCurrentPage(link.name);
    };

    const handleSublinkClick = (subLink: { name: string; id?: string; page?: Page; }) => {
        if (subLink.page) {
            setCurrentPage(subLink.page);
        }
        
        if (subLink.id) {
            setTimeout(() => {
                document.getElementById(subLink.id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
        
        if (closeMenu) closeMenu();
        setDropdownOpen(false);
    };

    return (
        <li className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button
                onClick={handleMainLinkClick}
                className={`w-full text-left md:w-auto px-4 py-2 text-sm font-medium transition-colors duration-300 ${currentPage === link.name ? 'text-brand-red-600' : 'text-gray-700 hover:text-brand-red-600'} ${hasSublinks ? 'flex items-center gap-1' : ''}`}
                 aria-haspopup={hasSublinks}
                 aria-expanded={isDropdownOpen}
            >
                {link.name}
                {hasSublinks && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>}
            </button>
            {hasSublinks && isDropdownOpen && (
                <div className="md:absolute z-20 left-0 pt-2 w-48">
                    <ul className="bg-white rounded-md shadow-lg py-1 border-t-4 border-brand-red-600">
                        {link.subLinks?.map((subLink) => (
                            <li key={subLink.name}>
                               <a href="#" onClick={(e) => { e.preventDefault(); handleSublinkClick(subLink); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-blue-50 hover:text-brand-red-600">
                                    {subLink.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white shadow-sm'}`}>
            {/* Top Contact Bar */}
            <div className="bg-brand-red-600 text-white hidden md:block transition-colors duration-300">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-2 text-sm font-medium">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2 group">
                                <PhoneIcon className="w-4 h-4 text-white/90 group-hover:text-white" />
                                <a href={`tel:${COMPANY_INFO.phone1}`} className="text-white/90 hover:text-white transition-colors">{COMPANY_INFO.phone1}</a>
                            </div>
                            <div className="flex items-center space-x-2 group">
                                <MailIcon className="w-4 h-4 text-white/90 group-hover:text-white" />
                                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white/90 hover:text-white transition-colors">{COMPANY_INFO.email}</a>
                            </div>
                        </div>
                        <div className="flex items-center">
                             <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors flex items-center gap-1">
                                <InstagramIcon className="w-5 h-5" />
                                <span className="text-xs">Bizi Takip Edin</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex-shrink-0">
                        <button onClick={() => setCurrentPage('Ana Sayfa')} className="flex items-center">
                            <img 
                                src="https://github.com/xbarisx2/logo/blob/main/inter%20logo.jpg?raw=true" 
                                alt="İNTER AKDENİZ ALÜMİNYUM" 
                                className="h-20 md:h-24 w-auto object-contain py-2"
                            />
                        </button>
                    </div>

                    <nav className="hidden md:flex md:items-center">
                        <ul className="flex items-center space-x-2">
                             {NAVIGATION_LINKS.map(link => (
                                <NavItem key={link.name} link={link} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                            ))}
                        </ul>
                         <button onClick={() => setCurrentPage('İletişim')} className="ml-6 bg-brand-red-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-brand-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Teklif Al
                        </button>
                    </nav>
                    
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-brand-red-600 focus:outline-none p-2">
                            {isMenuOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 absolute w-full shadow-xl">
                    <nav className="flex flex-col p-4 space-y-2">
                        {NAVIGATION_LINKS.map(link => (
                           <NavItem key={link.name} link={link} currentPage={currentPage} setCurrentPage={setCurrentPage} closeMenu={() => setIsMenuOpen(false)} />
                        ))}
                        <hr className="my-2 border-gray-100"/>
                         <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-brand-red-50 hover:text-brand-red-600 rounded-lg">
                           <InstagramIcon className="w-5 h-5 mr-3"/> Instagram'da Takip Et
                        </a>
                        <div className="pt-2">
                             <button onClick={() => {setCurrentPage('İletişim'); setIsMenuOpen(false);}} className="w-full bg-brand-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-brand-red-700 transition-colors shadow-sm">
                                Teklif Al
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
