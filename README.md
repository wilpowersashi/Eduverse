# Eduverse - Educational Resource Platform

![Eduverse](https://img.shields.io/badge/Eduverse-Educational%20Platform-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

## Overview

Eduverse allows admins to upload educational materials and lets teachers/pupils buy them via **Airtel Money** and **MTN Mobile Money** (Zambia) using Pesapal.

### Key Payment Fix (Most Common Issue)
The payment prompt was not showing because the old API endpoints were used. We updated to **Pesapal v3**.

---

## Quick Start (Updated)

### Prerequisites
- Node.js v16+
- Firebase Project
- Pesapal Merchant Account (Sandbox first)

### Installation
1. Clone repo
2. `npm install`
3. Copy `config.js` (use the version below)
4. Add `firebase-key.json` (service account)
5. Start backend: `npm start`
6. Frontend: `python -m http.server 3000` (or deploy to GitHub Pages)

---

## Payment Integration (Critical Section)

**Pesapal v3 Setup:**

1. Use **Sandbox** first (`cybqa.pesapal.com`)
2. Register IPN URL in backend (one-time)
3. On "Buy" button → Backend calls `/api/payment/initiate`
4. Pesapal returns redirect URL → Open it in new tab (this shows the mobile money prompt)

**Common Reasons Prompt Doesn't Appear:**
- Using old `queryPaymentStatus` endpoint (fixed in new config)
- No IPN registered
- Wrong baseUrl (sandbox vs live)
- Missing `redirect_url` handling in frontend
- CORS / backend not running

See `payment.js` (create if missing) for frontend logic.

---

## File Structure (Recommended)
