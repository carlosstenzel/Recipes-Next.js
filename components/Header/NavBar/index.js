import Logo from "../Logo";
import { Search } from "../Search";

export const NavBar = () => (
  <header>
    <div className="navbar bg-gray-1 shadow-sm">
      <div className="container">
        <Logo />
        <Search />
      </div>
    </div>
  </header>
);
