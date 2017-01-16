//code to execute multiplication with informative tips using loops 
function times(){
window.location="multiplication.html";
alert("Welcome to LEARN MULTIPLICATION.Lesson program compiled by Burton Chulu,Cell +263 785 011 524,Email burtchulututorials@gmail.com");
alert("The TWO TIMES TABLE!");
n1=2;
n2=1;
while(n2<11){alert(n1+" x "+n2+" = "+n1*n2);n2++;}
alert("The THREE TIMES TABLE!");
n3=3;
n4=1;
while(n4<11){alert(n3+" x "+n4+" = "+n3*n4);n4++;}
alert("The FOUR TIMES TABLE!");
n5=4;
n6=1;
while(n6<11){alert(n5+" x "+n6+" = "+n5*n6);n6++;}
alert("Have a nice say and we hope we helped you learn something today.");
}
//code to select topic from dropdown menu
function select(){
sel=document.getElementById("demo");
selval=sel.options[sel.selectedIndex].value;
window.location=selval;
}
//code to execute simple division with informative tips
function division(){
window.location="index.html";
alert("Welcome to LEARN DIVISION.Lesson program compiled by Burton Chulu,Cell +263 785 011 524,Email burtchulututorials@gmail.com");
alert("QUESTION 1: 7÷3");
alert("Here is a worked example of the  division in 2 easy steps");
alert("STEP 1: 3 into 7 is 2. In other words there are 2 threes in 7 which make up 6");
alert("STEP 2:The 2 threes make up 6 and we remain with 1 to reach 7");
alert("Hence 7÷3= 2 remainder 1");
alert("Here are more examples to work through.Try to use the previous example to help you understand");
n=1;
n1=20;
n2=2;
n3=4;
n4=5;
n5=10;
n6=3;
n7=6;
n8=7;
n9=18;
n10=14;
n11=16;
n12=8;
n13=18;
n14=9;
a=n1/n;
a1=n1/n2;
a2=n1/n3;
a3=n1/n4;
a4=n1/n5;
a5=n9/n6;
a6=n9/n7;
a7=n10/n8;
a8=n11/n12;
a9=n13/n14;
alert(n1+"÷"+n+" is "+a);
alert(n1+"÷"+n2+" is "+a1);
alert(n1+"÷"+n6+" is "+a5+" remainder 2");
alert(n1+"÷"+n3+" is "+a2);
alert(n1+"÷"+n4+" is "+a3);
alert(n1+"÷"+n7+" = "+a6+" remainder 2");
alert(n1+"÷"+n8+" = "+a7+" remainder 6");
alert(n1+" ÷ "+n12+" = "+a8+" remainder  4");
alert(n1+" ÷ "+n14+" = "+a9+" remainder 2");
alert(n1+"÷"+n5+" is "+a4);
alert("10÷1=10");
alert("10÷2=5");
alert("10÷3=3 remainder 1");
alert("10÷4=2 remainder 2");
alert("10÷5=2");
alert("10÷6=1 remainder 4");
alert("Have a nice day and we hope we helped you learn something today");
}
//code to change body background color on mouse over event
document.addEventListener("mouseover",function (){
document.body.style.backgroundColor="grey";});
//code to change element background color 
document.addEventListener("mouseover",function (){
document.getElementById("d1").style.backgroundColor="red";
document.getElementById("d2").style.backgroundColor="green";
document.getElementById("d3").style.backgroundColor="yellow";
document.getElementById("d4").style.backgroundColor="blue";
document.getElementById("b").style.backgroundColor="white";
document.getElementById("a").style.backgroundColor="white";
document.getElementById("c").style.backgroundColor="white";
document.getElementById("d").style.backgroundColor="white";
document.getElementById("e").style.backgroundColor="white";
});
//code to count up to 10 using the while loop
function count(){
window.location="index.html";
alert("Welcome to LEARN COUNTING.Lesson program coded by Burton Chulu,Cell +263 785 011 524,Email burtchulututorials@gmail.com");
alert("Starting counting...");
alert("Whats the first number?");
n=1;
while(n<20){alert("Its "+n);alert("Guess whats next?");n++;}
alert("We stop here for today");
alert("Have a nice day and we hope we helped you learn something today");
}
//function to teach addition using the window alert method
function add(){
alert("Welcome to LEARN ADDITION.Lesson program coded by Burton Chulu,Cell +263 785 011 524,Email burtchulututorials@gmail.com");
alert("2+1=3");
alert("2+2=4");
alert("2+3=5");
alert("2+4=6");
alert("2+5=7");
alert("2+6=8");
alert("2+7=9");
alert("2+8=10");
alert("2+9=11");
alert("2+10=12");
alert("Have a nice day and we hope we helped you learn something today");
}
//code to execute subtraction using the while loop
function subtract(){
alert("Welcome to LEARN SUBTRACTION.Lesson program coded by Burton Chulu,Cell +263 785 011 524,Email burtchulututorials@gmail.com");
n1=+20;
n2=+1;
while(n1>13){a=n1-2*n2;alert(n1+" - "+2*n2+" = "+a);n1--;n2++;}
alert("Have a nice day and we hope we helped you learn something today");
}