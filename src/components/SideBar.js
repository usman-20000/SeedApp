import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Alert from "./Alert";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { BaseUrl } from "../assets/Data";

export default function SideBar(props){

    const [itemData, setItemData] = useState({});
    const [qty, setQty] = useState(1); // Use state for quantity
    const [cartData, setCartData] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [data, setData] = useState([]);

    const increment = () => {
      setQty(prevQty => prevQty + 1); // Increment quantity using functional update
  }
  
  const decrement = () => {
      setQty(prevQty => (prevQty > 1 ? prevQty - 1 : 1)); // Decrement quantity using functional update
  }


  const fetchHomeData = async () => {
    const response = await fetch(`${BaseUrl}/add`);
    const json = await response.json();
    setData(json);
  }

    const addToCart = async (quantity) => {
      const items = {
        id: props.id,
        quantity: quantity,
      };
    
      let cartItems = localStorage.getItem('cart');

    if (!cartItems) {
      cartItems = [];
    } else {
      cartItems = JSON.parse(cartItems);
      if (!Array.isArray(cartItems)) {
        cartItems = [];
      }
    }

    let updatedCart; // Define updatedCart outside the if block

    if (items.id && items.quantity) {
      updatedCart = [...cartItems, items];
      setCartData(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      let cart = localStorage.getItem('cart'); // Retrieve cart data from localStorage

      // Check if cart data exists in localStorage
      if (cart) {
        // Parse the JSON string to obtain the JavaScript object
        cart = JSON.parse(cart);
        // Now you can manipulate the cart data or stringify it again if needed
        cart = JSON.stringify(cart); // Stringify the JavaScript object
      }

      setShowAlert(true);


      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // 3 seconds delay

      // Cleanup the timeout if the component is unmounted or the effect is re-run
      return () => clearTimeout(timer);
    }
  };
    
    
    const fetchData =()=>{
       const item1 = data.find((item)=>(item.id === props.id));
        setItemData(item1);
        console.log(item1);
    }  

    useEffect(()=>{
      fetchHomeData();
        fetchData();
    },[data]);

    return(
        <div className="offcanvas offcanvas-start show" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">{itemData?.heading}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={props.onClose}></button>
  </div>
          {showAlert && <Alert message="Added to Cart"/>}
            <img src={itemData?.image} style={{height:300, width:300, alignSelf:'center'}}/>
        <div className="offcanvas-body">
          {itemData?.detail}
          <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <h5>
          price: {itemData?.price}/Rs
          </h5>
          <div style={{width:60, display:'flex', justifyContent:'space-between', alignItems:'center', marginRight:20 }}>
              <div onClick={decrement}>
          <img src={require('../../src/assets/images/remove.png')}  style={{height:20, width:20}}/>
          </div>
          <span>{qty}</span>
          <div onClick={increment}>
          <img src={require('../../src/assets/images/plus.png')}  style={{height:20, width:20}}/>
          </div>
          </div>
          </div>
        </div>
        <div style={{display:'flex', flexDirection:'row', width:'90%', justifyContent:'space-between', alignItems:'center', marginLeft:'5%'}}>
        <button  onClick={() => addToCart(qty)}  style={{marginBottom:'5%', height:50, borderRadius:10, borderWidth:0, backgroundColor:'#03C03C', color:'white', width:'45%', alignSelf:'center', fontWeight:'bold'}}>Add to Cart</button>
        <Link to="/Cart" style={{width:'45%'}}>
        <button style={{marginBottom:'5%', height:50, borderRadius:10, borderWidth:0, color:'#03C03C', backgroundColor:'white', width:'100%', alignSelf:'center', fontWeight:'bold', border: '1px solid'}}>Go to Cart</button>
        </Link>
      </div>
      </div>
    )
}
