// payment.js - Handles Pesapal payment flow

async function initiatePayment(documentId, title, price, buyerEmail, buyerName) {
    const toast = document.getElementById('toast');
    
    try {
        showToast("Initiating payment...", "info");
        
        const response = await fetch(`${API_URL}/payment/initiate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                documentId,
                title,
                amount: price || PESAPAL_CONFIG.defaultAmount,
                currency: PESAPAL_CONFIG.currency,
                buyerEmail,
                buyerName,
                phoneNumber: '', // optional, can collect from user
                callbackUrl: PESAPAL_CONFIG.callbackUrl
            })
        });

        const data = await response.json();

        if (data.redirect_url) {
            showToast("Redirecting to payment...", "success");
            // This should open the Pesapal page where user selects Airtel/MTN and gets prompt
            window.open(data.redirect_url, '_blank');
        } else {
            showToast("Payment initiation failed: " + (data.error || 'Unknown'), "error");
        }
    } catch (err) {
        console.error(err);
        showToast("Network error. Is backend running?", "error");
    }
}

// Helper
function showToast(message, type = "info") {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.background = type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#5b21b6";
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}

// Expose globally
window.initiatePayment = initiatePayment;
