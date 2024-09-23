
const blogButton = document.getElementById('blog');

blogButton.addEventListener('click', () => {
    window.location.href = '/faq.html'; 
});

function toggol(id){
    document.getElementById('main').classList.add('hidden')
    document.getElementById('historySection').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
   
}
// btn toggol  function
document.getElementById('historyBtn').addEventListener('click', function(){
    toggol('historySection')
})

document.getElementById('donationBtn').addEventListener('click', function(){
    toggol('main')
})
// modal
function my_modal_1() {
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
}
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
    if(amountInput< 0 ){
        return alert('pls provied number')
    }

    if (isNaN(amountInput)) {
        alert('Please provied valid number');
        return;
    }

    let newDonation = getDonation + amountInput; 
    if(amountInput >getTotalMoney){
        alert('invalid')
        return
    }
    document.getElementById('addAmount').innerText = newDonation;
    let total= getTotalMoney-amountInput
    if(total <0){
        alert('invalid ')
        return

    }
    document.getElementById('totalMoney').innerText=total

    const modal=document.getElementById('my_modal_1')
    modal.showModal()
    
});

// donation 2

document.getElementById('button-2').addEventListener('click', function() {
    let amountInput = getInputFile('input-2');
    let getDonation = getAddDonation('addAmount-2');
    let getTotalMoney=getTotalBlance('totalMoney')
       
    if(amountInput< 0 ){
        return alert('pls provied number')
    }
     
    if (isNaN(amountInput)) {
        alert('Please provied valid number');
        return;
    }

    let newDonation = getDonation + amountInput; 
    document.getElementById('addAmount-2').innerText = newDonation;

    let total= getTotalMoney-amountInput
    if(total <0){
        alert('invalid ')
        return

    }
    document.getElementById('totalMoney').innerText=total
    const modal=document.getElementById('my_modal_1')
    modal.showModal()
});

// donation 3

document.getElementById('button-3').addEventListener('click', function() {
    let amountInput = getInputFile('input-3');
    let getDonation = getAddDonation('addAmount-3');
    let getTotalMoney=getTotalBlance('totalMoney')
     
    if(amountInput< 0 ){
        return alert('pls provied number')
    }

    if (isNaN(amountInput)) {
        alert('Please provied valid number');
        return;
    }

    let newDonation = getDonation + amountInput; 
    document.getElementById('addAmount-3').innerText = newDonation;

    
    let total= getTotalMoney-amountInput

    if(total <0){
        alert('invalid ')
        return

    }
    document.getElementById('totalMoney').innerText=total

    const modal=document.getElementById('my_modal_1')
    modal.showModal()
});

// button color

document.getElementById('historyBtn').addEventListener('click', function(){
    document.getElementById('donationBtn').classList.remove('bg-lime-500')
    document.getElementById('historyBtn').classList.add('bg-lime-500')
})

document.getElementById('donationBtn').addEventListener('click', function(){
    document.getElementById('historyBtn').classList.remove('bg-lime-500')
    document.getElementById('donationBtn').classList.add('bg-lime-500')
})
