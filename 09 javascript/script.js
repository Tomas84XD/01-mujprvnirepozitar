function numberIf() {

const input =  document.getElementById("name").value

if (input < 0) {
    console.log("Záporné číslo")
} else if (input > 0 && input <= 10) {
    console.log("Větší než 0")
} else if (input > 10 && input <= 20) {
    console.log("Větší než 10")
} else if (input > 20)
    console.log("Větší než 20")
}





















































function checkResult() {

    const inputNumber = (document.getElementById("numberCheck").value)

    if (inputNumber < 18) {
        console.log("Dětský uživatel")
    } else if (inputNumber > 18) {
        console.log("Dospělý uživatel")
    }

    
    if (inputNumber > 2005) {
        console.log("Dětský rok")
    } else if (inputNumber < 2005) {
        console.log("Dospělý rok")
    }

   
}




















