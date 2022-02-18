
let loader = document.getElementById('loading');
let qrImg = document.getElementById('qrimg');
let subBtn = document.getElementById('submitbtn');


const showqr = () => {

    let inputVal = document.getElementById('inputid').value;

    if (inputVal !== null) {
        loader.style.display = 'block';


        qrImg.onload = function () {
            loader.style.display = 'none';

        }


        console.log(inputVal);
        let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
        qrImg.src = api;
    }
    else {
        alert('enter value first');
    }

}

subBtn.addEventListener('click', showqr);
