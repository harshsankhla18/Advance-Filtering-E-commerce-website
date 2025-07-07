import Card from '../Components/Card';
import './Product.css';

function Product({data}) {

  return (
    <div className="product-container">
    { data.map(({ img, title, reviews, prevPrice, newPrice, company, color, category })=>{
   
  
      return (
        <div  key={`${company}${img}${title}-${color}-${newPrice}`}>
        <Card
       
        img={img}
        title={title}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
        company={company}
        color={color}
        category={category}
        />
        </div>
      );
     })}

    </div>
  );
};
export default Product;
