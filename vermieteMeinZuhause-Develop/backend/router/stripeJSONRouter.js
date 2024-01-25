const express = require('express');
const stripe = require('stripe')('sk_test_51Oc5FfKQgZyuYHaeMweKRZbBPuZPhgHmsT1pLlkiVuHG2TYFwwaP4lnwEfCjnAvgAMoLkEWzQbHaRlr3ZPkSm6V7001FrqgjMj');

const router = express.Router();

router.post('/checkout', async (req, res) => {
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
      lineItems.push({
        price: item.price,
        quantity: item.quantity,
      });
    });
  
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:5173/thankyou',
      cancel_url: 'http://localhost:5173/sorry'
    });
  
    res.send(JSON.stringify({
      url: session.url,
    }));
  });

module.exports = router;