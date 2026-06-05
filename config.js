// Pesapal Configuration
const PESAPAL_CONFIG = {
    consumerKey: 'kEy4j0am0sEdTv3ASdCajcbVrRA2oAen',
    consumerSecret: 'jmhLPlzoxD3irMSKa/oCbWcr7Dk=',
    merchantAccount: '+260972576440',
    apiUrl: 'https://pesapal.com/api/queryPaymentStatus',
    sandboxUrl: 'https://sandbox.pesapal.com/api/queryPaymentStatus'
};

// Firebase Configuration (Update with your details)
const FIREBASE_CONFIG = {
    apiKey: 'YOUR_FIREBASE_API_KEY',
    authDomain: 'YOUR_PROJECT.firebaseapp.com',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_PROJECT.appspot.com',
    messagingSenderId: 'YOUR_SENDER_ID',
    appId: 'YOUR_APP_ID'
};

// Backend API URL
const API_URL = 'http://localhost:5000/api';

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PESAPAL_CONFIG, FIREBASE_CONFIG, API_URL };
}