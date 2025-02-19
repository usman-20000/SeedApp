import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseUrl, colors } from "../assets/Data";
import Alert from "./Alert";
import { Link } from "react-router-dom";

export default function Modal(props) {
  const [itemData, setItemData] = useState({});
  const [qty, setQty] = useState(1); // Use state for quantity
  const [cartData, setCartData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState([]);

  const increment = () => setQty(prevQty => prevQty + 1);

  const decrement = () => setQty(prevQty => (prevQty > 1 ? prevQty - 1 : 1));

  const fetchHomeData = async () => {
    const response = await fetch(`${BaseUrl}/add`);
    const json = await response.json();
    setData(json);
    fetchData(json); // Pass data to fetchData
  };

  const addToCart = async (quantity) => {
    const items = {
      id: props.id,
      quantity: quantity,
    };

    let cartItems = localStorage.getItem('cart');
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    let updatedCart = [...cartItems, items];

    setCartData(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    setShowAlert(true);
    const timer = setTimeout(() => setShowAlert(false), 3000); // 3 seconds delay
    return () => clearTimeout(timer); // Cleanup timer
  };

  const fetchData = (data) => {
    const item1 = data.find((item) => item._id === props.id);
    setItemData(item1 || {}); // Set to empty object if not found
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  useEffect(() => {
    if (data.length > 0 && props.id) {
      fetchData(data);
    }
  }, [data, props.id]);

  return (
    <div className="modal show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{itemData?.heading}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onClose}></button>
          </div>
          {showAlert && <Alert message="Added to Cart" />}
          <img src={itemData?.image} style={{ height: 300, width: 300, alignSelf: 'center' }} />
          <div className="offcanvas-body" style={{ padding: '2%' }}>
            {itemData?.detail}
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '2%' }}>
              <h5>Price: {itemData?.price}/Rs</h5>
              <div style={{ width: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: 20 }}>
                <div onClick={decrement} className="h-[20px] w-[20px] rounded-full bg-[#347928] flex flex-col items-center justify-center pb-1">
                  <span className="text-white text-[20px]">-</span>
                </div>
                <span>{qty}</span>
                <div onClick={increment} className="h-[20px] w-[20px] rounded-full bg-[#347928] flex flex-col items-center justify-center pb-1">
                  <span className="text-white text-[20px]">+</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center', marginLeft: '5%' }}>
            <button onClick={() => addToCart(qty)} style={{ marginBottom: '5%', height: 50, borderWidth: 0, backgroundColor: '#347928', color: 'white', width: '45%', alignSelf: 'center', fontWeight: 'bold' }}>Add to Cart</button>
            <Link to="/Cart" style={{ width: '45%' }}>
              <button style={{ marginBottom: '5%', height: 50, borderWidth: 0, color: '#347928', backgroundColor: 'white', width: '100%', alignSelf: 'center', fontWeight: 'bold', border: '1px solid' }}>Go to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
