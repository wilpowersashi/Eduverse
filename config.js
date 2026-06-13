// config.js
const PESAPAL_CONFIG = {
    consumerKey: 'kEy4j0am0sEdTv3ASdCajcbVrRA2oAen',
    consumerSecret: 'jmhLPlzoxD3irMSKa/oCbWcr7Dk=',
    baseUrl: 'https://cybqa.pesapal.com/pesapalv3/api',
    merchantAccount: '+260972576440',
    currency: 'ZMW'
};

const API_URL = 'https://eduverse-production-5e0b.up.railway.app/api';

const FIREBASE_CONFIG = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

if (typeof window !== 'undefined') {
    window.PESAPAL_CONFIG = PESAPAL_CONFIG;
    window.API_URL = API_URL;
    window.FIREBASE_CONFIG = FIREBASE_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PESAPAL_CONFIG, API_URL, FIREBASE_CONFIG };
}
