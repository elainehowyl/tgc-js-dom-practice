<<<<<<< HEAD
// PLACE YOUR CODE HERE
document.querySelector('h1').style.color = "green";

document.querySelector('li.finished').innerText = "Repay credit card debt";

document.querySelector('li#urgent').style.border = "black 2px";

document.querySelector('.emphasis').style.textDecoration = "underline";

document.querySelector('p.emphasis').style.backgroundColor = "orange";
document.querySelector('p.emphasis').style.fontSize = "32px";
document.querySelector('p.emphasis').style.lineHeight = "24px";

document.querySelector('#urgent span.todo').style.backgroundColor = "yellow";
 

document.querySelector('h2').innerHTML = "<span class='greetings'>About Us</span>"
=======
document.querySelector('h1').style.color = 'green';

document.querySelector('li.finished').innerText = "Repay credit card debt";

let urgentItem = document.querySelector('li#urgent');
urgentItem.style.borderWidth = '2px';
urgentItem.style.borderColor = 'black';

document.querySelector('.emphasis').style.textDecoration = 'underline';

let emphasis = document.querySelector("p.emphasis");
emphasis.style.backgroundColor = "orange";
emphasis.style.fontSize = "32px";
emphasis.style.lineHeight = "24px";


document.querySelector('li#urgent span.todo').style.backgroundColor = 'yellow';

document.querySelector('h2').innerHTML = "<span class='greetings'>About Us</span>";
>>>>>>> upstream/main
