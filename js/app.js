const open = document.getElementById("login");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

open.addEventListener('click',()=>{
    modal.classList.add('show');
});
close.addEventListener('click',()=>{
    modal.classList.remove('show');
});

const btn = document.getElementById('HumbergerButton');
        const nav = document.getElementById('nav');

        btn.addEventListener('click',()=>{
            nav.classList.toggle('ActiveNav');
            btn.classList.toggle('active');
        });

        // const teambtn = document.getElementById('teambtn');
        // const details = document.getElementById('team-details');

        // teambtn.addEventListener('click',()=>{
        //     details.classList.toggle('active');
        //     teambtn.classList.toggle('show');
        // });
//Clock
function clock(){
    console.log('time');
    var date = new Date();
    var hour = date.getHours();
    let minute = date.getMinutes();
    var second = date.getSeconds();
    document.getElementById('hour').innerHTML = hour + " : ";
    document.getElementById('minute').innerHTML = minute + " : ";
    document.getElementById('second').innerHTML = second;
}
setInterval(clock,1000);
clock();


//Carousel
const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');
let Cindex = 0;
function run(){
    Cindex++;
    if(Cindex > img.length - 1){
        Cindex = 0;
    }
    imgs.style.transform = `translateX(${-Cindex * 100}%)`;
    //imgs.style.transition = '10s';
}
setInterval(run,5000);


// Register Modal
const RegOpen = document.getElementById("register");
const RegModal = document.getElementById("RegModal");
const close2 = document.getElementById("close2");

RegOpen.addEventListener('click',()=>{
    RegModal.classList.add('show2');
});
close2.addEventListener('click',()=>{
    RegModal.classList.remove('show2');
});

// Register Javascript
const form = document.getElementById('form');
const username = document.getElementById('RegUsername');
const email = document.getElementById('email');
const password = document.getElementById('RegPassword');
const password2 = document.getElementById('password2');



//Show Error
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show Success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'control success';
}

//Email Validation
function isValisEmail(email){
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

//Event Listeners
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username,'Username required');
    }
    else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email,'Email required');
    }
    else if(!isValisEmail(email.value)){
        showError(email,'Email is not valid');
        
    }
    else{
        showSuccess(eamil);
    }

    if(password.value === ''){
        showError(password,'Password required');
    }
    else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2,'Confirm password is required');
    }
    else{
        showSuccess(password2);
    }
});
// Team Section
// var acc = document.getElementsByClassName("team-details");
// var i;
// for (i = 0; i < acc.length; i++) {
//     acc[i].onclick = function () {
//         console.log('1');
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("show");
//     }
// }


//  const teambtn = document.getElementById('teambtn');
//         // const details = document.getElementById('team-details');

//         teambtn.addEventListener('click',()=>{
//             // details.classList.toggle('active');
//             console.log('1');
//             teambtn.classList.toggle('show');
//         });


//Write Text
const text = document.getElementById('text');
const write = "Let's introduced with our team mate";
let index = 1;
function WriteText(){
    text.innerText = write.slice(0,index);
    index++;
    if(index > write.length){
        index = 1;
    }
}
setInterval(WriteText,100);














const EndDate = new Date('Nov 29,2020,12:00:00').getTime();
console.log("EndDate is: " + EndDate);

function CountDown() {
    const RecentTime = new Date().getTime();
    console.log("RecentTime is: " + RecentTime);
    const Difference = EndDate - RecentTime;
    console.log("Difference of EndDate and RecentTime: " + Difference);

    const days = Math.floor(Difference / (1000 * 60 * 60 * 24));
    console.log("Days Left: " + days);

    const hours = Math.floor((Difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log("Hours Left: " + hours);

    const minutes = Math.floor((Difference % (1000 * 60 * 60)) / (1000 * 60));
    console.log("Minutes Left: " + minutes);

    const seconds = Math.floor((Difference % (1000 * 60)) / (1000));
    console.log("Seconds Left: " + seconds);

    if (days < 0) {
        document.getElementById('a').innerHTML = 'Finished';
    }
    // else {
    //     document.getElementById('demo').innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds";
    // }
    else {
        document.getElementById('dd').innerHTML = days;
        document.getElementById('hh').innerHTML = hours;
        document.getElementById('mm').innerHTML = minutes;
        document.getElementById('ss').innerHTML = seconds;
    }
}
//CountDown();
setInterval(CountDown, 1000);
//start();
