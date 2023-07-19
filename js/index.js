var age = document.getElementById("age");
var male = document.getElementById("male");
var female = document.getElementById("famale");
var weight = document.getElementById("weight");
var height = document.getElementById("height");
var tampilan = document.querySelector('.hasil');

function hasil() {
    if(male.checked){
        // alert("Male");
    }else if(female.checked){
        // alert("female");
    }else{
        alert("Pilih Jenis Kelamin Anda");
    }

    var hitung = weight.value / (((height.value / 100) * height.value) / 100);
    
    var result = "";
    if(hitung < 18.5){
        result = "Berat Badan Kurang";
    }else if(18.5 <= hitung && hitung <= 24.9){
        result = "Sehat";
    }else if(24.9 <= hitung && hitung <= 29.9){
        result = "kegemukan";
    }else if(30 <= hitung && hitung <= 34.9){
        result = "Gendut";
    }else if(35 <= hitung){
        result = "Sangat Gemuk";
    }

    tampilan.style.display='block';

    tampilan.innerHTML = 
    `
        <p>Result</p>
        <p>${hitung.toFixed(2)}</p>
        <p>${result}</p>
    `
}

document.querySelector('.reset').addEventListener("click", function(){
    window.location.reload();
})