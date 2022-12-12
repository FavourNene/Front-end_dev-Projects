let display = document.getElementById("display");

 let buttons = Array.from(document.getElementsByClassName("button"));
    buttons.map( buttons => {
        buttons.addEventListener('click', (e)=>{
           switch (e.target.innerText) {
            case 'CE':
                display.innerText = display.innerText.slice(0,-1);
                break;
                case 'C':
            display.innerText= "";
            break;
            default:
                display.innerText += e.target.innerText;
                break;
                case '%' :
                        display.innerText = eval(display.innerText/100);
                        break;
    
               case '=' :
                 {
                     display.innerText =eval(display.innerText);
                }
           }
        })
    });
