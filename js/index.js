
  
//   input function
function getInputFile(id) {
    return parseFloat(document.getElementById(id).value)
}

function getAddDonation(id) {
    return parseFloat(document.getElementById(id).innerText)
}

function getTotalBlance(id) {
    return parseFloat(document.getElementById(id).innerText)
}



// donation function end here

// donation 1

document.getElementById('button-one').addEventListener('click',function() {
    let amountInput = getInputFile('inputOne');
    let getDonation = getAddDonation('addAmount');
    let getTotalMoney=getTotalBlance('totalMoney')

    if (isNaN(amountInput)) {
        alert('Please provied valid number');
        return;
    }

    let newDonation = getDonation + amountInput; 
    document.getElementById('addAmount').innerText = newDonation;
    let total= getTotalMoney-amountInput
    document.getElementById('totalMoney').innerText=total
    document.getElementById('my_modal_1').classList.add("hidden")
    
});

// donation 2

document.getElementById('button-2').addEventListener('click', function() {
    let amountInput = getInputFile('input-2');
    let getDonation = getAddDonation('addAmount-2');

    if (isNaN(amountInput)) {
        alert('Please provied valid number');
        return;
    }

    let newDonation = getDonation + amountInput; 
    document.getElementById('addAmount-2').innerText = newDonation;
});

// donation 3

document.getElementById('button-3').addEventListener('click', function() {
    let amountInput = getInputFile('input-3');
    let getDonation = getAddDonation('addAmount-3');

    if (isNaN(amountInput)) {
        alert('Please provied valid number');
        return;
    }

    let newDonation = getDonation + amountInput; 
    document.getElementById('addAmount-3').innerText = newDonation;
});

