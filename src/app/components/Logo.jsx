import Image from "next/image";

const Logoimg = () => {
  return (
    <div className="w-[163px] h-[38px] absolute top-[43px] left-[120px] bg-none cursor-pointer flex items-center justify-start">
      <div className="flex-1 relative h-full">
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-[4]">
        <h1 className="text-base font-medium text-[25px] text-white font-sans">
          forescribe
        </h1>
      </div>
    </div>
  );
};

export default Logoimg;
