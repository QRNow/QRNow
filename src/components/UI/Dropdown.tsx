// import { useState } from 'react';

// const Dropdown: React.FC = () => {
//     const [selectedOption, setSelectedOption] = useState<string>('');
//     const [showBoxes, setShowBoxes] = useState<boolean>(false);

//     const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         const value = event.target.value;
//         setSelectedOption(value);
//         setShowBoxes(value === "Premium Food"); // Show boxes if "Premium Food" is selected
//     };

//     return (
//         <div>
//             <select value={selectedOption} onChange={handleOptionChange}>
//                 <option value="">Select an option</option>
//                 <option value="Premium Food">Premium Food</option>
//                 {/* Add more options here */}
//             </select>

//             {/* Conditional rendering based on showBoxes state */}
//             {showBoxes && (
//                 <div>
//                     {/* Add content to display when "Premium Food" is selected */}
//                   <div className='container bg-white h-[400px] w-[100%] ml-[100px] flex'>
//                     <div className='first container h-[70%] w-[010px] bg-green '>
//                     <div className='second container'>
//                     </div>
//                     </div>
//                   </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dropdown;
import { useState } from 'react';

const Dropdown: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [showBoxes, setShowBoxes] = useState<boolean>(false);

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        setShowBoxes(value === "Premium Food"); // Show boxes if "Premium Food" is selected
    };

    return (
        <div>
            <select value={selectedOption} onChange={handleOptionChange} className="p-2  mt-[50px] cursor-pointer">
                <option value="">Select an option</option>
                <option value="Premium Food">Premium Food</option>
                {/* Add more options here */}
            </select>

            {/* Conditional rendering based on showBoxes state */}
            {showBoxes && (
                // <div className="container bg-black h-[300px] w-full ml-10 flex items-center justify-center    ">
                <div>
                    {/* Main container */}
                    <div className="h-[70%] w-[100%] bg-black-500 flex flex-row gap-[40px] items-center justify-center p-4 rounded-lg     ">
                   
                        {/* First box */}
                        <div className="h-[90%] w-[40%] bg-green-300 rounded-md mb-2 flex items-center justify-center      relative min-w-[200px] h-[170px] md:min-w-[250px] md:h-[200px]   md:gap-[10px]  ">
                            <p className="text-white">Inner Box 1</p>
                          
                        </div>

                        {/* Second box */}
                        <div className="h-[90%] w-[40%] bg-green-700 rounded-md flex items-center justify-center      relative min-w-[200px] h-[170px] md:min-w-[250px] md:h-[200px]  object-cover   ">
                            <p className="text-white">Inner Box 2</p>
                        </div>
                    </div>
                  
                </div>
            )}
        </div>
    );
};

export default Dropdown;
