import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import './Nav.css';
import Sidebar from "./Sidebar/Sidebar";

function Nav({handleInputChange,clearallf,categoryChange, ColorChange, PriceChange,selectedCategory,selectedColor,selectedPrice}) {
  return (
    <>
    <div className="nav-bar">
      <div className="sideshow">
      <Sidebar clearallf={clearallf} selectedCategory={selectedCategory} selectedColor={selectedColor} selectedPrice={selectedPrice}  categoryChange={categoryChange} ColorChange={ColorChange} PriceChange={PriceChange}/>
      </div>
      <div className="search-box">
          <input onChange={handleInputChange} type="search" placeholder='Search' className='search-bar' />
      </div>
      <div className="icon-container">
        
        <a href=""><FiHeart className="Nav-icons"/></a> 

        <a href=""><AiOutlineShoppingCart className="Nav-icons"/></a>

        <a href=""><AiOutlineUserAdd className="Nav-icons"/></a>

      </div>
      
    </div>
     
    </>

  );
};
export default Nav;
