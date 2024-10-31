
import { FaHome, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { MdExplore } from "react-icons/md";
const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white shadow-md py-2 sm:py-4 flex justify-around items-center text-green-500">
         <p className='flex flex-row border-2 border-green-600 pr-[10px] rounded-[20px] cursor-[pointer] '>
      <MdExplore className=' text-xl sm:text-2xl cursor-pointer w-[50px] bg-green rounded-[10px] h-[30px]'  />
    EXPLORE</p>
      <FaHome className="text-xl sm:text-2xl cursor-pointer" />
      <FaHeart className="text-xl sm:text-2xl cursor-pointer" />
      <FaShoppingCart className="text-xl sm:text-2xl cursor-pointer" />
      <FaUser className="text-xl sm:text-2xl cursor-pointer" />
    
    </div>
  );
}

export default Footer;
