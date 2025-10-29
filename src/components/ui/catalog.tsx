import { Square } from "lucide-react"
import React from "react"

export const CatalogIcon: React.FC<{className?: string}> = ({className}) => {
    return (
        <div className={`flex flex-nowrap boder-[10px] rounded-full border-amber-900 `+className}>
            <div className="flex flex-col  justify-center">
                <div className="flex">
                    <Square className='w-3 h-3 text-[var(--navbar-catalog-color-square)] hover:fill-[var(--navbar-catalog-fill-color-square-hover)] duration-500'/>
                    <Square className='w-3 h-3 text-[var(--navbar-catalog-color-square)] hover:fill-[var(--navbar-catalog-fill-color-square-hover)] duration-500'/>
                </div>
                <div className="flex">
                    <Square className='w-3 h-3 text-[var(--navbar-catalog-color-square)] hover:fill-[var(--navbar-catalog-fill-color-square-hover)] duration-500'/>
                    <Square className='w-3 h-3 text-[var(--navbar-catalog-color-square)] hover:fill-[var(--navbar-catalog-fill-color-square-hover)] duration-500'/>
                </div>
            </div>
            <h1 className="ml-2 text-[var(--text-foreground)] text-xl flex hover:text-[var(--navbar-catalog-fill-color-square-hover)] duration-500">Каталог</h1>
        </div>
    )
}