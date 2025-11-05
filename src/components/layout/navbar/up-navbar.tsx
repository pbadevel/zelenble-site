'use client';

import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';
import { ChevronDownIcon, ChevronRight, Menu, UserLockIcon, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { CatalogIcon } from '@/components/ui/catalog';

const UpNavBar = () => {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [fixedDropdown, setFixedDropdown] = useState<number | null>(null);
  const [mobileOpenItems, setMobileOpenItems] = useState<number[]>([]);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const navigationItems = [
    { 
      href: '#devices', 
      label: 'Устройства',
      options: [
        { href: '/neuro-headset', label: 'Нейрогарнитура' },
        { href: '/bci-sensor', label: 'BCI сенсор' },
        { href: '/mobile-app', label: 'Мобильное приложение' }
      ]
    },
    { 
      href: '#platform', 
      label: 'Платформа',
      options: [
        { href: '/platform', label: 'О платформе' },
        { href: '/services', label: 'Сервисы' },
        { href: '/security', label: 'Безопасность' }
      ]
    },
    { 
      href: '#medicine', 
      label: 'Для врачей',
      options: [
        { href: '/diagnostics', label: 'Диагностика' },
        { href: '/rehabilitation', label: 'Реабилитация' },
        { href: '/research', label: 'Исследования' }
      ]
    },
    { 
      href: '#about', 
      label: 'О нас',
      options: [
        { href: '/company', label: 'Компания' },
        { href: '/comments', label: 'Отзывы' },
        { href: '/vacancy', label: 'Вакансии' },
        { href: '/comments', label: 'FAQ' },
      ]
    },
  ];

  // Закрытие dropdown при клике вне области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let clickedInsideDropdown = false;
      
      dropdownRefs.current.forEach(ref => {
        if (ref?.contains(event.target as Node)) {
          clickedInsideDropdown = true;
        }
      });

      if (!clickedInsideDropdown) {
        setActiveDropdown(null);
        setFixedDropdown(null);
        if (dropdownTimeout) {
          clearTimeout(dropdownTimeout);
          setDropdownTimeout(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown, fixedDropdown, dropdownTimeout]);

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
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

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
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [lastScrollY]);

  const toggleSideMenu = () => {
    setSideMenuOpened(!sideMenuOpened);
    setMobileOpenItems([]); // Сбрасываем открытые пункты при закрытии меню
  };

  const handleDropdownEnter = (index: number) => {
    if (fixedDropdown !== null) return;
    
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }

    const timeout = setTimeout(() => {
      setActiveDropdown(index);
    }, 200);

    setDropdownTimeout(timeout);
  };

  const handleDropdownLeave = () => {
    if (fixedDropdown !== null) return;
    
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    
    setDropdownTimeout(timeout);
  };

  const handleDropdownClick = (index: number) => {
    if (fixedDropdown === index) {
      setFixedDropdown(null);
      setActiveDropdown(null);
    } else {
      setFixedDropdown(index);
      setActiveDropdown(index);
    }
  };

  const handleOptionClick = () => {
    setFixedDropdown(null);
    setActiveDropdown(null);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const toggleMobileItem = (index: number) => {
    setMobileOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  // Функция для установки ref без возвращаемого значения
  const setDropdownRef = (index: number) => (el: HTMLDivElement | null) => {
    dropdownRefs.current[index] = el;
  };

  // Очищаем таймаут при размонтировании
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  return (
      <header 
        className={`fixed bg-[var(--navbar-bg)] top-0 left-0 z-50 w-full h-20 text-[var(--navbar-text)] backdrop-blur-[12.8px] transition-all duration-500 ease-out ${
          isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-center h-full">
          <div className="h-20 flex w-full items-center justify-between">
            {/* Catalog */}
            <div className="flex justify-center px-2 lg:flex-none">
              <Link href="/catalog" className="flex items-center">
                  <CatalogIcon />
              </Link>
            </div>

            {/* Left Navigation - Desktop */}
            <nav className="ml-5 max-[60rem]:hidden flex items-center gap-4">
              {navigationItems.map((item, index) => (
                <div 
                  key={index}
                  ref={setDropdownRef(index)}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(index)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link 
                    href={item.href}
                    className="flex items-center transition-colors duration-500 hover:text-[var(--navbar-text-hover)] font-medium gap-1 py-2 px-3 rounded-lg hover:bg-[var(--bg-muted)]"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDropdownClick(index);
                    }}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    <ChevronDownIcon 
                      className={`text-[var(--navbar-text)] duration-500 hover:text-[var(--navbar-text-hover)] w-4 h-4 transition-transform ${
                        activeDropdown === index ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  {(activeDropdown === index || fixedDropdown === index) && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-56 bg-[var(--navbar-bg)] border border-[var(--border-primary)] rounded-lg shadow-lg backdrop-blur-[12.8px] z-50 animate-in fade-in-0 zoom-in-95"
                      onMouseEnter={() => handleDropdownEnter(index)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="py-2">
                        {item.options.map((option, optionIndex) => (
                          <Link
                            key={optionIndex}
                            href={option.href}
                            className="block px-4 py-2 text-sm transition-colors duration-300 hover:bg-[var(--bg-muted)] hover:text-[var(--navbar-text-hover)]"
                            onClick={handleOptionClick}
                          >
                            {option.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Center Logo */}
            <div className="flex justify-center w-full mx-3">
              <Link href="/" className="flex items-center">
                <h1 className='text-4xl max-lg:text-2xl max-sm:text-xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent'>
                  {process.env.NEXT_PUBLIC_COMPANY_NAME || "AXONISIUM"}
                </h1>
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex px-2 items-center justify-end flex-1 gap-6">
              {/* Theme Switcher - Desktop */}
              <div className="hidden min-[60rem]:flex">
                <ThemeSwitcher />
              </div>

               <div className="hidden min-[60rem]:flex">
                <Link href="/loginIn" className='flex flex-col p-1'>
                <UserLockIcon className='w-full'/>
                <p className="flex text-primary whitespace-nowrap">AXON ID</p>
                </Link>
              </div>

              {/* Hamburger Menu - Mobile */}
              <div 
                className="flex cursor-pointer min-[60rem]:hidden"
                onClick={toggleSideMenu}
              >
                {!sideMenuOpened && (
                  <div className='flex flex-nowrap'>
                    <span className='pr-2 text-[var(--navbar-text)] hover:text-[var(--navbar-text-hover)]'>Меню</span> 
                    <Menu size={24} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Side Menu */}
        {sideMenuOpened && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 z-40 lg:hidden"
              onClick={toggleSideMenu}
            />
            
            {/* Side Menu */}
            <div className="fixed top-0 right-0 h-full w-70 shadow-xl z-50 transform transition-transform duration-500 ease-in-out lg:hidden">
              <div className="h-full flex flex-col">
                {/* Header and Close Button */}
                <div className="flex justify-end items-center p-4">
                  <button 
                    onClick={toggleSideMenu}
                    className="p-2 hover:bg-[var(--bg-muted)] rounded-lg transition-colors"
                  >
                    <X size={24} className="text-[var(--text-primary)]" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex bg-[var(--navbar-mobile-bg)] flex-col space-y-2 flex-1 px-4 mt-2">
                  {navigationItems.map((item, index) => (
                    <div key={index} className="border-b border-[var(--border-primary)]">
                      <div 
                        className="flex items-center  justify-between py-4 text-[var(--navbar-text)] hover:text-[var(--navbar-text-hover)] transition-colors font-medium cursor-pointer"
                        onClick={() => toggleMobileItem(index)}
                      >
                        <span>{item.label}</span>
                        <ChevronDownIcon 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            mobileOpenItems.includes(index) ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </div>
                      
                      {/* Mobile dropdown options */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileOpenItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pl-4 pb-2 space-y-2">
                          {item.options.map((option, optionIndex) => (
                            <Link
                              key={optionIndex}
                              href={option.href}
                              className="block py-2 text-sm text-[var(--navbar-text)] hover:text-[var(--navbar-text-hover)] transition-colors"
                              onClick={toggleSideMenu}
                            >
                              {option.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </nav>

                {/* Theme Switcher in Mobile Menu */}
                <div className="border-t border-[var(--border-primary)] bg-[var(--navbar-mobile-bg)] p-4">
                  <div className="flex items-center justify-between">
                    <Link href="/loginIn" className='w-full flex items-center justify-between'>
                    <UserLockIcon/>
                    <div className="flex">
                      <p className="flex text-primary whitespace-nowrap">AXON ID</p>
                      <ChevronRight className='ml-3' />
                    </div>
                    </Link>
                  </div>
                </div>
                <div className="border-t border-[var(--border-primary)] bg-[var(--navbar-mobile-bg)] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-primary)] font-medium">Тема</span>
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