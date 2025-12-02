
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
    item: { name: string; id?: string; page?: Page } | NavLink,
    setCurrentPage: (page: Page) => void,
    closeMenu?: () => void
) => {
    const targetPage = (item as any).page || (item as any).name;

    if (targetPage) {
        setCurrentPage(targetPage as Page);
    }
    
    if ((item as any).id) {
        // Set the hash so the App's useEffect can pick it up after rendering the new page
        window.location.hash = (item as any).id;
        
        // If we are already on the page, try scrolling immediately
        const element = document.getElementById((item as any).id!);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        window.scrollTo(0, 0);
        // Clear hash if navigating to a top-level page without ID
        if (window.location.hash) {
             history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    }

    if (closeMenu) closeMenu();
};

// --- Desktop Recursive Components ---

const DesktopSubMenuItem: React.FC<{ item: SubLinkItem; setCurrentPage: (page: Page) => void; closeMenu: () => void }> = ({ item, setCurrentPage, closeMenu }) => {
    const hasChildren = item.subLinks && item.subLinks.length > 0;

    return (
        <li className="relative group/item px-4 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-0">
            <a 
                href="#" 
                onClick={(e) => { 
                    e.preventDefault(); 
                    if (!hasChildren) handleLinkClick(item, setCurrentPage, closeMenu); 
                }}
                className="flex items-center justify-between w-full text-sm text-gray-700 hover:text-brand-blue-800 transition-colors"
            >
                <span>{item.name}</span>
                {hasChildren && <ChevronRightIcon className="w-4 h-4 text-gray-400" />}
            </a>
            
            {hasChildren && (
                <div className="absolute left-full top-0 w-72 bg-white shadow-xl border border-gray-100 hidden group-hover/item:block">
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

const NavItem: React.FC<{ link: NavLink; currentPage: Page; setCurrentPage: (page: Page) => void; isTransparent: boolean }> = ({ link, currentPage, setCurrentPage, isTransparent }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const hasSublinks = link.subLinks && link.subLinks.length > 0;

    // Logic to determine text color - Always dark corporate blue for consistency and readability on the white/gradient background
    const baseTextColor = 'text-gray-700 hover:text-brand-blue-900';
    const activeTextColor = 'text-brand-blue-900';
    const textColor = currentPage === link.name ? activeTextColor : baseTextColor;

    return (
        <li 
            className="relative h-full flex items-center group" 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}
        >
            <button
                onClick={() => handleLinkClick(link, setCurrentPage)}
                className={`flex items-center px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${textColor}`}
                 aria-haspopup={hasSublinks}
                 aria-expanded={isDropdownOpen}
            >
                {link.name}
                {hasSublinks && <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>}
            </button>
            
            {hasSublinks && isDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white shadow-xl border-t-4 border-brand-blue-900 z-50">
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
                    className="flex-grow text-left py-3 text-sm font-medium text-gray-600 hover:text-brand-blue-900"
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
    const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
    
    const isHomePage = currentPage === 'Ana Sayfa';

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
        <div className={`fixed inset-0 z-[100] transition-all duration-300 ease-in-out md:hidden flex flex-col pt-24 pb-6 px-4 overflow-y-auto bg-white ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} pointer-events-auto`}>
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
                                            className={`flex-grow text-left py-4 text-lg font-bold ${currentPage === link.name ? 'text-brand-blue-900' : 'text-gray-800'}`}
                                        >
                                            {link.name}
                                        </button>
                                        {hasSublinks && (
                                            <button 
                                                onClick={() => toggleMobileSubmenu(link.name)}
                                                className="p-4 text-gray-500 focus:outline-none"
                                            >
                                                <svg className={`w-5 h-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </button>
                                        )}
                                    </div>
                                    
                                    {hasSublinks && (
                                        <div className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-lg ${isExpanded ? 'max-h-[1200px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                                            <ul className="flex flex-col py-2">
                                                <li className="mb-1 border-b border-gray-100">
                                                     <button 
                                                        onClick={() => handleLinkClick(link, setCurrentPage, () => setIsMenuOpen(false))}
                                                        className="w-full text-left py-2 px-4 text-sm font-bold text-brand-blue-900 hover:text-brand-blue-700"
                                                    >
                                                        {link.name} Ana Sayfa
                                                    </button>
                                                </li>
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
                        
                        <button onClick={() => { setCurrentPage('İletişim'); setIsMenuOpen(false); }} className="w-full bg-brand-blue-900 text-white py-4 rounded-lg font-bold hover:bg-brand-blue-800 transition-colors shadow-md">
                            Teklif Al
                        </button>
                        
                         <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-800 py-2 font-medium">
                           <InstagramIcon className="w-6 h-6 mr-2 text-brand-blue-900"/> İnstagram'da Takip Et
                        </a>
                    </div>
                </>
            )}
        </div>
    );

    // Determine header style
    // Home Page: Absolute position (doesn't follow scroll), transparent top with gradient.
    // Other Pages: Relative position (doesn't overlap content), solid white.
    
    return (
        <>
            {/* Header Container */}
            <header 
                className={`${isHomePage ? 'absolute top-0 left-0' : 'relative'} w-full z-50 transition-all duration-300 ${
                    isHomePage
                    ? 'bg-gradient-to-b from-white via-white/80 to-transparent border-b border-white/0'
                    : 'bg-white shadow-md'
                }`}
            >
                {/* Top Contact Bar */}
                <div className={`hidden md:block transition-all duration-300 border-b ${
                    isHomePage
                    ? 'bg-transparent border-gray-200/20 text-brand-blue-900'
                    : 'bg-gray-800 border-gray-800 text-white' // Gray background for non-home pages
                }`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-2 text-sm font-medium">
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2 group">
                                    <PhoneIcon className={`w-4 h-4 ${!isHomePage ? 'text-gray-300' : 'text-brand-blue-900'}`} />
                                    <a href={`tel:${COMPANY_INFO.phone1}`} className="hover:opacity-80 transition-colors" aria-label="Telefon">{COMPANY_INFO.phone1}</a>
                                </div>
                                <div className="flex items-center space-x-2 group">
                                    <MailIcon className={`w-4 h-4 ${!isHomePage ? 'text-gray-300' : 'text-brand-blue-900'}`} />
                                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:opacity-80 transition-colors" aria-label="E-posta">{COMPANY_INFO.email}</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                 <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-colors flex items-center gap-1" aria-label="Instagram">
                                    <InstagramIcon className="w-4 h-4" />
                                    <span className="text-xs">Takip Et</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Consistent height */}
                    <div className="flex items-center justify-between transition-all duration-300 h-20 md:h-28">
                        {/* Logo - Adjusted height for mobile to prevent overcrowding */}
                        <div className="flex-shrink-0 z-50">
                            <button onClick={() => { setCurrentPage('Ana Sayfa'); setIsMenuOpen(false); }} className="flex items-center focus:outline-none">
                                <img 
                                    src="https://github.com/xbarisx2/logo/blob/main/logoointer-removebg-preview.png?raw=true" 
                                    alt="İNTER AKDENİZ ALÜMİNYUM" 
                                    className="w-auto object-contain transition-all duration-300 h-12 md:h-24"
                                />
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="hidden md:flex md:items-center h-full">
                            <ul className="flex items-center space-x-2 lg:space-x-6 h-full">
                                 {NAVIGATION_LINKS.map(link => (
                                    <NavItem 
                                        key={link.name} 
                                        link={link} 
                                        currentPage={currentPage} 
                                        setCurrentPage={setCurrentPage} 
                                        isTransparent={isHomePage}
                                    />
                                ))}
                            </ul>
                             <button 
                                onClick={() => setCurrentPage('İletişim')} 
                                className={`ml-6 px-6 py-3 rounded-none font-bold transition-all duration-300 uppercase tracking-widest text-xs border-2 border-brand-blue-900 text-brand-blue-900 hover:bg-brand-blue-900 hover:text-white`}
                             >
                                Teklif Al
                            </button>
                        </nav>
                        
                        {/* Mobile Toggle */}
                        <div className="md:hidden flex items-center z-50">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                                className="p-2 rounded-md transition-colors focus:outline-none text-gray-900 bg-white/50 backdrop-blur-sm"
                                aria-label="Menüyü Aç/Kapat"
                            >
                                {isMenuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            
            {createPortal(<MobileMenuOverlay />, document.body)}
        </>
    );
};

export default Header;