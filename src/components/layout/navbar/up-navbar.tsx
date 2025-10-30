'use client';

import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';
import { ChevronDownIcon, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { CatalogIcon } from '@/components/ui/catalog';

const UpNavBar = () => {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [fixedDropdown, setFixedDropdown] = useState<number | null>(null);
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
        { href: '/analytics', label: 'Аналитика данных' },
        { href: '/api', label: 'API для разработчиков' },
        { href: '/integrations', label: 'Интеграции' }
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
        { href: '/team', label: 'Команда' },
        { href: '/careers', label: 'Карьера' },
        { href: '/contacts', label: 'Контакты' }
      ]
    },
  ];
  
  // Обновите useEffect для закрытия при клике вне области:
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let clickedInsideDropdown = false;
      
      // Проверяем все dropdownRefs
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
  };


  // Обработчик наведения - с задержкой
  const handleDropdownEnter = (index: number) => {
    // Если dropdown зафиксирован, не меняем состояние при наведении
    if (fixedDropdown !== null) return;
    
    // Очищаем предыдущий таймаут
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }

    // Устанавливаем новый таймаут с задержкой 200ms
    const timeout = setTimeout(() => {
      setActiveDropdown(index);
    }, 200);

    setDropdownTimeout(timeout);
  };

  // Обработчик ухода мыши - с задержкой
  const handleDropdownLeave = () => {
    // Если dropdown зафиксирован, не скрываем при уходе мыши
    if (fixedDropdown !== null) return;
    
    // Очищаем таймаут при уходе мыши
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    
    // Устанавливаем задержку перед скрытием
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // Даем время чтобы переместить курсор на dropdown
    
    setDropdownTimeout(timeout);
  };

  // Обработчик клика для фиксации dropdown
  const handleDropdownClick = (index: number) => {
    if (fixedDropdown === index) {
      // Если кликаем на уже зафиксированный dropdown - снимаем фиксацию
      setFixedDropdown(null);
      setActiveDropdown(null);
    } else {
      // Фиксируем новый dropdown
      setFixedDropdown(index);
      setActiveDropdown(index);
    }
  };

  // Обработчик клика по опции в dropdown
  const handleOptionClick = () => {
    setFixedDropdown(null);
    setActiveDropdown(null);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  // Очищаем таймаут при размонтировании
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  // Функция для установки ref без возвращаемого значения
  const setDropdownRef = (index: number) => (el: HTMLDivElement | null) => {
    dropdownRefs.current[index] = el;
  };

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
                      e.preventDefault(); // Предотвращаем переход по ссылке
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
                      onMouseEnter={() => handleDropdownEnter(index)} // Поддерживаем открытым при наведении на dropdown
                      onMouseLeave={handleDropdownLeave} // Закрываем при уходе (если не зафиксирован)
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
                <h1 className='text-4xl max-sm:text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent'>
                  {process.env.NEXT_PUBLIC_COMPANY_NAME || 'AXONISIUM'}
                </h1>
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex px-2 items-center justify-end flex-1 gap-6">
              {/* Theme Switcher - Desktop */}
              <div className="hidden min-[60rem]:flex">
                <ThemeSwitcher />
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
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={toggleSideMenu}
            />
            
            {/* Side Menu */}
            <div className="fixed top-0 right-0 h-full w-70 bg-[var(--navbar-bg)] shadow-xl z-50 transform transition-transform duration-500 ease-in-out lg:hidden">
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
                <nav className="flex flex-col space-y-2 flex-1 px-4">
                  {navigationItems.map((item, index) => (
                    <div key={index} className="border-b border-[var(--border-primary)] pb-2">
                      <Link 
                        href={item.href}
                        className="block py-4 text-[var(--navbar-text)] hover:text-[var(--navbar-text-hover)] transition-colors font-medium"
                        onClick={toggleSideMenu}
                      >
                        {item.label}
                      </Link>
                      {/* Mobile dropdown options */}
                      <div className="pl-4 space-y-2">
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
                  ))}
                </nav>

                {/* Theme Switcher in Mobile Menu */}
                <div className="border-t border-[var(--border-primary)] bg-[var(--navbar-bg)] p-4">
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