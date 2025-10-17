let e = document.getElementsByClassName("btn");
Array.from(e).forEach(button => {
    button.addEventListener('click', () => {
     //   f=  console.log(button.innerText);
        if (button.innerText == '=') {
            document.getElementById('display').value = eval(document.getElementById('display').value);
        }
        else if (button.innerText == 'C') {
            document.getElementById('display').value = '';
        }
        else if (button.innerText == 'DEL') {
            document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
        }
        else {
            document.getElementById('display').value += button.innerText;
        }
    });
}); 


