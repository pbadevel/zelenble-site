'use client';

import { SocialLink } from "@/components/ui/social-media-link";
import { useState } from "react"
import { footerColumns as columns, socialLinks } from "@/lib/footer-data";

export const Footer = () => {
  const [language, setLanguage] = useState("RU")


  return (
    <footer className="bg-card-footer border-t border-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Основная часть футера */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Логотип и описание */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-semibold text-primary">{process.env.NEXT_PUBLIC_COMPANY_NAME ?? "AXONISIUM"}</span>
            </div>
            <p className="text-secondary text-sm leading-relaxed max-w-md">
              Экосистема персонализированного здоровья. Современные технологии 
              для вашего благополучия и медицинского мониторинга.
            </p>
          </div>
         <div className="border-t border-text-secondary my-4 md:hidden"></div>


          {/* Колонки с ссылками */}
          {columns.map((column, index) => (
            <div key={index} className="lg:col-span-1">
              <nav className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="block text-secondary hover:text-primary hover:underline transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
             <div className="lg:hidden border-t border-text-secondary my-4"></div>

            </div>
          ))}
        </div>

        {/* Разделитель */}
        <div className="border-t border-text-secondary my-4 max-lg:hidden"></div>

        {/* Нижняя часть */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Контакты и соцсети */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            {/* Контакты */}
            <div className="text-center sm:text-left">
              <div className="text-secondary text-sm mb-1">Свяжитесь с нами</div>
              <a 
                href={`mailto:info@${process.env.NEXT_PUBLIC_COMPANY_NAME ?? "AXONISIUM"}.com`} 
                className="text-primary hover:text-primary-hover transition-colors text-sm"
              >
                info@{process.env.NEXT_PUBLIC_COMPANY_NAME ?? "AXONISIUM"}.com
              </a>
            </div>

            {/* Соцсети */}
            <div className="max-md:grid flex min-md:mx-3 grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                    <div key={index}>
                    <SocialLink
                        href={social.url}
                        name={social.name}
                        icon="↗"
                    />
                    </div>
                ))}
                </div>
          </div>

          {/* Язык и копирайт */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            {/* Смена языка */}
            <div className="relative">
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-muted border border-custom-secondary rounded-lg pr-6 pl-3 py-2 text-sm text-secondary appearance-none cursor-pointer focus:outline-none focus:border-accent"
              >
                <option value="RU">🇷🇺 Русский</option>
                <option value="EN">🇺🇸 English</option>
                <option value="DE">🇩🇪 Deutsch</option>
                <option value="CN">🇨🇳 中文</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-secondary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Копирайт */}
            <div className="text-center sm:text-right">
              <div className="text-secondary text-sm">
                {process.env.NEXT_PUBLIC_COMPANY_NAME ?? "AXONISIUM"} © 2025. Все права защищены.
              </div>
              <div className="text-muted text-xs mt-1 max-w-xs">
                Все устройства являются медицинскими. Требуется консультация специалиста.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}