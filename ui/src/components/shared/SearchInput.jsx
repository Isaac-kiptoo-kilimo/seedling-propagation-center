import { IoMdCloseCircle } from "react-icons/io";
import Container from "./SearchInputCSS";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchInput = ({onClose}) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();


  const { authenticatedUser: user } = useSelector((store) => store.userProfile);


  const handleSearch = () => {
    if (!query.trim()) return;
    onClose();
    navigate(`/shop/products?search=${encodeURIComponent(query.trim())}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <Container>
      <div className="search-input-overlay"
      style={
        {
          top: user  ? "12%" : "18%",
        }
      }
      >
        <form className="search--input">
          <div className="search--input-icons">
          <input type="search"
           placeholder="search..." value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}/>
            <FaSearch className="search--icon" onClick={handleSearch} />
          </div>
          <button className="close-btn" onClick={onClose}>
            <IoMdCloseCircle className="close--icon" size={40}/>
          </button>
        </form>
      </div>
    </Container>
  );
};

export default SearchInput;
