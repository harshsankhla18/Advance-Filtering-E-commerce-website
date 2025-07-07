import Input from "../../../Components/Input";
function Category({handleChange,selectedCategory}) {
  
  return (
    <>

      <div className="category-list">
        
          <Input
        handleChange={handleChange}
        title="Flats"
        value="flats"
        checked={selectedCategory.includes("flats")}
        name="category-box"
         />
          <Input
        handleChange={handleChange}
        title="Heels"
        value="heels"
         checked={selectedCategory.includes("heels")}
        name="category-box"
         />
          <Input
        handleChange={handleChange}
        title="Sneakers"
        value="sneakers"
         checked={selectedCategory.includes("sneakers")}
        name="category-box"
         />
          <Input
        handleChange={handleChange}
        title="Sandals"
        value="sandals"
         checked={selectedCategory.includes("sandals")}
        name="category-box"
         />
      </div>
    </>


  );
};
export default Category;
