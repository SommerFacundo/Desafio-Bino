let multiplo2 = document.getElementById("multiplos2");
let multiplo3 = document.getElementById("multiplos3");
let multiplo4 = document.getElementById("multiplos4");
let multiplo5 = document.getElementById("multiplos5");
function crearP(rsp,n) {
    let p = document.createElement("p");
    let div = document.getElementById("resultText");


    switch(n){
        case 2:
            p.textContent = rsp;
            p.classList.add("numero");
            multiplo2.appendChild(p);
        break;
        case 3:
            p.textContent = rsp;
            p.classList.add("numero");
            multiplo3.appendChild(p);
        break;
        case 4:
            p.textContent = rsp;
            p.classList.add("numero");
            multiplo4.appendChild(p);
        break;
        case 5:
            p.textContent = rsp + "-";
            p.classList.add("numero");
            multiplo5.appendChild(p);
        break;
    }

    
    return p;

  }

  function contarMultiplo2(n){
    let cont = 0;
    let p;
    for (numero of n) {
        if(parseInt(numero)%2 == 0){
            cont++;
           p = crearP(numero,2);
            p.classList.add("multiplo2");
        }

    }
    return cont;
  }
  
  function contarMultiplo3(n){
    let cont = 0;
    let p;
    for (numero of n) {
        if(parseInt(numero)%3 == 0){
            cont++;
           p = crearP(numero,3);
            p.classList.add("multiplo3");
        }

    }
    return cont;
  }
  
  function contarMultiplo4(n){
    let cont = 0;
    let p;
    for (numero of n) {
        if(parseInt(numero)%4 == 0){
            cont++;
           p = crearP(numero,4);
            p.classList.add("multiplo4");
        }

    }
    return cont;
  }
  
  function contarMultiplo5(n){
    let cont = 0;
    let p;
    for (numero of n) {
        if(parseInt(numero)%5 == 0){
            cont++;
           p = crearP(numero,5);
            p.classList.add("multiplo5");
        }

    }
    return cont;
  }
let btn = document.getElementById("button");
let input = document.getElementById("textarea");

btn.addEventListener("click",()=>{
    
    event.preventDefault();
    let div = document.getElementById("resultText");
    multiplo2.innerHTML= "";
    multiplo3.innerHTML= "";
    multiplo4.innerHTML= "";
    multiplo5.innerHTML= "";

    let textarea = document.getElementById("textarea").innerHTML;
    console.log(textarea);
    textarea = textarea.split(/\r?\n?\s/);
    console.log(textarea);

    document.getElementById("contador2").innerHTML = "Cantidad de multiplos de 2: " + contarMultiplo2(textarea);
    document.getElementById("contador3").innerHTML = "Cantidad de multiplos de 3: " + contarMultiplo3(textarea);
    document.getElementById("contador4").innerHTML = "Cantidad de multiplos de 4: " + contarMultiplo4(textarea);
    document.getElementById("contador5").innerHTML = "Cantidad de multiplos de 5: " + contarMultiplo5(textarea);


});

