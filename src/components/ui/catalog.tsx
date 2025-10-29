import { Square } from "lucide-react"
import React from "react"

export const CatalogIcon: React.FC<{className: string}> = ({className}) => {
    return (
        <div className={`flex flex-nowrap `+className}>
            <div className="flex flex-col  justify-center">
                <div className="flex">
                    <Square className='w-3 h-3 text-white fill-blue-500'/>
                    <Square className='w-3 h-3 text-white fill-blue-500'/>
                </div>
                <div className="flex">
                    <Square className='w-3 h-3 text-white fill-blue-500'/>
                    <Square className='w-3 h-3 text-white fill-blue-500'/>
                </div>
            </div>
            <h1 className="pl-5 text-xl max-sm:text-sm">Каталог</h1>
        </div>
    )
}