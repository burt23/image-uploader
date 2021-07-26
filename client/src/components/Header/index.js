import SearchInput from "../SearchInput";
import UploadImage from "../UploadImage";

const Header = () => (
  <header className="header">
    <div className="flexRow">
      <SearchInput />
      <UploadImage />
    </div>
  </header>
);

export default Header;
