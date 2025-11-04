'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const AUTH_COOKIE_NAME = 'axonisium-auth'
const AUTH_PASSWORD = process.env.NEXT_PUBLIC_AUTH_PASSWORD || 'axon2025'

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const pathname = usePathname()
  const router = useRouter()

  // Проверяем авторизацию при каждом рендере
  const checkAuth = (): boolean => {
    const authCookie = Cookies.get(AUTH_COOKIE_NAME)
    const isValid = authCookie === AUTH_PASSWORD
    
    if (isValid !== isAuthenticated) {
      setIsAuthenticated(isValid)
    }
    
    return isValid
  }

  // Проверяем авторизацию при монтировании и изменении пути
  useEffect(() => {
    checkAuth()
  }, [pathname])

  // Периодическая проверка каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      if (!checkAuth()) {
        // Если авторизация пропала, принудительно обновляем состояние
        setIsAuthenticated(false)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password === AUTH_PASSWORD) {
      // Устанавливаем куку на 3 часа
      Cookies.set(AUTH_COOKIE_NAME, password, { 
        expires: 3 / 24, // 3 часа в днях
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      })
      
      setIsAuthenticated(true)
      setPassword('')
      
      // Обновляем страницу для применения авторизации
      router.refresh()
    } else {
      setError('Неверный пароль')
    }
  }

  const handleLogout = () => {
    Cookies.remove(AUTH_COOKIE_NAME)
    setIsAuthenticated(false)
    router.refresh()
  }

  // Если еще проверяем авторизацию, показываем лоадер
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)]">Проверка доступа...</p>
        </div>
      </div>
    )
  }

  // Если не авторизован, показываем форму входа
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[var(--bg-card)]/60 rounded-3xl p-8 border border-[var(--border-primary)] shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Axonisium
            </h1>
            <p className="text-[var(--text-secondary)]">
              Введите пароль для доступа к сайту
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                className="w-full px-4 py-3 bg-[var(--bg-muted)] border border-[var(--border-primary)] rounded-2xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors"
                autoFocus
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-amber-500 hover:from-primary-hover hover:to-secondary text-[var(--text-primary)] py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Войти
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[var(--text-muted)]">
              Пароль предоставляется командой Axonisium
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Если авторизован, показываем детей и кнопку выхода
  return (
    <div className="relative">
      {/* Кнопка выхода в углу */}
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 z-50 bg-[var(--bg-card)] hover:bg-[var(--bg-muted)] border border-[var(--border-primary)] hover:border-[var(--primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
        title="Выйти"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </button>

      {children}
    </div>
  )
}