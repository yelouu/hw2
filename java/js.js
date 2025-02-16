document.addEventListener("DOMContentLoaded", function () {

    //1
  
    let age = prompt("Ваш возраст, кадет?")
    if (age < 30)
        
      alert("Салага зеленый еще.");
    else 
      alert("РАЗВАЛЮХА!");
  
    //2
  
    let num1 = prompt("numbers numbers fn");
    let num2 = prompt("numbers");
    if(num1 > num2) { 
      alert("первое больше! ");
    
    }
    else if( num2 > num1) {
      alert("второе больше");

    }
    else{
      alert("коммунизм, жевачка и РАВЕНСТВО")
    }
   


             //3
    let num = prompt("umbers numbers fn");
    if (num % 2 === 0) {
      alert("odd (future) numba")
    }
     
    else{
      alert("не помню как нечетное по английски")
    }
  
  });
