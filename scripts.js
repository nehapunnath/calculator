const btnClicked=(e)=>{
    console.log(e.target.innerText)
    console.log("hello")
    inp.value+=e.target.innerText
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