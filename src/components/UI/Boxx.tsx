
// import { IoFastFood } from "react-icons/io5";
// import { MdEmojiFoodBeverage } from "react-icons/md";
// import { BiSolidOffer } from "react-icons/bi";
// import { GrTerminal } from "react-icons/gr";

// const Boxx = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-6 mt-8 md:mt-12 md:justify-start md:ml-[500px]">
//       {/* Food Box */}
//       <div className="flex flex-col items-center justify-center w-24 h-20 bg-green-100 rounded-xl">
//         <IoFastFood className="text-green-600 w-14 h-14" />
//         <div className="text-sm mt-2 cursor-pointer">food</div>
//       </div>
      
//       {/* Beverage Box */}
//       <div className="flex flex-col items-center justify-center w-24 h-20 bg-green-100 rounded-xl">
//         <MdEmojiFoodBeverage className="text-green-600 w-14 h-14" />
//         <div className="text-sm mt-2 cursor-pointer">beverage</div>
//       </div>
      
//       {/* Offers Box */}
//       <div className="flex flex-col items-center justify-center w-24 h-20 bg-green-100 rounded-xl">
//         <BiSolidOffer className="text-green-600 w-14 h-14" />
//         <div className="text-sm mt-2 cursor-pointer">offers</div>
//       </div>
      
//       {/* Others Box */}
//       <div className="flex flex-col items-center justify-center w-24 h-20 bg-green-100 rounded-xl">
//         <GrTerminal className="text-green-600 w-14 h-14" />
//         <div className="text-sm mt-2 cursor-pointer">others</div>
//       </div>
//     </div>
//   );
// }

// export default Boxx;
import { IoFastFood } from "react-icons/io5";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { GrTerminal } from "react-icons/gr";

const Boxx = () => {
  return (
    <div className="flex justify-center gap-4 mt-8 md:mt-12 overflow-x-auto px-4 sm:px-8 md:px-16">
      {/* Food Box */}
      <div className="flex flex-col items-center justify-center w-20 h-20 bg-green-100 rounded-xl">
        <IoFastFood className="text-green-600 w-12 h-12" />
        <div className="text-sm mt-2 cursor-pointer">food</div>
      </div>
      
      {/* Beverage Box */}
      <div className="flex flex-col items-center justify-center w-20 h-20 bg-green-100 rounded-xl">
        <MdEmojiFoodBeverage className="text-green-600 w-12 h-12" />
        <div className="text-sm mt-2 cursor-pointer">beverage</div>
      </div>
      
      {/* Offers Box */}
      <div className="flex flex-col items-center justify-center w-20 h-20 bg-green-100 rounded-xl">
        <BiSolidOffer className="text-green-600 w-12 h-12" />
        <div className="text-sm mt-2 cursor-pointer">offers</div>
      </div>
      
      {/* Others Box */}
      <div className="flex flex-col items-center justify-center w-20 h-20 bg-green-100 rounded-xl">
        <GrTerminal className="text-green-600 w-12 h-12" />
        <div className="text-sm mt-2 cursor-pointer">others</div>
      </div>
    </div>
  );
};

export default Boxx;
