// config.js - Eduverse Payment & Firebase Configuration

// === PESAPAL CONFIGURATION (v3 API) ===
const PESAPAL_CONFIG = {
    consumerKey: 'kEy4j0am0sEdTv3ASdCajcbVrRA2oAen',     // Your provided key
    consumerSecret: 'jmhLPlzoxD3irMSKa/oCbWcr7Dk=',     // Your provided secret
    
    // Use SANDBOX for testing first!
    baseUrl: 'https://cybqa.pesapal.com/pesapalv3/api',   // Sandbox (recommended for testing)
    // baseUrl: 'https://pay.pesapal.com/v3/api',         // Live (uncomment when ready)
    
    merchantAccount: '+260972576440',  // Payment receiver phone
    currency: 'ZMW',
    defaultAmount: 5.00,
    
    // Callback URLs (update with your deployed URLs later)
    callbackUrl: 'http://localhost:3000/payment-callback.html', // or your GitHub Pages URL
    cancellationUrl: 'http://localhost:3000/',
    notificationId: '' // Will be set after registering IPN (backend handles this)
};

// === FIREBASE CONFIG ===
const FIREBASE_CONFIG = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// === BACKEND API ===
const API_URL = 'http://localhost:5000/api';  // Change to your deployed backend URL when live

// For browser environments
if (typeof window !== 'undefined') {
    window.PESAPAL_CONFIG = PESAPAL_CONFIG;
    window.FIREBASE_CONFIG = FIREBASE_CONFIG;
    window.API_URL = API_URL;
}

// For Node.js (backend)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PESAPAL_CONFIG, FIREBASE_CONFIG, API_URL };
}
