import SearchInput from "../SearchInput";
import UploadImage from "../UploadImage";

const Header = ({ refetch, setImages }) => (
  <header className="header">
    <div className="flexRow">
      <SearchInput setImages={setImages} />
      <UploadImage refetch={refetch} />
    </div>
  </header>
);

export default Header;
