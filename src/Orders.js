import React, {useState, useEffect} from 'react';
import './Orders.css'
import {db, query, orderBy, onSnapshot, collection, doc} from "./firebase";
import {useStateValue} from "./StateProvider";
import Order from './Order';


function Orders() {
    const [{cart, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        if (user){
            const dbRef = collection(db, "users", user?.uid, "orders");
            //console.log("dbRef >>>", dbRef);
            const q = query(dbRef, orderBy('created', "desc"));
            //console.log("q is >>>", q);
            const snap = onSnapshot(q, (snapshot) => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
            //console.log("snapshot is >>>", snap);
            }
        else{
            setOrders([])
        }
    }, [user])

    return (
        <div className='orders'>
            <h1>Order History</h1>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders;
