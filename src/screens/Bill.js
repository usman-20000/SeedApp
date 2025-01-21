import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Input from "../components/Input";
import { Link, useHistory } from "react-router-dom";
import { BaseUrl, colors } from "../assets/Data";

export default function Bill() {
    const history = useHistory();
    const [localData, setLocalData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [cartData, setCartData] = useState([]);
    const [data, setData] = useState([]);
    
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [houseNo, setHouseNo] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phone, setPhone] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch(`${BaseUrl}/add`);
            const json = await response.json();
            setData(json);
        } catch (e) {
            console.log('fetch error:', e);
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

    const handleSubmit = async () => {
        const formData = {
            email: email,
            name: `${firstName} ${lastName}`,
            address: address,
            house: houseNo,
            city: city,
            postalCode: postalCode,
            phone: phone,
            status:'pending',
            cart: cartData,
        };

        try {
            const response = await fetch(`${BaseUrl}/bill`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            localStorage.removeItem('cart');
            alert('Your order has been placed...');
            setEmail('');
            setFirstName('');
            setLastName('');
            setAddress('');
            setHouseNo('');
            setPostalCode('');
            setCity('');
            setPhone('');
            setCartData([]);
            history.push('/');
            const result = await response.json();
            console.log('Form submitted successfully:', result);
        } catch (error) {
            console.log('Submission error:', error);
        }
    };

    useEffect(() => {
        const newCartData = userData.map(item => {
            const localItem = localData.find(e => e.id === item._id);
            return {
                id: item._id,
                title: item.heading,
                quantity: localItem ? localItem.quantity : 0,
                price: item.price * (localItem ? localItem.quantity : 0)
            };
        });
        setCartData(newCartData);
    }, [userData, localData]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetchLocal();
    }, [data]);

    return (
        <div>
            <NavBar />
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginTop: '5%', alignItems: 'center', display: 'flex', flexDirection: 'column', width: '50%' }}>
                    <h3>Information</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%' }}>
                        <Input text="Email" placeholder="Example@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <div style={{ width: '47%' }}>
                                <Input text="First" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                            </div>
                            <div style={{ width: '47%' }}>
                                <Input text="Last" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <Input text="Address" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
                        <Input text="House no." placeholder="House no. (Optional)" value={houseNo} onChange={e => setHouseNo(e.target.value)} />
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <div style={{ width: '47%' }}>
                                <Input text="City" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
                            </div>
                            <div style={{ width: '47%' }}>
                                <Input text="Postal Code" placeholder="Postal Code" value={postalCode} onChange={e => setPostalCode(e.target.value)} />
                            </div>
                        </div>
                        <Input text="Phone" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <button onClick={handleSubmit} style={{ marginBottom: '5%', height: 50, borderWidth: 0, backgroundColor: colors.blue, color: 'white', width: '25%', alignSelf: 'center', fontWeight: 'bold', border: '1px solid' }}>
                        Buy Now
                    </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '50%', marginTop: '5%', alignItems: 'center', borderLeft: '1px solid lightgrey' }}>
                    <h3>Bill</h3>
                    {userData.map((item, index) => {
                        const localItem = localData.find(e => e.id === item._id);
                        return (
                            <div key={item._id} style={{ padding: '2%', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '70%', borderBottom: '1px solid lightgray', marginLeft: '5%' }}>
                                <img src={item.image} alt={item.title} style={{ height: 120, width: 120, marginRight: '2%', alignSelf: 'center' }} />
                                <span style={{ marginRight: '2%', alignSelf: 'center' }}>{item.title}</span>
                                {localItem && <span style={{ alignSelf: 'center' }}>{localItem.quantity}</span>}
                                <span style={{ alignSelf: 'center' }}>{item.price * localItem.quantity}</span>
                            </div>
                        );
                    })}
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '65%', paddingLeft: '5%', paddingTop: '2%' }}>
                        <h5>Total:</h5>
                        <h5>{totalAmount}/-</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
