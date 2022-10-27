import SearchBox from "./Searchbox";
import RightMenu from "./RightMenu";

const Navbar = () => {
  return (
    <nav className="relative container border-b-2 border-indigo-500 mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div>Fast Fashion</div>
        <div className="hidden md:flex">
          <SearchBox />
        </div>
        <div className="hidden md:flex">
          <RightMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
