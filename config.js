/* ============================================================
   EDUVERSE – Frontend Configuration
   File: config.js  (lives in your GitHub repository)

   ⚠️  STEP REQUIRED:
   After you deploy the backend on Render.com, replace the
   BACKEND_URL value below with your actual Render URL.
   Example: 'https://eduverse-backend.onrender.com'
   ============================================================ */

/* ── Backend API URL ─────────────────────────────────────────
   Replace the URL below with your Render.com backend URL.
   Leave no trailing slash.                                    */
const API_URL = 'https://YOUR-RENDER-APP-NAME.onrender.com/api';

/* ── Firebase Configuration ──────────────────────────────────
   Fill these in from your Firebase Console → Project Settings */
const FIREBASE_CONFIG = {
  apiKey:            'YOUR_FIREBASE_API_KEY',
  authDomain:        'YOUR_PROJECT.firebaseapp.com',
  projectId:         'YOUR_PROJECT_ID',
  storageBucket:     'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId:             'YOUR_APP_ID'
};

/* ── Merchant Phone (for display only) ───────────────────────
   All payments go through PesaPal to this number.            */
const MERCHANT_PHONE = '+260972576440';
