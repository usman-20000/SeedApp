import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { BaseUrl, colors } from "../assets/Data";
import Alert from "../components/Alert";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function Cart() {
    const [userData, setUserData] = useState([]);
    const [localData, setLocalData] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [address, setAddress] = useState('');
    const [data, setData] = useState([]);


    const fetchData = async () => {
        try {
            const response = await fetch(`${BaseUrl}/add`);
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
            }
            const json = await response.json();
            setData(json);
        } catch (error) {
            // console.error('Error fetching data:', error);
            // Handle error state or retry logic if needed
        }
    };

   
    const fetchLocal = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        setLocalData(cart);

        let tempUserData = [];
        cart.forEach(e => {
            let getData = data.find(item => item._id === e.id);
            if (getData) {
                tempUserData.push(getData);
            }
        });

        setUserData(tempUserData);

        let total = 0;
        tempUserData.forEach(item => {
            const localItem = localData.find(e => e.id === item._id);
            if (localItem) {
                total += item.price * localItem.quantity;
            }
        });
        setTotalAmount(total);
    };

    const removeFromCart = (index) => {
        // Retrieve the cart data from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Remove the item at the specified index
        if (index > -1) {
            cart.splice(index, 1);
        }

        // Update the localStorage and state
        setLocalData(cart);
        localStorage.setItem('cart', JSON.stringify(cart));

        fetchLocal();

        setShowAlert(true);


        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer);
    };

    const handleAddress = (txt) => {
        setAddress(txt.target.value);
    }

    useEffect(() => {
        fetchData();
        console.log('local:', localData);
    }, []);

    useEffect(() => {
        fetchLocal();
    }, [localData]);

    return (
        <div>
            <NavBar />
            <div style={{ paddingTop: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {showAlert && <Alert message="Deleted Successfully..." />}
                <div style={{ display: 'flex', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '70%', backgroundColor: colors.blueGrey, height: 40, marginLeft: '5%', paddingLeft: '1%', paddingRight: '1%', borderRadius: 3 }}>
                    <h5 style={{ alignSelf: 'center', color: colors.white }}>Delete</h5>
                    <h5 style={{ alignSelf: 'center', color: colors.white }}>Image</h5>
                    <h5 style={{ alignSelf: 'center', color: colors.white }}>name</h5>
                    <h5 style={{ alignSelf: 'center', color: colors.white }}>quantity</h5>
                    <h5 style={{ alignSelf: 'center', color: colors.white }}>price</h5>
                </div>
                {userData.map((item, index) => {
                    const localItem = localData.find(e => e.id === item._id);
                    return (
                        <div key={item.id} style={{ padding: '2%', display: 'flex', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '70%', borderBottom: '1px solid lightgray', marginLeft: '5%' }}>
                            <div onClick={() => removeFromCart(index)}>
                                <img src={require('../../src/assets/images/recycle-bin.png')} style={{ height: 20, width: 20 }} />
                            </div>
                            <img src={item.image} alt={item.title} style={{ height: 120, width: 120, marginRight: '2%', alignSelf: 'center' }} />
                            <span style={{ marginRight: '2%', alignSelf: 'center' }}>{item.heading}</span>
                            {localItem && <span style={{ alignSelf: 'center' }}>{localItem.quantity}</span>}
                            <span style={{ alignSelf: 'center' }}>{item.price * localItem.quantity}</span>
                        </div>
                    );
                })}
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '65%', paddingLeft: '5%', paddingTop: '2%' }}>
                    <h5>Total:</h5>
                    <h5>{totalAmount}/-</h5>
                </div>
                <Link to="/Bill" style={{ width: '15%', margin: '5%', marginLeft: '10%' }}>
                    <button style={{ marginBottom: '5%', height: 50, borderWidth: 0, backgroundColor: colors.blue, color: 'white', width: '100%', alignSelf: 'center', fontWeight: 'bold', border: '1px solid' }}>Check Out</button>
                </Link>
            </div>
        </div>
    );
}
