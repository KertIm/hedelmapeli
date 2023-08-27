/* palkinnot
neljä x 7 => voitto = 10 x panos
neljä x omena => voitto = 6 x panos
neljä x meloni => voitto = 5 x panos
neljä x päärymä => voitto = 4 x panos
neljä x kirsikka => voitto = 3 x panos
kome kertaa 7 => voitto = 5 x panos
*/
var apple = new Image(); apple.src ="images/apple.png";
var pear = new Image(); pear.src ="images/pear.png";
var cherry = new Image(); cherry.src ="images/cherry.png";
var watermelon = new Image(); watermelon.src ="images/watermelon.png";
//var 7 = new Image(); 7.src ="images/7.png";
var kuvat=[apple,pear,cherry,watermelon];


var c=document.getElementById("peli2");
var ctx=c.getContext("2d");

//rolls count per game 
var panos = 1;
var rahaa = 50;
function pelaa() {
    


    //var uusi = Math.floor(Math.random() * 5);
    var uusi = Math.floor(Math.random() * 4);
    ctx.drawImage(kuvat[uusi],0,0);
    
    
    rahaa = rahaa + 1;
    document.getElementById("rahaa").innerText= rahaa;

}







function panos1(){
    panos = 1;
    document.getElementById("panos").innerText= panos;
}
function panos2(){
    panos = 2;
    document.getElementById("panos").innerText= panos;
}
function panos3(){
    panos = 3;
    document.getElementById("panos").innerText= panos;
}
/* 
first need to use random
then locking 
and the second roll 
calculate prizes
start again
*/