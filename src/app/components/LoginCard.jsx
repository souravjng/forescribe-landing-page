"use client"; 

import Image from "next/image";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";
import { motion } from "framer-motion";

const LoginCard = () => {
  return (
    <div className="w-[459px] h-[368px] backdrop-blur-lg  rounded-[12px] opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-6">
      
      <div className="text-center mb-6">
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={29}
          height={29}
          className="object-contain"
        />
      </div>
      
      <h1 className="text-white text-2xl font-semibold mb-6">
        Welcome to ForeScribe
      </h1>

      <div className="flex flex-col gap-4 mb-4">
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ stiffness: 300 }}
          className="w-[319px] h-[43px] bg-[#8B3DFF] hover:bg-[#6a2bc6] rounded-md flex items-center justify-center gap-2 text-white cursor-pointer transition"
        >
          <FaGoogle size={22} color="white" />
          Continue with Google
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ stiffness: 300 }}
          className="w-[319px] h-[43px] bg-[#4A4A4A] hover:bg-[#434242] rounded-md flex items-center justify-center gap-2 text-white cursor-pointer transition"
        >
          <FaMicrosoft size={22} color="white" />
          Continue with Microsoft
        </motion.button>

      </div>

      <p className="text-[13px] text-center text-white font-poppins">
        By clicking “Continue with Google/Microsoft” above, you acknowledge that you have read and understood, and agree to Forescribe's{" "}
        <span className="text-blue-500 underline cursor-pointer">Terms & Conditions</span> and{" "}
        <span className="text-blue-500 underline cursor-pointer">Privacy Policy</span>.
      </p>
      
    </div>
  );
};

export default LoginCard;
