import Image from "next/image";
const Banner2 = () => {
  return (
    <div className="flex">
      <div className="flex-1 h-[650px]">
        <div className="w-[75%] p-4">
          <Image
            className="text-white"
            src="/img/armani.png"
            alt="Nike Icon"
            width={500}
            height={500}
          />
          <div className="p-6">
            <p className="text-4xl mt-2">Era Timepieces</p> <br />
            <p className="mt-2">
              This robust and sturdy men's chronograph Mario watch from the
              House of Emporio Armani. This watch showcases an insanely detailed
              black sunray dial with rose gold-tone stick indexes and
              chronograph movement. A bold black case and a matching black
              ceramic bracelet to complete the look. This chronograph watch is
              perfect for any formal or casual event.
            </p>
            <button className="border px-12 hover:px-14 py-2 cursor-pointer bg-black mt-12 rounded-md text-white ease-in duration-300">
              Shop More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-[calc(50%_-_250px)]">
        <Image
          className="text-white"
          src="/img/18.png"
          alt="Nike Icon"
          width={500}
          height={500}
        />
      </div>
      <div className="flex-1 h-[650px] bg-black">3</div>
    </div>
  );
};

export default Banner2;
