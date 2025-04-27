"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Card = ({ title, description, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-[374px] h-[543px] rounded-[12px] bg-[#FFFFFF] cursor-pointer transition-shadow duration-300 border overflow-hidden"
    >
      <div className="w-[330px] h-[190px] m-auto mt-[20px] rounded-[24px] relative">
        <Image
          src={image?.src || "/placeholder.png"}
          alt={title || "Card Image"}
          fill
          className="object-cover rounded-[24px]"
        />
      </div>

      <div className="w-[334px] h-[178px] m-auto mt-[100px]">
        <div className="w-full h-[49px] text-center ">
          <h1 className="text-[#19154E] text-[32px] font-bold">{title}</h1>
        </div>
        <div className="w-[334px] h-[127px]">
          <p className="font-plus-jakarta-sans font-[500] font-sans text-[#595959] text-[24px] text-center">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
