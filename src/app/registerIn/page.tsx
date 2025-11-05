'use client';


import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from "react";



function loginInAxonId() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const pathname = usePathname();
    const router = useRouter();

    // Проверяем авторизацию при каждом рендере
    const checkAuth = (): boolean => {
        // const authCookie = Cookies.get(AUTH_COOKIE_NAME)
        const isValid = true
        
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

        if (password ) {
        // Устанавливаем куку на 3 часа
        // Cookies.set(AUTH_COOKIE_NAME, password, { 
        //     expires: 3 / 24, // 3 часа в днях
        //     secure: process.env.NODE_ENV === 'production',
        //     sameSite: 'strict'
        // })
        
        setIsAuthenticated(true)
        setPassword('')
        
        // Обновляем страницу для применения авторизации
        router.refresh();
        } else {
        setError('Неверный пароль')
        }
    }

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[var(--bg-card)]/60 rounded-3xl p-8 border border-[var(--border-primary)] shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light bg-gradient-to-r from-primary to-accent bg-clip-text mb-2">
              AXON ID
            </h1>
            <p className="text-[var(--text-secondary)]">
              Уникальная учетная запись для всех наших сервисов!
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Логин"
                className="w-full px-4 py-3 bg-[var(--bg-muted)] border border-[var(--border-primary)] rounded-2xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors"
                autoFocus
              />
            </div>
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
              Уже есть учетная запись? <Link href="/loginIn" className='underline'>Войти</Link>
            </p>
          </div>
        </div>
      </div>
    )
}

export default loginInAxonId;