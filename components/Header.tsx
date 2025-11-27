
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Page, NavLink, SubLinkItem } from '../types';
import { NAVIGATION_LINKS, COMPANY_INFO } from '../constants';
import { InstagramIcon, MenuIcon, XIcon, PhoneIcon, MailIcon, ChevronRightIcon } from './Icons';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

// Helper to handle link clicks
const handleLinkClick = (
    item: { name: string; id?: string; page?: Page },
    setCurrentPage: (page: Page) => void,
    closeMenu?: () => void
) => {
    if (item.page) {
        setCurrentPage(item.page);
    }
    
    if (item.id) {
        setTimeout(() => {
            const element = document.getElementById(item.id!);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    } else {
        window.scrollTo(0, 0);
    }

    if (closeMenu) closeMenu();
};

// --- Desktop Recursive Components ---

const DesktopSubMenuItem: React.FC<{ item: SubLinkItem; setCurrentPage: (page: Page) => void; closeMenu: () => void }> = ({ item, setCurrentPage, closeMenu }) => {
    const hasChildren = item.subLinks && item.subLinks.length > 0;

    return (
        <li className="relative group/item px-4 py-2 hover:bg-gray-50">
            <a 
                href="#" 
                onClick={(e) => { 
                    e.preventDefault(); 
                    if (!hasChildren) handleLinkClick(item, setCurrentPage, closeMenu); 
                }}
                className="flex items-center justify-between w-full text-sm text-gray-700 hover:text-brand-red-600 transition-colors"
            >
                <span>{item.name}</span>
                {hasChildren && <ChevronRightIcon className="w-4 h-4 text-gray-400" />}
            </a>
            
            {/* Recursive Child Menu (Flyout to the right) */}
            {hasChildren && (
                <div className="absolute left-full top-0 w-64 bg-white shadow-xl border border-gray-100 hidden group-hover/item:block">
                     <ul className="py-2">
                        {item.subLinks?.map((subItem) => (
                            <DesktopSubMenuItem 
                                key={subItem.name} 
                                item={subItem} 
                                setCurrentPage={setCurrentPage} 
                                closeMenu={closeMenu}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
};

// Desktop Navigation Item
const NavItem: React.FC<{ link: NavLink; currentPage: Page; setCurrentPage: (page: Page) => void; }> = ({ link, currentPage, setCurrentPage }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const hasSublinks = link.subLinks && link.subLinks.length > 0;

    return (
        <li 
            className="relative h-full flex items-center group" 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}
        >
            <button
                onClick={() => handleLinkClick(link, setCurrentPage)}
                className={`flex items-center px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${currentPage === link.name ? 'text-brand-red-600' : 'text-brand-blue-900 hover:text-brand-red-600'}`}
                 aria-haspopup={hasSublinks}
                 aria-expanded={isDropdownOpen}
            >
                {link.name}
                {hasSublinks && <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>}
            </button>
            
            {/* Main Dropdown */}
            {hasSublinks && isDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white shadow-xl border-t-4 border-brand-red-600 z-50">
                    <ul className="py-2">
                        {link.subLinks?.map((subLink) => (
                            <DesktopSubMenuItem 
                                key={subLink.name} 
                                item={subLink} 
                                setCurrentPage={setCurrentPage} 
                                closeMenu={() => setDropdownOpen(false)}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
};


// --- Mobile Recursive Components ---

const MobileSubMenuItem: React.FC<{ item: SubLinkItem; setCurrentPage: (page: Page) => void; closeMenu: () => void; depth?: number }> = ({ item, setCurrentPage, closeMenu, depth = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = item.subLinks && item.subLinks.length > 0;
    const paddingLeft = `${(depth + 1) * 1}rem`;

    return (
        <li className="border-b border-gray-50 last:border-0">
             <div className="flex items-center justify-between pr-4">
                <button 
                    onClick={() => {
                        if (hasChildren) {
                            setIsExpanded(!isExpanded);
                        } else {
                            handleLinkClick(item, setCurrentPage, closeMenu);
                        }
                    }}
                    className="flex-grow text-left py-3 text-sm font-medium text-gray-600 hover:text-brand-red-600"
                    style={{ paddingLeft }}
                >
                    {item.name}
                </button>
                {hasChildren && (
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="p-2 text-gray-400 focus:outline-none"
                    >
                         <svg className={`w-4 h-4 transform transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                )}
            </div>

            {/* Recursive Mobile Children */}
            {hasChildren && (
                 <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul>
                        {item.subLinks?.map((subItem) => (
                            <MobileSubMenuItem 
                                key={subItem.name} 
                                item={subItem} 
                                setCurrentPage={setCurrentPage} 
                                closeMenu={closeMenu}
                                depth={depth + 1}
                            />
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
    const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);


    const toggleMobileSubmenu = (name: string) => {
        if (expandedMobileMenu === name) {
            setExpandedMobileMenu(null);
        } else {
            setExpandedMobileMenu(name);
        }
    };

    const MobileMenuOverlay = () => (
        <div className={`fixed inset-0 z-[40] transition-all duration-300 ease-in-out md:hidden flex flex-col pt-24 pb-6 px-4 overflow-y-auto ${isMenuOpen ? 'translate-x-0 bg-white' : 'translate-x-full bg-white/0'} pointer-events-auto`}>
            {isMenuOpen && (
                <>
                    <nav className="flex flex-col space-y-1 mt-4">
                        {NAVIGATION_LINKS.map(link => {
                            const hasSublinks = link.subLinks && link.subLinks.length > 0;
                            const isExpanded = expandedMobileMenu === link.name;

                            return (
                                <div key={link.name} className="border-b border-gray-100 last:border-0">
                                    <div className="flex items-center justify-between">
                                        <button 
                                            onClick={() => {
                                                if (hasSublinks) {
                                                    toggleMobileSubmenu(link.name);
                                                } else {
                                                    handleLinkClick(link, setCurrentPage, () => setIsMenuOpen(false));
                                                }
                                            }}
                                            className={`flex-grow text-left py-4 text-lg font-bold ${currentPage === link.name ? 'text-brand-red-600' : 'text-brand-blue-900'}`}
                                        >
                                            {link.name}
                                        </button>
                                        {hasSublinks && (
                                            <button 
                                                onClick={() => toggleMobileSubmenu(link.name)}
                                                className="p-4 text-brand-blue-500 focus:outline-none"
                                            >
                                                <svg className={`w-5 h-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </button>
                                        )}
                                    </div>
                                    
                                    {/* Mobile Submenu Root */}
                                    {hasSublinks && (
                                        <div className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-lg ${isExpanded ? 'max-h-[1200px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                                            <ul className="flex flex-col py-2">
                                                 {/* "All" Link for the category itself */}
                                                <li className="mb-1 border-b border-gray-100">
                                                     <button 
                                                        onClick={() => handleLinkClick(link, setCurrentPage, () => setIsMenuOpen(false))}
                                                        className="w-full text-left py-2 px-4 text-sm font-bold text-brand-blue-900 hover:text-brand-red-600"
                                                    >
                                                        {link.name} Ana Sayfa
                                                    </button>
                                                </li>
                                                {/* Recursive Items */}
                                                {link.subLinks?.map(subLink => (
                                                    <MobileSubMenuItem 
                                                        key={subLink.name}
                                                        item={subLink}
                                                        setCurrentPage={setCurrentPage}
                                                        closeMenu={() => setIsMenuOpen(false)}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    <div className="mt-auto pt-8 space-y-4 pb-8">
                         <a href={`tel:${COMPANY_INFO.phone1}`} className="flex items-center justify-center w-full py-4 border-2 border-brand-blue-900 text-brand-blue-900 rounded-lg font-bold hover:bg-brand-blue-50 transition-colors">
                            <PhoneIcon className="w-5 h-5 mr-2" />
                            Hemen Ara
                        </a>
                        
                        <button onClick={() => { setCurrentPage('İletişim'); setIsMenuOpen(false); }} className="w-full bg-brand-red-600 text-white py-4 rounded-lg font-bold hover:bg-brand-red-700 transition-colors shadow-md">
                            Teklif Al
                        </button>
                        
                         <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-brand-blue-800 py-2 font-medium">
                           <InstagramIcon className="w-6 h-6 mr-2"/> İnstagram'da Takip Et
                        </a>
                    </div>
                </>
            )}
        </div>
    );

    return (
        <>
            <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}>
                {/* Top Contact Bar - Hidden on very small screens, visible on md+ */}
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
                    <div className="flex items-center justify-between h-20 md:h-24 relative bg-white z-[60]">
                        <div className="flex-shrink-0">
                            <button onClick={() => { setCurrentPage('Ana Sayfa'); setIsMenuOpen(false); }} className="flex items-center">
                                <img 
                                    src="https://github.com/xbarisx2/logo/blob/main/logoointer-removebg-preview.png?raw=true" 
                                    alt="İNTER AKDENİZ ALÜMİNYUM" 
                                    className="h-14 md:h-20 w-auto object-contain"
                                />
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex md:items-center h-full">
                            <ul className="flex items-center space-x-1 lg:space-x-4 h-full">
                                 {NAVIGATION_LINKS.map(link => (
                                    <NavItem key={link.name} link={link} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                                ))}
                            </ul>
                             <button onClick={() => setCurrentPage('İletişim')} className="ml-4 lg:ml-6 bg-brand-red-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-brand-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm uppercase tracking-wide">
                                Teklif Al
                            </button>
                        </nav>
                        
                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                                className="text-brand-blue-900 hover:text-brand-red-600 focus:outline-none p-2 rounded-md transition-colors cursor-pointer"
                                aria-label="Menüyü Aç/Kapat"
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Render Mobile Menu in Portal to escape header stacking context */}
            {createPortal(<MobileMenuOverlay />, document.body)}
        </>
    );
};

export default Header;
