let fullName=document.querySelector(".full-name input")
console.log(fullName);
let weight=document.querySelector(".weight input")
console.log(weight);
let height= document.querySelector(".height input")
console.log(height);
let button=document.querySelector(".click")
button.addEventListener("click",()=>{
    let value_weight=weight.value;
    let value_height=height.value;
    let formula= Math.trunc(value_weight / (value_height*value_height))
    let number=document.querySelector(".number")
    let explain=document.querySelector(".explain")
    let yu_bmi=document.querySelector(".yu-bmi")
    yu_bmi.classList.remove("yellow", "green", "orange", "red");

    if(formula<=18.5){
       number.innerHTML=formula
       explain.innerText="UNER WEIGHT"
        yu_bmi.classList.add("yellow");
      
    }else if ( formula>18.5 && formula<=25 ){
        number.innerHTML=formula  
        explain.innerText="NORMAL WEIGHT"
        yu_bmi.classList.add("green");
      
    }else if (formula>25 && formula<=30 ){
        number.innerHTML=formula  
        explain.innerText="OVER WEIGHT"
        yu_bmi.classList.add("orange");
       
    }else{
        number.innerHTML=formula  
        explain.innerText="OBSE"
        yu_bmi.classList.add("red");

    }
    weight.value=""
    height.value=""
    fullName.value=""
})
