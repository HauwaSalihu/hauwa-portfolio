import Image from "next/image";
import myImage from "../../public/pexels-mikhail-nilov-6894103.jpg";
export default function Home() {
  return (
    <section className="relative flex justify-center items-center h-screen">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <Image
        src={myImage}
        className="object-cover w-full h-full"
        alt="my image"
      />
      <div className="absolute text-center z-20 space-y-6">
        <h1 className="text-5xl text-white font-bold w-[15rem] tracking-widest">
          HI, I AM HAUWA SALIHU
        </h1>
        <p className="text-white uppercase tracking-widest font-medium">
          A Software Engineer
        </p>
        <button className="bg-black text-white p-4 rounded">
          Download Resume
        </button>
      </div>
    </section>
  );
}
