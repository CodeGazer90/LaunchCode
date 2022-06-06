let header = document.getElementById('header');
header.innerHTML = "Apple Dogs";
header.style.color = "teal";

let paragraph = document.getElementById('nya');
paragraph.innerHTML = "What are Apple Dogs????";
paragraph.style.fontSize = "39px";

let btn = document.getElementById('btn');
btn.style.fontSize = '25px';
btn.addEventListener('click', function(){
    header.style.fontSize = '99px';
    header.innerHTML = "Lecture 6/5/2022"
    paragraph.innerHTML = "Hello, World"
})