import Input from "../../../Components/Input";

function Price({handleChange,selectedPrice}) {
  return (
    <>

      <div className="category-list">
         
          
          <Input
        handleChange={handleChange}
         maxval="100"
        title="under $100"
        value="under $100"
        checked={selectedPrice.includes("under $100")}
        name="pricebox"
         />
          <Input
        handleChange={handleChange}
        maxval="150"
        title="under $150"
        value="under $150"
        checked={selectedPrice.includes("under $150")}
        name="pricebox"
         />
          <Input
        handleChange={handleChange}
        maxval="200"
        title="under $200"
        value="under $200"
        checked={selectedPrice.includes("under $200")}
        name="pricebox"
         />
         <Input
        handleChange={handleChange}
        maxval="100000"
        title="above $200"
        value="above $200"
        checked={selectedPrice.includes("above $200")}
        name="pricebox"
         />
      </div>
    </>


  );
};
export default Price;
