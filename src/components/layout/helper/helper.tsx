import { BadgeHelpIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";



const Helper = () => {
    const [helperIsOpen, setHelperIsOpen] = useState(false);


    return (
        <>
            <div className="fixed bottom-5 right-5">
                <button
                    className={
                        `p-3 rounded-[5px] bg-transparent 
                        text-white shadow-lg ${helperIsOpen ? "outline-none ring-2 ring-blue-500 ring-offset-[0.1px]":""}`
                    }
                    aria-label="Help"
                    onClick={() => setHelperIsOpen(!helperIsOpen)}
                >
                    <BadgeHelpIcon className="h-10 w-10 text-[var(--foreground)]" />
                </button>  
            </div>
            {helperIsOpen && ( 
                <div className="fixed bottom-24 right-5 w-80 p-4 bg-[var(--background)] border border-white/10 rounded-lg shadow-lg z-50">
                    <h3 className="text-lg font-semibold mb-2">Нужна помощь?</h3>
                    <p className="text-sm mb-4">
                        Если у вас есть вопросы или хотите проконсультироваться с представителем, перейдите на страницу FAQ.
                    </p>
                    <div className="flex gap-4">
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={() => setHelperIsOpen(false)}
                        >
                            Закрыть
                        </button>
                        <Link
                            href='/faq'
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={() => setHelperIsOpen(false)}
                        >
                            Перейти
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
    
}
export default Helper;