
import React, {useState,useEffect}from 'react';
import { Tabs } from 'antd';
import { TabPane } from "react-bootstrap";
import axios from 'axios';
import Loader from "../components/Loader";
import Error from "../components/Error";
import Swal from 'sweetalert2'


function Profilescreen(){

    const user =JSON.parse(localStorage.getItem("currentUser"))
    useEffect(()=>{
        if(!user){
            window.location.href='/login'
        }
    },[])

    return (
        <div className='ml-5 mt-3 tab' >
            <Tabs defaultActiveKey="1">
                <TabPane tab="Profile" key="1">
                    <h1>My Profile</h1>

                    <br/>
                    <h1>Name :{user.name}</h1>
                    <h1>Email : {user.email}</h1>
                    {/* <h1>isAdmin : {user.isAdmin ? 'YES':'NO'}</h1> */}
                </TabPane>
                <TabPane tab="Bookings" key="2">
                    <MyBookings/>
                </TabPane>
                

            </Tabs>
        </div>
    )
}

export default Profilescreen;


export function MyBookings(){

    const[book,setbook]=useState([])
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()

    async function ConfirmBooking(){
        const user =JSON.parse(localStorage.getItem("currentUser"))
        try {
            setloading(true)
            const data = (await axios.post('/api/bookings/getbookingsbyuserid',{userid : user._id})).data
            setbook(data)
            console.log(data)
            setloading(false)
        } catch (error) {
            console.log(error)
            setloading(false)
            seterror(error)
        }
    }
    
      
        useEffect(()=>{
            ConfirmBooking();
            
        },[]);

      

        async function cancelBooking(bookingid,roomid){
            try {
                setloading(true)
                const result = (await axios.post('/api/bookings/cancelbooking',{bookingid, roomid})).data
                console.log(result)
                setloading(false)
                Swal.fire('Congrats','Your booking has been cancelled','success').then(result=>{
                    window.location.reload()
                })
               
            } catch (error) {
                console.log(error)
                setloading(false)
                Swal.fire('Oops','Something went wrong','error')
            }
        }

        return(
            <div>
               <div className='row ml-5'>
                <div className='col-md-6 ml-5'></div>
                    {loading && (<Loader/>)}
                    {book && (book.map(booking=>{
                        return <div className='bs'>
                            <h1>{booking.room}</h1>
                            <p><b>Booking ID:</b>{booking._id}</p>
                           
                            <p><b>From Date:</b>{booking.fromdate}</p>
                            <p><b>To Date:</b>{booking.todate}</p>
                            <p><b>Amount :</b>{booking.totalAmount}</p>
                            <p><b>Status :</b>{booking.status == 'booked'? 'CONFIRMED' : 'CANCELLED'}</p>
                        
                            {booking.status !== "cancelled" && (<div className='text-right' style={{float : 'right'}}>
                                <button className='btn btn-primary' onClick={()=>{cancelBooking(booking._id, booking.roomid)}}>CANCEL BOOKING</button>
                            </div>)}
                        </div>
                    }))}
               </div>
            </div>
        )
}