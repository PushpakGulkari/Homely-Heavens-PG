import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2'


function Bookingscreen({ match }) {
    const { roomid, fromdate, todate } = useParams();
    // return(
    // <div>
    //     <h1>Booking screen</h1>
    //     <p>Room ID: {roomid}</p>
    // </div>
    // );

    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()
    const [room, setroom] = useState()
    const [dateDifference, setDateDifference] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);



    async function populateRoom() {
        try {
            setloading(true)
            const data = (await axios.post("/api/rooms/getroombyid", { roomid })).data
            setroom(data)
            setloading(false)
        } catch (error) {

            setloading(false)
            console.log(error)
            seterror(true)
        }
    }
    useEffect(() => {
        populateRoom();

        if (fromdate && todate) {
            const fromDateObj = moment(fromdate, 'DD-MM-YYYY');
            const toDateObj = moment(todate, 'DD-MM-YYYY');
            const difference = toDateObj.diff(fromDateObj, 'days') + 1;
            setDateDifference(difference);

            if (room && room.rentperday) {
                const amount = difference * room.rentperday;
                setTotalAmount(amount);
            }
            setloading(false)
        }

    }, [fromdate, todate, room]);

   

async function onToken(token){
    console.log(token)
    const bookingDetails = {
        room,
        userid: JSON.parse(localStorage.getItem('currentUser')),
        fromdate,
        todate,
        totalAmount,
        dateDifference,
        token

    }
    try {
        setloading(true)
        const result = await axios.post('/api/bookings/bookroom', bookingDetails)
        setloading(false)
        Swal.fire('Congratulations', 'Your PG Booked Successfully', 'success').then(result=>{
            window.location.href='/profile'
        })
    } catch (error) {
        setloading(false)
       Swal.fire('Oops', 'Somrthing went wrong', 'error')
    }
}

    return (
        <div className="m-5">
            {loading ? <Loader /> : room ? (
                <div >
                    <div className="row justify-content-center mt-5 bs">
                        <div className="col-md-6">
                            <h1>{room.name}</h1>
                            <img src={room.imageurl[0]} className="bigimg" />

                        </div >
                        <div className="col-md-6">
                            <div style={{ textAlign: 'right' }}>
                                <h1>Booking Details</h1>
                                <hr />
                                <b>
                                    <p>Name : {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                                    <p>Form Date : {fromdate}</p>
                                    <p>To Date :  {todate} </p>
                                    <p>Max Count : {room.maxcount}</p>
                                </b>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <b>
                                    <h1>Amount</h1>
                                    <hr />
                                    <p>Total days : {dateDifference} </p>
                                    <p>Rent per day : {room.rentperday} </p>
                                    <p>Total Amount : {totalAmount}</p>
                                </b>
                            </div>
                            <div style={{ float: 'right' }}>
                               
                                <StripeCheckout
                                    token={onToken}
                                    amount={totalAmount * 100}
                                    currency="INR"
                                    stripeKey="pk_test_51OLh0nSJCf6l7vM3gjLEDBtdx3GmmG5MHIw0LhCF4nTnYS72kFVdHLcCUxK2ekxIeOY7F89QHd2yr9lokrbzNBxq00yFB7OBsK"
                                >
                                    <button className="btn btn-primary">Pay Now</button>

                                </StripeCheckout>
                            </div>
                        </div>

                    </div>
                </div>
            ) : <Error />}
        </div>
    )



}

export default Bookingscreen;