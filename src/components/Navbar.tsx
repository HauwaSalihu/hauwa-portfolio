import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white  font-medium text-slate-600 p-8">
      <div className="container mx-auto flex justify-around items-center text-lg">
        <h3 className="text-black font-bold">HPortfolio</h3>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
