const claimBox= document.querySelector(".claim-box");
const inputs=document.querySelectorAll("input");

const claimBoxHandler=(event)=>{
    const input1 = inputs[0].value;
    const input2 = inputs[1].value;
    const email=document.getElementById('email2');
    const para= document.querySelectorAll(".warn");
    const input3 = inputs[2].value;
    const input4 = inputs[3].value;
 if (input1.trim()==="" ||input2.trim()==="" ||input3.trim()==="" ||input4.trim()===""  )
   {
      para.forEach( i =>{   
         i.classList.add("visibility");
     });
      event.preventDefault();
      email.setAttribute('placeholder', "example@abc.com");
 
   }

};


claimBox.addEventListener("click", claimBoxHandler);