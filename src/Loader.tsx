

// const Loader = () => {
//     return (
//         <>
//             <div className="fixed inset-0 bg-black z-[999] flex items-center justify-center transition-all duration-700 ease-linear">

//                 <h1 className="text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 absolute opacity-0 animate-load">ENVIRONMENTS</h1>
//                 <h1 className="text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 absolute opacity-0 animate-load [animation-delay:1s]">EXPERIENCES</h1>
//                 <h1 className="text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 absolute opacity-0 animate-load [animation-delay:2s]">CONTENT</h1>
//             </div>


//         </>
//     )
// }

// export default Loader



import  { useState, useEffect } from "react";

const Loader = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => {
    const [isExiting, setIsExiting] = useState(false); // Track if the loader is exiting

    useEffect(() => {
        // Start exit animation after 9 seconds (duration of the loader)
        const timer = setTimeout(() => {
            setIsExiting(true);
        }, 3000); // Adjust based on animation timing

        // Call onAnimationEnd when the upward animation completes (e.g., 1s duration)
        const exitTimer = setTimeout(() => {
            onAnimationEnd();
        }, 4000); // 9s loader + 1s exit animation

        return () => {
            clearTimeout(timer);
            clearTimeout(exitTimer);
        };
    }, [onAnimationEnd]);

    return (
        <div
            className={`fixed inset-0 bg-black z-[999] flex items-center justify-center transition-transform duration-1000 ease-linear ${isExiting ? "-translate-y-full" : "translate-y-0"
                }`}
        >
            <h1 className="text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 absolute opacity-0 animate-load">
                ENVIRONMENTS
            </h1>
            <h1 className="text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 absolute opacity-0 animate-load [animation-delay:1s]">
                EXPERIENCES
            </h1>
            <h1 className="text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 absolute opacity-0 animate-load [animation-delay:2s]">
                CONTENT
            </h1>
        </div>
    );
};

export default Loader;
