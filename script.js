var array = ['images/apple.png', 'images/pear.png', 'images/cherry.png',
    'images/watermelon.png', 'images/7.png']
var vuorot = 1;
var pituus = array.length;
var panos = 1;
var rahaa = 50;
let check1 = document.getElementById('lock1');
let check2 = document.getElementById('lock2');
let check3 = document.getElementById('lock3');
let check4 = document.getElementById('lock4');

var uusi1 = 0;
var uusi2 = 0;
var uusi3 = 0;
var uusi4 = 0;
function pelaa() {

    
    if (rahaa < panos) {
        document.getElementById("rahaa").innerText = "bankrupt";
    } else if (vuorot == 1) {
        rahaa -= panos;

        uusi1 = Math.floor(Math.random() * pituus);
        uusi2 = Math.floor(Math.random() * pituus);
        uusi3 = Math.floor(Math.random() * pituus);
        uusi4 = Math.floor(Math.random() * pituus);

        document.getElementById("slot1").src = array[uusi1];
        document.getElementById("slot2").src = array[uusi2];
        document.getElementById("slot3").src = array[uusi3];
        document.getElementById("slot4").src = array[uusi4];

        vuorot = 2
        document.getElementById("rahaa").innerText = rahaa;

    } else if (vuorot == 2) {
        rahaa -= panos;

        if (!lock1.checked) {
            uusi1 = Math.floor(Math.random() * pituus);
            document.getElementById("slot1").src = array[uusi1];
        }
        if (!lock2.checked) {
            uusi2 = Math.floor(Math.random() * pituus);
            document.getElementById("slot2").src = array[uusi2];
        }
        if (!lock3.checked) {
            uusi3 = Math.floor(Math.random() * pituus);
            document.getElementById("slot3").src = array[uusi3];
        }
        if (!lock4.checked) {
            uusi4 = Math.floor(Math.random() * pituus);
            document.getElementById("slot4").src = array[uusi4];
        }

        vuorot = 1;
        palkinnot();
        uncheckAll();
    }
}
function palkinnot() {
    var hinta = 0;
    if (uusi1 == uusi2 == uusi3 == uusi4) { //ei toimi kumpikaa
        
        if (uusi1 == 0) {//omena
            hinta = panos * 6;
            rahaa += hinta;
        } else if (uusi1 == 1) {//päärynä
            hinta = panos * 4;
            rahaa += hinta;
        } else if (uusi1 == 2) {//kirsikka
            hinta = panos * 3;
            rahaa += hinta;
        } else if (uusi1 == 3) {//meloni
            hinta = panos * 5;
            rahaa += hinta;
        } else if (uusi1 == 4) {//7
            hinta = panos * 10;
            rahaa += hinta;
        }

    } else if (uusi1 == uusi2 == uusi3 == 4/*  || 
        uusi2 == uusi3 == uusi4 == 4 || 
        uusi3 == uusi4 == uusi1 == 4*/){//kolme x 7 pitää laittaa erikseen

        hinta = panos * 5;
        rahaa += hinta;
    }
    document.getElementById("rahaa").innerText = rahaa;
}
function panos1() {
    panos = 1;
    document.getElementById("panos").innerText = panos;
}
function panos2() {
    panos = 2;
    document.getElementById("panos").innerText = panos;
}
function panos3() {
    panos = 3;
    document.getElementById("panos").innerText = panos;
}
function uncheckAll() {
    let inputs = document.querySelectorAll('.check2');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }
}