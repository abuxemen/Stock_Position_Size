document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculate');
    const totalAmountInput = document.getElementById('totalAmount');
    const entryPriceInput = document.getElementById('entryPrice');
    const stopLossInput = document.getElementById('stopLoss');
    const riskAmountSpan = document.getElementById('riskAmount');
    const shareQuantitySpan = document.getElementById('shareQuantity');
    const investmentAmountSpan = document.getElementById('investmentAmount');

    calculateButton.addEventListener('click', () => {
        const totalAmount = parseFloat(totalAmountInput.value);
        const entryPrice = parseFloat(entryPriceInput.value);
        const stopLoss = parseFloat(stopLossInput.value);

        if (isNaN(totalAmount) || isNaN(entryPrice) || isNaN(stopLoss)) {
            alert('Please enter valid numbers for all fields.');
            return;
        }

        if (stopLoss >= entryPrice) {
            alert('Stop Loss should be lower than Entry Price.');
            return;
        }

        const riskAmount = totalAmount * 0.01; // 1% of Total Amount
        const shareQuantity = Math.floor(riskAmount / (entryPrice - stopLoss));
        const investmentAmount = shareQuantity * entryPrice;

        riskAmountSpan.textContent = `₹${riskAmount.toFixed(2)}`;
        shareQuantitySpan.textContent = shareQuantity;
        investmentAmountSpan.textContent = `₹${investmentAmount.toFixed(2)}`;
    });
});