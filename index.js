var typed = new Typed('.auto', {
    strings: [ 'PRINCEWILL (Dot Com)','a Programmer','an AI developer', 'a Software Developer', 'a Digital Marketer', 'a Crypto Scalper'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    startDelay: 1000,
    loop: true
})

var myCvBtn = document.querySelector('.my-cv-btn');

myCvBtn.addEventListener('click', function(){
    alert('Sorry, full purchase of my CV will be available shortly please stay tune')
})

var learnMore = document.querySelector('.learn-more');

learnMore.addEventListener('click', function(){
    alert(`Am a fullstack developer with professional experience in 
    affiliate marketing and a good knowledge in Opereting system build with #C Programming, cloud deployement and data analytics, I build Artifitail intelligence applications, management of cloud data and API creating`)
})

// form costormization

var inputEmail = document.querySelector('.input-email');
var inputText = document.querySelector('.input-text');
var sendBtn = document.querySelector('.send-btn');
var message = document.querySelector('.message');
var errorEl = document.querySelector('.error');

sendBtn.addEventListener('click', function(e){
    e.preventDefault()
    if (inputEmail.value == '') {
        errorEl.innerHTML = 'Please fill in the complete fields'
        setTimeout(() => {
            errorEl.innerHTML = ''
        }, 3000);
    } else if(inputText.value == ''){
        errorEl.innerHTML = 'Please fill in the complete fields'
        setTimeout(() => {
            errorEl.innerHTML = ''
        }, 3000);
    }else{
        alert(`🙂 Send success, System under customization and data procession, i'll get back to you shortly`)
        location.replace('index.html')
    }
})


// menu customisation
let list = document.querySelector('.list')
var menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', function(){

    if (list.innerHTML == '') {
        list.innerHTML = 
    `
    <div>
        <a href='index.html'>Home</a>
        <a href='#about'>About</a>
        <a href='#vision'>Vision</a>
        <a href='#service'>Services</a>
        <a href='#contact'>Contact/ Newsletter</a>
    </div>
    `
    list.style = 
    `padding: 20px;
    transition: 0.7s;
    top: -150px;
    transform: translateY(100%);
    `
    } else {
        list.innerHTML = ''
        list.style = 
        `padding: 20px;
        transition: 0.7s;
        top: -150px;
        transform: translateY(100%);
        `
    }
})