import Input from "../../../Components/Input";

function Color  ({handleChange,selectedColor}) {
  return (
    <>

      <div className="category-list">
         
          <Input
        handleChange={handleChange}
        title="Red"
        value="red"
        checked={selectedColor.includes("red")}
        name="color-box"
         />
         <Input
        handleChange={handleChange}
        title="Blue"
        value="blue"
        checked={selectedColor.includes("blue")}
        name="color-box"
         />
          <Input
        handleChange={handleChange}
        title="Green"
        value="green"        
        checked={selectedColor.includes("green")}
        name="color-box"
         />
          <Input
        handleChange={handleChange}
        title="White"
        value="white"
                checked={selectedColor.includes("white")}
        name="color-box"
         />
          <Input
        handleChange={handleChange}
        title="Black"
        value="black"
        checked={selectedColor.includes("black")}
        name="color-box"
         />
      </div>
    </>


  );
};
export default Color;
