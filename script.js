
  let timeShower = document.querySelector(".time-shower");


  window.addEventListener("load", ()=>{

    timeShower.style.textShadow = "7px 2px 4px #8f8878"
    timeShower.textContent = new Intl.DateTimeFormat("tr" , {
        timeStyle: "medium"
      }).format(Date.now())

      setInterval( ()=> {

        timeShower.textContent = new Intl.DateTimeFormat("tr" , {
            timeStyle: "medium"
          }).format(Date.now());  
    
      }, 1000)
    
  });
