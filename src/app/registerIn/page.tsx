'use client';


import { Eye, EyeClosedIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from "react";



function loginInAxonId() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [login, setLogin] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    
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

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        let errorMessage = 'Пароли не совпадают'

        if ((password1 === password2) && (password1 + password2 != '')) {
            console.log(login.length)
            if (login.length < 4) {
              errorMessage = 'Логин должен быть больше 3 символов!'
              console.log('SMALL LOGIN')
            } else {
              setIsAuthenticated(true)
              setPassword1('')
              setPassword2('')
              
              console.log('REGISTERATION SUCCESS')
              alert("Успешно!")

              router.push('/');
            }
            
        } 
        
        setError(errorMessage)
        
    }


    const handleShowPassword = (id: number) => {
        if (id===1) {setShowPassword1(!showPassword1)} 
        else {setShowPassword2(!showPassword2)}
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

          <form onSubmit={handleRegister} className="space-y-6">
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
            <div className='relative'>
                <input
                    type={showPassword1 ? "text" : "password"}
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    placeholder="Пароль"
                    className="w-full px-4 py-3 bg-[var(--bg-muted)] border border-[var(--border-primary)] rounded-2xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors pr-12"
                    autoFocus
                />
                <div 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    onClick={() => handleShowPassword(1)}
                >
                    {showPassword1 ? <Eye /> : <EyeClosedIcon />}
                </div>
            </div>

            <div className='relative'>
              <input
                type={showPassword2 ? "text" : "password"}
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Повторите пароль"
                className="w-full px-4 py-3 bg-[var(--bg-muted)] border border-[var(--border-primary)] rounded-2xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary transition-colors pr-12"
                autoFocus
              />
              <div 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    onClick={() => handleShowPassword(2)}
                >
                    {showPassword1 ? <Eye /> : <EyeClosedIcon />}
                </div>
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