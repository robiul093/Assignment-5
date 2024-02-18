// const nextBtn = document.getElementById('next-btn');
// nextBtn.addEventListener('click', function(){
// });

let i = 1;

// phone number input
const phone = document.getElementById('phone');
const phoneValue = phone.value;
console.log(phoneValue);

function nextSection() {
    const mainSection = document.getElementById('main');
    mainSection.classList.add('hidden')

    const success = document.getElementById('success');
    success.classList.remove('hidden');
}

const allSeats = document.getElementsByClassName('seat');

// seat left calculation
const setLeftId = document.getElementById('seat-left');
const setLeftText = setLeftId.innerText;
let seatLeft = parseInt(setLeftText);

// seat selected calculation
const seatSelectId = document.getElementById('seat-select');
const seatSelectText = seatSelectId.innerText;
let seatSelected = parseInt(seatSelectText);

// get total price id
const totalPriceId = document.getElementById('total-price');
const totalPriceText = totalPriceId.innerText;
let totalPriceNumber = parseInt(totalPriceText);

// get Grandtotal price id
const grandTotalPriceId = document.getElementById('grand-total');
const grandTotalPriceText = totalPriceId.innerText;
let grandTotalPriceNumber = parseInt(totalPriceText);

// creat li & p tag
const li = document.createElement('li');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');

// console.log(seatSelectId)
for (const seat of allSeats) {
    seat.addEventListener('click', function (e) {
       if(i <= 4){
        e.target.classList.add('text-[#1DD100]');
        // e.target.classList.add('text-[#1DD100]');
        seatLeft -= 1;
        setLeftId.innerText = seatLeft
        seatSelected += 1;
        seatSelectId.innerText = seatSelected

        const targetSeat = e.target.innerText;

        // append p1 p2 p3 
        p1.innerText = targetSeat;


        const appendContainer = document.getElementById('append-container');
        appendContainer.appendChild(li)
        
        // total price calculate and set
        totalPriceNumber += 550;
        totalPriceId.innerText = totalPriceNumber;

        // grandtotal price calculate and set
        grandTotalPriceNumber += 550;
        grandTotalPriceId.innerText = grandTotalPriceNumber;

        // enable button
        const nextBtn = document.getElementById('next-btn');
        nextBtn.classList.remove('btn-disabled');
        
        console.log(phoneValue)
        i++;
       }
       else{
        alert('4 seat selected!!!')
       }
    })
}

// add coupon
const couponInput = document.getElementById("coupon-input");
const couponValue = couponInput.value;
const couponBtn = document.getElementById('coupon-btn');
couponBtn.addEventListener('click', function(){
    console.log(couponInput)
    if(couponInput === 'NEW15' || couponInput === 'Couple 20'){
    }
})
console.log(couponValue )

p2.innerText = 'Economoy';
p3.innerText = 550;
li.append(p1, p2, p3);
li.classList.add('flex')
li.classList.add('justify-between')

