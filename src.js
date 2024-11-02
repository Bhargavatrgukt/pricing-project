const Toggle = document.getElementById("Toggle");
const price1=document.getElementById("price1");
const price2=document.getElementById("price2");
const price3=document.getElementById("price3");

console.log(Toggle.checked)

Toggle.addEventListener("change",()=>{
    if(Toggle.checked){
       price1.textContent="19.99";
       price2.textContent="24.99";
       price3.textContent="39.99";
    }else{
        price1.textContent="199.99";
        price2.textContent="249.99";
        price3.textContent="399.99";
    }
})