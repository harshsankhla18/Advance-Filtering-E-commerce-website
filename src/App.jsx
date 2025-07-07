import { useState } from "react";
import data from "./Db/data.js";
import './index.css';
import Nav from './Navigation/Nav.jsx';
import Product from './Product/Product.jsx';
function App() {
 
  //sidebar filters
  const [selectedCategory, setSelectedCategory] = useState([]);
  const categoryChange = (e) => {
    const value = e.target.value;
    if (!selectedCategory.includes(value)) {

      setSelectedCategory([...selectedCategory, value]);
    }
    else {
      const temp = selectedCategory.filter((m) => value !== m);
      setSelectedCategory(temp);
    }

  };

  const [selectedColor, setSelectedColor] = useState([]);
  const ColorChange = (e) => {
    const value = e.target.value;
    if (!selectedColor.includes(value)) {

      setSelectedColor([...selectedColor, value]);
    }
    else {
      const temp = selectedColor.filter((m) => value !== m);
      setSelectedColor(temp);
    }
  };

  const [selectedPrice, setSelectedPrice] = useState([]);

  const PriceChange = (e) => {
    const value = e.target.value;
    if (!selectedPrice.includes(value)) {
      setSelectedPrice([...selectedPrice, value]);
    }
    else {
      const temp = selectedPrice.filter((m) => value !== m);
      setSelectedPrice(temp);
    }


  };
 
  //input search ka filter
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);

  };
   const clearallf=()=>{
    setSelectedCategory([]);
    setSelectedColor([]);
    setSelectedPrice([]);
    setQuery("");
  }
  const filteredItems = data.filter(p => p.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);
  const filtereddata = filteredItems.filter((d) => {
    const checkCategory = (selectedCategory.length === 0 || selectedCategory.includes(d.category));
    const checkColor = (selectedColor.length === 0 || selectedColor.includes(d.color));
     const checkPrice =
    selectedPrice.length === 0 ||
    selectedPrice.some((priceRange) => {
      if (priceRange === "under $100") return +d.newPrice <= 100;
      if (priceRange === "under $150") return +d.newPrice <= 150;
      if (priceRange === "under $200") return +d.newPrice <= 200;
      if (priceRange === "above $200") return +d.newPrice > 200;
      return true;
    });
    return checkCategory && checkColor && checkPrice;
  });
  return (
    <>
      <Nav handleInputChange={handleInputChange} clearallf={clearallf} selectedCategory={selectedCategory} selectedColor={selectedColor} selectedPrice={selectedPrice} categoryChange={categoryChange} ColorChange={ColorChange} PriceChange={PriceChange} />
      <Product data={filtereddata} />
    </>
  );
};
export default App;
