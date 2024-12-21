// import { useState, useEffect } from "react";

// import Loader from "./Loader";
// import HeroPage from "./components/HeroPage";
// import Roller from "./component_part2/Roller";
// import Define from "./component_part3/Define";
// import AllAccordian from "./AllAccordian";
// import Page_4 from "./Page_4";

// function App() {
//   const [isLoading, setIsLoading] = useState(true); // Track whether the loader is active

//   useEffect(() => {
//     // Set timer for loader duration (e.g., 9 seconds based on the Loader animation)
//     const timer = setTimeout(() => {
//       setIsLoading(false); // Stop the loader after the animation is done
//     }, 4000); // Adjust the duration to match the loader animation length

//     return () => clearTimeout(timer); // Cleanup timer
//   }, []);

//   // Render the loader if still loading
//   if (isLoading) {
//     return <Loader />;
//   }

//   // Render the rest of the app after the loader
//   return (
//     <>
//       <HeroPage />
//       <Roller />
//       <Define />
//       <AllAccordian />
//       <Page_4 />
//     </>
//   );
// }

// export default App;



// import { useState } from "react";

// import Loader from "./Loader";
// import HeroPage from "./components/HeroPage";
// import Roller from "./component_part2/Roller";
// import Define from "./component_part3/Define";
// import AllAccordian from "./AllAccordian";
// import Page_4 from "./Page_4";

// function App() {
//   const [isLoading, setIsLoading] = useState(true); // Track whether the loader is active

//   const handleAnimationEnd = () => {
//     setIsLoading(false); // Stop showing the loader after the exit animation
//   };

//   // Render the loader if still loading
//   if (isLoading) {
//     return <Loader onAnimationEnd={handleAnimationEnd} />;
//   }

//   // Render the rest of the app after the loader
//   return (
//     <>
//       <HeroPage />
//       <Roller />
//       <Define />
//       <AllAccordian />
//       <Page_4 />
//     </>
//   );
// }

// export default App;



import { useState} from "react";

import Loader from "./Loader";
import HeroPage from "./components/HeroPage";
import Roller from "./component_part2/Roller";
import Define from "./component_part3/Define";
import AllAccordian from "./AllAccordian";
import Page_4 from "./Page_4";
import Footer from "./Footer";

function App() {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  const handleAnimationEnd = () => {
    setIsLoaderVisible(false); // Remove the loader from the DOM after the animation
  };

  return (
    <div >
      {/* Main Content */}
      <div className={`${isLoaderVisible ? "opacity-100" : "opacity-100"} transition-opacity duration-1000`}>
        <HeroPage />
        <Roller />
        <Define />
        <AllAccordian />
        <Page_4 />
        <Footer/>
      </div>

      {/* Loader */}
      {isLoaderVisible && <Loader onAnimationEnd={handleAnimationEnd} />}
    </div>
  );
}

export default App;
