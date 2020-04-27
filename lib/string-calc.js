const stringcalc = (txt) =>{
    const strList = txt.split(",")

    firstNumber = (strList[0].length === 0)?0:parseInt(strList[0],10)
    if (strList[1]){
        secondNumber = (strList[1].length === 0)?0:parseInt(strList[1], 10)
    }    
    else {
        secondNumber = 0
    }
    
    return firstNumber + secondNumber
}
module.exports = {
    stringcalc
}