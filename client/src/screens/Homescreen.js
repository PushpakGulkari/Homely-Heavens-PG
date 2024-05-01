import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

function Homescreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [duplicateRooms, setDuplicateRooms] = useState([]);

    const [searchkey, setsearchkey] = useState();
    const [type, settype] = useState('all')

    async function populateRoom() {
        try {
            setLoading(true);
            const data = (await axios.get('/api/rooms/getallrooms')).data;
            setRooms(data);
            setDuplicateRooms(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
            console.error(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        populateRoom();
    }, []);

    function filterByDate(dates) {
        try {
            const formattedFromDate = dates[0]?.format('DD-MM-YYYY') || null;
            const formattedToDate = dates[1]?.format('DD-MM-YYYY') || null;

            setFromDate(formattedFromDate);
            setToDate(formattedToDate);

            const tempRooms = duplicateRooms.filter((room) => {
                if (room.currentbookings.length > 0) {
                    for (const booking of room.currentbookings) {
                        const bookingFromDate = moment(booking.fromdate, 'DD-MM-YYYY');
                        const bookingToDate = moment(booking.todate, 'DD-MM-YYYY');

                        if (
                            moment(formattedFromDate).isBetween(bookingFromDate, bookingToDate) ||
                            moment(formattedToDate).isBetween(bookingFromDate, bookingToDate) ||
                            bookingFromDate.isBetween(moment(formattedFromDate), moment(formattedToDate)) ||
                            bookingToDate.isBetween(moment(formattedFromDate), moment(formattedToDate))
                        ) {
                            return false; // Room is not available
                        }
                    }
                }
                return true; // Room is available
            });

            setRooms(tempRooms);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function filterBySearch(){
        const temprooms = duplicateRooms.filter(room=>room.name.toLowerCase().includes(searchkey.toLowerCase()))
        setRooms(temprooms)
    }
    
    function filterByType(e){
        settype(e)
        if(e!=='all'){
            const temprooms = duplicateRooms.filter(room=>room.type.toLowerCase()==e.toLowerCase())
            setRooms(temprooms)
        }
       else{
        setRooms(duplicateRooms)
       }
    }

    return (
        <div className='container justify-content-center'>
            <div className='row mt-5 bs justify-content-center'>
                <div className='col-md-3'>
                    <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
                </div>
                <div className='col-md-5'>
                    <input type='text' className='form-control' placeholder='search PG'
                        value={searchkey} onChange={(e) => (setsearchkey(e.target.value))} onKeyUp={filterBySearch} />
                </div>
                <div className='col-md-3'>
                    <select className='form-control' value={type} onChange={(e)=>{filterByType(e.target.value)}}>
                        <option value="all">All</option>
                        <option value="For Boys">For Boys</option>
                        <option value="For Girls">For Girls</option>
                    </select>
                </div>

            </div>
            <div className='row justify-content-center mt-5 '>
                {loading ? (
                    <Loader />
                ) : (
                    rooms.map((room) => {
                        return (
                        <div className='col-md-9 mt-2' key={room.id}>
                            <Room room={room} fromdate={fromDate} todate={toDate} />
                        </div>
                        );
                    })
                )

                }
            </div>
        </div>
    );
}

export default Homescreen;
