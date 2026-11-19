const textArea = document.getElementById("textarea");
const counter = document.getElementById("charactersCount");
const clearBtn = document.getElementById("clearBtn");

textArea.addEventListener("input", () => {
  const textLength = textArea.value.length;
  counter.textContent = textLength + "/100";

  if(textLength>=90){
    counter.style.color="red";
  }else{
     counter.style.color="black";
  }
});

clearBtn.addEventListener("click",()=>{
    textArea.value="";
    counter.textContent="0/100"
})
