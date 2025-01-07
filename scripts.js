const btnClicked=(e)=>{
    console.log(e.target.innerText)
    console.log("hello")
    inp.value+=e.target.innerText
}

const percentage=(e)=>{
    const value = e.target.innerText;
        
    if (value === "%") {
        if (inp.value) {
            inp.value = (parseFloat(inp.value) / 100).toString();
        }
    } else {
        inp.value += value;
    }
}


const getResult=()=>{
    try{
        const result=eval(inp.value)
        inp.value=result
    }
    catch{
        inp.value="Invalid Expression"
    }
}

const backSpace=()=>{
    inp.value=inp.value.slice(0,(inp.value.length-1))
}

const clearinp=()=>{
    inp.value=""
}