import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Explore our news",
  description: "Learn more",
};

function Page() {
  return (
    <section className="container mx-auto p-5">
      <div className="border-b p-5 text-center max-w-full">
        <h1 className="text-4xl font-bold ">ABOUT ME</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
        <div className="flex flex-col justify-center items-center">
          <h5 className="p-5 font-semibold text-lg text-gray-700">
            I am a Software Engineer. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium quidem consequatur, natus ipsum sint
            veritatis.
          </h5>
          <p className="p-5 text-slate-500 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="./pexels-luis-gomes-166706-546819.jpg"
            className="object-cover w-full h-full shadow-lg rounded-lg"
            alt="my image"
          />
        </div>
      </div>
    </section>
  );
}

export default Page;
