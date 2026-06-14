async function initiatePayment(documentId, title, amount, buyerEmail, buyerName, buyerPhone = '') {
    try {
        showToast("Connecting to Pesapal...", "info");

        const response = await fetch(`${API_URL}/payment/initiate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                amount: parseFloat(amount),
                buyerEmail,
                buyerName,
                buyerPhone: buyerPhone || "+260972576440"
            })
        });

        const data = await response.json();

        if (data.success && data.redirect_url) {
            showToast("Redirecting to Airtel/MTN Payment...", "success");
            setTimeout(() => {
                window.open(data.redirect_url, '_blank');
            }, 800);
        } else {
            showToast("Payment initiation failed", "error");
        }
    } catch (err) {
        console.error(err);
        showToast("Cannot connect to backend. Railway may still be deploying.", "error");
    }
}

function showToast(message, type = "info") {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.background = type === "success" ? "#10b981" : "#ef4444";
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 5000);
}

window.initiatePayment = initiatePayment;
