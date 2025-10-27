import { BadgeHelpIcon } from "lucide-react";
import { useState } from "react";



const Helper = () => {
    const [helperIsOpen, setHelperIsOpen] = useState(false);


    return (
        <>
            <div className="fixed bottom-12 right-12">
                <button
                    className="p-3 rounded-[5px] bg-transparent text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Help"
                    onClick={() => setHelperIsOpen(!helperIsOpen)}
                >
                    <BadgeHelpIcon className="h-10 w-10 text-[var(--foreground)]" />
                </button>  
            </div>
            {helperIsOpen && ( 
                <div className="fixed bottom-24 right-12 w-80 p-4 bg-[var(--background)] border border-white/10 rounded-lg shadow-lg z-50">
                    <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                    <p className="text-sm mb-4">
                        If you have any questions or need assistance, feel free to reach out to our support team or check our FAQ section.
                    </p>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => setHelperIsOpen(false)}
                    >
                        Close
                    </button>
                </div>
            )}
        </>
    );
    
}
export default Helper;