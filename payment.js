// payment.js - Eduverse Pesapal Integration (Fixed)

async function initiatePayment(documentId, title, amount, buyerEmail, buyerName, buyerPhone = '') {
    const toast = document.getElementById('toast');
    
    try {
        showToast("Connecting to Pesapal...", "info");

        const payload = {
            documentId: documentId,
            title: title,
            amount: parseFloat(amount),
            currency: "ZMW",
            buyerName: buyerName,
            buyerEmail: buyerEmail,
            buyerPhone: buyerPhone || "+260972576440",
            callbackUrl: window.location.origin + "/payment-callback.html", // Update after deployment
            cancellationUrl: window.location.origin
        };

        const response = await fetch(`${API_URL}/payment/initiate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.success && data.redirect_url) {
            showToast("Redirecting to secure payment...", "success");
            setTimeout(() => {
                window.open(data.redirect_url, '_blank');
            }, 800);
        } else {
            showToast(data.error || "Failed to start payment. Check backend.", "error");
            console.error("Payment error:", data);
        }
    } catch (error) {
        console.error("Payment request failed:", error);
        showToast("Backend not reachable. Is server running?", "error");
    }
}

function showToast(message, type = "info") {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    
    if (type === "success") toast.style.background = "#10b981";
    else if (type === "error") toast.style.background = "#ef4444";
    else toast.style.background = "#0f766e";
    
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4500);
}

// Make available globally
window.initiatePayment = initiatePayment;
