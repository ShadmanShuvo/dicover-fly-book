// First Class and Economy Class Event Handler
function handleFlightTicket(ticket, isIncrease) {
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-ticket-count').value = ticketNewCount;
    let ticketTotal = 0;
    if (ticket == 'first-class') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'economy-class') {
        ticketTotal = ticketNewCount * 100;
    }
    document.getElementById(ticket + '-total').innerText = ticketTotal;
    calculateTicketTotal();
}

// Calculate Total, Subtotal and Vat
function calculateTicketTotal() {
    const firstClassTicketCount = getInputValue('first-class');
    const economyClassTicketCount = getInputValue('economy-class');

    const totalTicketPrice = firstClassTicketCount * 150 + economyClassTicketCount * 100;
    document.getElementById('sub-total').innerText = totalTicketPrice;

    const vatCharge = Math.round(totalTicketPrice * 0.1);
    document.getElementById('vat-charge').innerText = vatCharge;

    const total = totalTicketPrice + vatCharge;
    document.getElementById('total-amount').innerText = total;
}

// Calculate Input Value
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

// Book Now Event Handler
document.getElementById('book-now').addEventListener('click', function () {
    document.getElementById('hide').style.display = 'none';
    document.getElementById('show').style.display = 'block';
})