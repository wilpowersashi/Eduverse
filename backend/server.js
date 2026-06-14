// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('✅ Eduverse Backend LIVE - Money goes to +260972576440');
});

app.post('/api/payment/initiate', (req, res) => {
    const { title, amount, buyerEmail, buyerName, buyerPhone } = req.body;

    console.log('Payment request:', { buyerName, buyerPhone, amount });

    // Proper Pesapal Sandbox Link with your number as receiver
    const pesapalUrl = `https://cybqa.pesapal.com/pesapalv3/api/Transactions/SubmitOrderRequest?` +
        `consumer_key=${encodeURIComponent(process.env.PESAPAL_CONSUMER_KEY)}` +
        `&amount=${amount || 5}` +
        `&currency=ZMW` +
        `&description=${encodeURIComponent(title || 'Eduverse Document')}` +
        `&buyer_name=${encodeURIComponent(buyerName || 'Student')}` +
        `&buyer_email=${encodeURIComponent(buyerEmail || 'student@eduverse.com')}` +
        `&buyer_phone=${encodeURIComponent(buyerPhone || '+260972576440')}` +
        `&callback_url=${encodeURIComponent('https://wilpowersashi.github.io/Eduverse/payment-success.html')}`;

    res.json({
        success: true,
        redirect_url: pesapalUrl
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
