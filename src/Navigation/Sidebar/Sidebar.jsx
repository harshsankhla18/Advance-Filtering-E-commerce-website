import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Category from "./category/Category";
import Color from "./color/Color";
import Price from "./price/Price";
import './Sidebar.css';
function Sidebar({categoryChange, ColorChange,clearallf, PriceChange,selectedCategory,selectedColor,selectedPrice}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="sidebar-button" onClick={handleShow}>
        Apply Filter
      </button>

      <Offcanvas className="Offcanvas-class" show={show} onHide={handleClose}>
        <Offcanvas.Header className='close-button' closeButton>
          <Offcanvas.Title className='title'>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="list-at">
               <div className="colmn-at">
                 <h3>Category</h3>
                 <Category selectedCategory={selectedCategory} handleChange={categoryChange} />
                </div>

                <div className="colmn-at">
                 <h3>Color</h3>
                 <Color selectedColor={selectedColor} handleChange={ColorChange} />
                </div>

                <div className="colmn-at">
                <h3>Price-Range</h3>
                <Price selectedPrice={selectedPrice} handleChange={PriceChange} />
                </div>
                <button onClick={clearallf}className='clear sidebar-button'>Clear All</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};


export default Sidebar;
