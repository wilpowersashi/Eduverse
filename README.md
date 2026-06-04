# Eduverse - Educational Resource Platform

![Eduverse](https://img.shields.io/badge/Eduverse-Educational%20Platform-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

## Overview

Eduverse is a modern educational resource platform that allows administrators to upload educational materials and enables teachers and pupils to purchase and access quality content through Airtel Money and MTN Mobile Money.

### Key Features

✅ **Admin Portal**
- Upload educational materials (PDF, DOC, DOCX, XLS, PPTX)
- Manage document prices
- Organize materials by category
- Real-time file storage

✅ **Teacher Portal**
- Browse all educational materials
- Filter by category (9+ categories)
- Purchase documents with secure payment
- Download purchased materials

✅ **Pupil Portal**
- Browse student-accessible materials
- Filter by category
- Secure payment processing
- Instant document access

✅ **Payment Integration**
- Airtel Money Zambia
- MTN Mobile Money Zambia
- Direct payment to +260972576440
- Real-time payment confirmation

✅ **Cloud Storage**
- Firebase Storage integration
- Secure file uploads
- Fast file downloads
- 50MB file size limit

---

## Quick Start

### Prerequisites
- Node.js v14+
- npm or yarn
- Firebase account
- Pesapal merchant account

### Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/wilpowersashi/Eduverse.git
   cd Eduverse
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

4. **Add Firebase Key**
   - Download `firebase-key.json` from Firebase Console
   - Place in project root

5. **Start Backend**
   ```bash
   npm start
   ```

6. **Open Frontend**
   ```bash
   python -m http.server 3000
   ```

7. **Access Application**
   - Open `http://localhost:3000`

---

## Complete Setup

For detailed setup instructions including Firebase and Pesapal configuration, see **[SETUP_GUIDE.md](SETUP_GUIDE.md)**

---

## Features

### Admin Portal
- ✅ Upload files with metadata
- ✅ Set document prices
- ✅ Manage visibility (Teacher only or Both)
- ✅ Real-time file storage in Firebase
- ✅ Delete documents

### Teacher Portal
- ✅ Browse complete material catalog
- ✅ Filter by 9 categories
- ✅ Purchase documents via mobile money
- ✅ Download purchased materials
- ✅ View multiple file types

### Pupil Portal
- ✅ Browse approved materials
- ✅ Limited category access
- ✅ Secure payment processing
- ✅ Easy document access

---

## API Endpoints

### Documents
```
GET  /api/documents              - Get all documents
POST /api/upload                 - Upload new document
PUT  /api/documents/:id/price    - Update document price
```

### Payments
```
POST /api/payment/initiate       - Initiate payment
POST /api/payment/callback       - Pesapal webhook
GET  /api/download/:documentId   - Download document
```

---

## Supported File Types

- PDF (.pdf)
- Word (.doc, .docx)
- Excel (.xls, .xlsx)
- PowerPoint (.ppt, .pptx)
- Text (.txt)

**Max file size: 50MB**

---

## Categories

### Teachers (9 categories):
1. Curriculum book
2. Syllabus
3. Content mapping
4. Schemes of work
5. Text books
6. Modules
7. Pamphlets
8. Past examination papers
9. Lesson plans

### Pupils (3 categories):
1. Text books
2. Pamphlets
3. Past examination papers

---

## Payment Processing

**Supported Methods:**
- Airtel Money (Zambia)
- MTN Mobile Money (Zambia)

**Payment Receiver:** +260972576440

**Default Price:** K5.00 ZMW (adjustable per document)

---

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Database:** Firebase Firestore
- **Storage:** Firebase Storage
- **Payments:** Pesapal API
- **Deployment:** Render.com / Heroku (Backend), GitHub Pages / Netlify (Frontend)

---

## Deployment

### Backend Deployment (Render.com)
1. Connect GitHub repository
2. Set environment variables in Render dashboard
3. Deploy

### Frontend Deployment (GitHub Pages)
1. Go to Settings → Pages
2. Select "Deploy from a branch"
3. Choose "main" branch
4. Your site: `https://wilpowersashi.github.io/Eduverse/`

---

## Security

- ✅ Environment variables for secrets
- ✅ Firebase security rules
- ✅ File type validation
- ✅ File size limits
- ✅ Payment verification
- ✅ CORS enabled

---

## Troubleshooting

**Backend won't start?**
```bash
node --version  # Check Node v14+
rm -rf node_modules
npm install
npm start
```

**Upload fails?**
- Check file size < 50MB
- Verify file type is supported
- Check Firebase credentials in .env

**Payment not working?**
- Verify Pesapal credentials
- Check phone number format
- Ensure Pesapal account is verified

---

## Support

For complete setup instructions, see [SETUP_GUIDE.md](SETUP_GUIDE.md)

For issues:
1. Check browser console (F12 Developer Tools)
2. Check backend logs
3. Verify .env file has all credentials
4. Test with different file types

---

## License

MIT License - Free to use and modify

---

## Author

**Wilpowers Ashi**
- GitHub: [@wilpowersashi](https://github.com/wilpowersashi)
- Platform: Eduverse

---

**Your complete educational platform is ready! 🎓✨**