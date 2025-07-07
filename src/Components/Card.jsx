import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
function Card({ img, title, reviews, prevPrice, newPrice, company, color, category }) {
  const [rating,setrating]=useState([]);
  const ratingCount=Math.floor(Math.random()*4)+2;
    useEffect(
    ()=>{
        var starrating=[];
        for (let i = 0; i < ratingCount; i++) {
            starrating.push(<AiFillStar key={i} className="rating-star" />);
        }
                        setrating(starrating);
  
    },[]    );
    return (
        <>
            <div className="product-card">
                <div className="card-image">
                    
                    <img src={img} className="image-class" />
                    <div className="extra-name">
                    <h5 className="category-tag">{category}</h5>
                    <h5 className="company-tag">{company}</h5>
                    </div>
                    
                </div>
                
                <div className="card-content">
                    <h5>{title}</h5>
                    
                    <div className="rating">
                        {rating} <i className="review">{reviews}</i></div>
                    
                        <div className="prices">
                            <div className="New-prices">{prevPrice}</div>
                            <div className="Prev-prices">${" "}{newPrice}</div>
                            
                            
                        </div>
                        </div>
                </div>
        </>
    );
};

export default Card;