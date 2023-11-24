import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-600">𝓓𝓻𝓮𝓪𝓶</span>
            <span className="text-slate-800">𝓛𝓪𝓷𝓭</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              𝙃𝙤𝙢𝙚
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              𝘼𝙗𝙤𝙪𝙩
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-slate-700 hover:underline">𝙎𝙞𝙜𝙣 𝙞𝙣</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
