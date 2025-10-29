'use client';

import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';
import { ArrowDown, ChevronDownIcon, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { CatalogIcon } from '@/components/ui/catalog';

const UpNavBar = () => {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navigationItems = [
    { href: '#devices', label: 'Устройства' },
    { href: '#platform', label: 'Платформа' },
    { href: '#medicine', label: 'Для врачей' },
    { href: '#about', label: 'О нас' },
  ]

  // Блокировка скролла когда меню открыто
  useEffect(() => {
    if (sideMenuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sideMenuOpened]);

  // Обработчик скролла для скрытия/показа навбара
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Скролл вниз - скрываем навбар
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Скролл вверх - показываем навбар
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Добавляем троттлинг для оптимизации
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [lastScrollY]);

  const toggleSideMenu = () => {
    setSideMenuOpened(!sideMenuOpened);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(entry);
      });
    });
    console.log("reload", observerRef);
  
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
      <header 
        className={`fixed bg-[var(--navbar-bg)] top-0 left-0 z-50 w-full h-20 text-[var(--navbar-text)] backdrop-blur-[12.8px] transition-all duration-500 ease-out ${
          isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-center h-full">
          <div className="h-20 flex w-full items-center justify-between">
            {/* Catalog */}
            <div className="flex justify-center px-5 lg:flex-none">
              <Link href="/catalog" className="flex items-center">
                  <CatalogIcon />
              </Link>
            </div>


            {/* Left Navigation - Desktop */}
            <nav className="ml-5 max-[60rem]:hidden flex items-center gap-4">
            {navigationItems.map((item, index) => (
              <Link 
                href={item.href} 
                key={index}
                className="flex flex-nowrap items-center transition-colors duration-500 hover:text-[var(--navbar-text-hover)] font-medium"
              >
                <p className='flex flex-nowrap whitespace-nowrap'>{item.label}</p>
                <ChevronDownIcon className='text-white'/>
              </Link>
            ))}
          </nav>

            {/* Center Logo */}
            <div className="flex justify-center w-full mx-3">
              <Link href="/" className="flex items-center">
                <h1 className='text-4xl max-sm:text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent'>
                  {process.env.NEXT_PUBLIC_COMPANY_NAME || 'AXONISIUM'}
                </h1>
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex px-4 items-center justify-end flex-1 gap-6">
              {/* Theme Switcher - Desktop */}
              <div className="hidden min-[60rem]:flex">
                <ThemeSwitcher />
              </div>

              {/* Hamburger Menu - Mobile */}
              <div 
                className="flex px-4 cursor-pointer min-[60rem]:hidden"
                onClick={toggleSideMenu}
              >
                {sideMenuOpened ? null : (
                <div className='flex flex-nowrap'>
                  <span className='pr-2 text-[var(--navbar-text)] hover:text-[var(--navbar-text-hover)]'>Меню</span> <Menu size={24} />
                </div>
                )
                }
                
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Side Menu */}
        {sideMenuOpened && (
          <>
            {/* Overlay */}
            <div 
              className="inset-0 bg-[var(--navbar-bg)] z-11 lg:hidden"
              onClick={toggleSideMenu}
            />
            
            {/* Side Menu */}
            <div className="fixed top-5 right-0 h-full w-70 bg-transparent shadow-xl z-10 transform transition-transform duration-500 ease-in-out lg:hidden">
              <div className=" h-full flex flex-col">
                
                {/* Header and Close Button */}
                <div className="flex justify-end items-center mb-5">
                  <button 
                    onClick={toggleSideMenu}
                    className="p-2 hover:bg-[var(--bg-muted)] rounded-lg transition-colors"
                  >
                    <X size={24} className="text-[var(--text-primary)]" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className=" flex flex-col space-y-2 flex-1 bg-[var(--navbar-bg)]">
                  {
                  navigationItems.map((item, index) => (
                    <Link 
                      key={index}
                      href={item.href} 
                      className="py-4 px-4 text-[var(--navbar-text)] hover:bg-[var(--bg-muted)] rounded-lg transition-colors font-medium"
                      onClick={toggleSideMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Theme Switcher in Mobile Menu */}
                <div className="rounded-bl-xl border-t border-[var(--border-primary)] bg-[var(--navbar-bg)]">
                  <div className="flex items-center justify-between mr-2">
                    <span className="py-4 px-4 text-[var(--text-primary)] rounded-lg transition-colors font-medium">Тема</span>
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
  );
};

export default UpNavBar;



