import Image from "next/image";
import { assets } from "@/assets/assets";

interface AboutProps {
  isDarkMode: boolean;
}

const Footer: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <footer className="mt-20">
      <div className="text-center">
        <Image src={isDarkMode ?  assets.logo_dark: assets.logo } alt="Site Logo" width={200} height={200} className="mx-auto" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6"/>
          hauwasalih1010@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; {new Date().getFullYear()} Hauwa Salihu All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4  sm:mt-0">
          <li><a href="https://github.com/HauwaSalihu" target="_blank">Github</a></li>
          <li><a href="https://linkedin.com/in/hauwa-salih" target="_blank">LinkedIn</a></li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
