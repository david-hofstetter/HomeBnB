const express = require('express');
const stripe = require('stripe')('sk_test_51Oc5FfKQgZyuYHaeMweKRZbBPuZPhgHmsT1pLlkiVuHG2TYFwwaP4lnwEfCjnAvgAMoLkEWzQbHaRlr3ZPkSm6V7001FrqgjMj');
const Booking = require('../models/bookingModel')

const router = express.Router();


function splitDates(dateString) {
  // Split the string at each comma and trim whitespace
  const dateArray = dateString.split(',').map(date => date.trim());

  return dateArray;
}



module.exports = router;
