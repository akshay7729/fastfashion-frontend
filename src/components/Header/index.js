import SearchBox from "./Searchbox";
import RightMenu from "./RightMenu";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto px-6 py-4 text-white">
      <div className="flex items-center justify-between">
        <Logo />
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
