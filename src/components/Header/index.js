import SearchBox from "./Search";
import RightMenu from "./RightMenu";
import Logo from "./Logo";

const Navbar = ({ nav }) => {
  return (
    <nav className="relative mx-auto px-6 py-4 text-white">
      <div className="flex items-center justify-between">
        <Logo size="35px" color="black" />
        <div className="hidden md:flex">
          <SearchBox search={nav} />
        </div>
        <div className="hidden md:flex">
          <RightMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
