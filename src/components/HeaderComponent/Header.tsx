import { Link } from "react-router-dom";
import "./Header.css";

function HeaderComponent() {
  return (
    <header className="app-header flex flex-col h-32 sm:flex-row lg:flex-row sm:h-16 lg:h-16 ">
      <div className="flex">
        <div className="avatar rainbow ">
          <h1 className="text-white text-2xl cursor-pointer font-bold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500  transition-[0.5s]">Movies Masala</h1>
        </div>
      </div>
      <div className="flex items-center flex-row-reverse gap-3 xl:w-[50%]  md:w-[50%] sm:w-[80%] ">
        <div className="w-[10%] h-30 grid gap-1">
          <button className="text-white text-center p-[3px] bg-red-700 active:scale-[90%] active:transition-all rounded-md hover:bg-blue-600  transition-[0.5s] ">
            Search
          </button>
        </div>
        <div className="w-[40%] bg-white h-[100%] p-1 rounded-md  ">
          <input
            className="w-[100%] ps-2 focus:outline-none rounded-md text-black"
            type="text"
            placeholder="Search"
          />
        </div>

        <nav className="flex gap-3 w-[50%] h-[100%] items-center">
          <Link to="/games" className="text-white block w-[20%] text-center links ">
            Games
          </Link>
          <Link
            to="/movies"
            className="text-white block w-[20%] text-center links  "
          >
            Movies
          </Link>
          <Link
            to="/tvShows"
            className="text-white block w-[30%] text-center links "
          >
            Tv Shows
          </Link>
          <Link
            to="/about"
            className="text-white block  w-[20%] text-center links "
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;
