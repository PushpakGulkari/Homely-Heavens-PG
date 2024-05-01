const express = require("express");
const router = express.Router();
const Booking = require('../models/booking')
const Room = require('../models/room')
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51OLh0nSJCf6l7vM37RFP4gBKLfV3njyELkWhxRkxHjHYLaijb8D8kFdW0pLd68IIVgUNa7x5tKrKhJhDPbIdZ50W00YO6byxfu')

router.post("/bookroom", async (request, response) => {
    const {
        room,
        userid,
        fromdate,
        todate,
        totalAmount,
        dateDifference,

    } = request.body




    try {
        const newbooking = new Booking({
            room: room.name,
            roomid: room._id,
            userid,
            fromdate,
            todate,
            totalAmount,
            dateDifference,
            transactionId: '1234'
        })
        const booking = await newbooking.save();

        const roomtemp = await Room.findOne({ _id: room._id });

        roomtemp.currentbookings.push({
            bookingid: booking._id,
            fromdate: fromdate,
            todate: todate,
            userid: userid,
            status: booking.status
        });

        await roomtemp.save()

        response.send('Room Booked Successfully')
    } catch (error) {
        return response.status(400).json({ error })
    }
});

router.post("/getbookingsbyuserid", async (request, response) => {
    const userid = request.body.userid

    try {
        const bookings = await Booking.find({ userid: userid })
        response.send(bookings)
    } catch (error) {
        return response.status(400).json({ error })
    }
});





router.post("/cancelbooking", async (request, response) => {
    const { bookingid, roomid } = request.body;

    try {
        const bookingitem = await Booking.findOne({ _id: bookingid });

        if (!bookingitem) {
            return response.status(404).json({ error: 'Booking not found' });
        }

        bookingitem.status = 'cancelled';
        await bookingitem.save();

        if (!roomid) {
            return response.status(400).json({ error: 'Room ID is required' });
        }

        const myroom = await Room.findOne({ _id: roomid });

        if (!myroom) {
            return response.status(404).json({ error: 'Room not found' });
        }

        myroom.currentbookings = myroom.currentbookings.filter(bookingroom => bookingroom.bookingid.toString() !== bookingid);
        await myroom.save();

        response.send('Booking Cancelled Successfully');
    } catch (error) {
        console.error('Error:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
});




module.exports = router