const buttons = document.querySelectorAll('button');
const fullScreen = document.getElementsByClassName('floating-button');
buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        let myEvent = button.dataset['command'];
        if(myEvent === "insertImage" || myEvent === "createLink"){
            let url = prompt("Enter your Link Here: ");
            document.execCommand(myEvent, false, url);
        }
        else if(myEvent === "formatBlock"){
            let formattingValue = button.dataset['block'];
            document.execCommand(myEvent, false, formattingValue);
        }
        else{
        document.execCommand(myEvent, false, null);
        }
    })
})

 for (let i = 0; i<buttons.length; i++){
     buttons[i].addEventListener('click', ()=>{
        
        
         let myEvent = buttons[i].dataset['command'];
         console.log(myEvent);

         if(buttons[i].name === "active"){
             buttons[i].classList.toggle('active');
         }

         if(myEvent === "insertImage" || myEvent === "createLink"){
             let url = prompt("Enter your Link Here: ");
             document.execCommand(myEvent, false, url);
         }
         else{
         document.execCommand(myEvent, false, null);
        }
     })
 }


