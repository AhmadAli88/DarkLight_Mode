import React from "react";
import Sun from "../DarkMode/Sun.svg";
import Moon from "../DarkMode/Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    };

    const handleToggle = (event) => {
        if (event.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={handleToggle}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                {/* <img src={Sun} alt="Sun icon" className="sun_icon" /> */}
                <img src={Moon} alt="Moon icon" className="moon_icon" />
            </label>
        </div>
    );
};

export default DarkMode;


//OR
// import React from "react";
// import Sun from "../DarkMode/Sun.svg";
// import Moon from "../DarkMode/Moon.svg";
// import "./DarkMode.css";

// const DarkMode = () => {
//     const setDarkMode = () => {
//         document.body.style.backgroundColor = "#282c34"; // Dark background
//         document.body.style.color = "white"; // Text color for dark mode
//     };

//     const setLightMode = () => {
//         document.body.style.backgroundColor = "white"; // Light background
//         document.body.style.color = "black"; // Text color for light mode
//     };

//     const handleToggle = (event) => {
//         if (event.target.checked) {
//             setDarkMode();
//         } else {
//             setLightMode();
//         }
//     };

//     return (
//         <div className='dark_mode'>
//             <input
//                 className='dark_mode_input'
//                 type='checkbox'
//                 id='darkmode-toggle'
//                 onChange={handleToggle}
//             />
//             <label className='dark_mode_label' htmlFor='darkmode-toggle'>
//                 <img src={Sun} alt="Sun icon" className="sun_icon" />
//                 <img src={Moon} alt="Moon icon" className="moon_icon" />
//             </label>
//         </div>
//     );
// };

// export default DarkMode;

