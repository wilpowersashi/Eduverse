// payment.js
async function initiatePayment(documentId, title, amount, buyerEmail, buyerName, buyerPhone = '') {
    const toast = document.getElementById('toast');
    
    try {
        showToast("Connecting to payment gateway...", "info");

        const payload = {
            title: title,
            amount: parseFloat(amount) || 5,
            buyerEmail: buyerEmail,
            buyerName: buyerName,
            buyerPhone: buyerPhone || "+260972576440"
        };

        const response = await fetch(`${API_URL}/payment/initiate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.success && data.redirect_url) {
            showToast("Redirecting to Pesapal...", "success");
            setTimeout(() => window.open(data.redirect_url, '_blank'), 600);
        } else {
            showToast(data.error || "Payment failed. Try again.", "error");
            console.error("Backend response:", data);
        }
    } catch (error) {
        console.error("Error:", error);
        showToast("Cannot connect to backend. Check Railway logs.", "error");
    }
}

function showToast(message, type = "info") {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.background = type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#0f766e";
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 5000);
}

window.initiatePayment = initiatePayment;
