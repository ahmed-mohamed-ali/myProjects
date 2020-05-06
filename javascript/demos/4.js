do{
var x =parseInt(prompt("enter first num"));

var y =parseInt(prompt("enter second num"));

var z =prompt("enter operator");

  switch(z){
    case "+":   
    alert(x+y);
    break; 
            
    case "-":   
        document.write(x-y);
    break; 
    case "*":   
        document.write(x*y);
    break; 
    case "/":   
     document.write(x/y);
    break; 
}  
  }while(confirm("do you want repeat process"))




