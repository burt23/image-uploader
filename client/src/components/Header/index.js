import SearchInput from "../SearchInput";
import UploadImage from "../UploadImage";

const Header = ({ refetch }) => (
  <header className="header">
    <div className="flexRow">
      <SearchInput />
      <UploadImage refetch={refetch} />
    </div>
  </header>
);

export default Header;
