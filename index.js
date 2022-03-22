let entry = document.getElementById("entry")

function submitInput() {
    event.preventDefault()
    let inputValue = document.getElementById("input").value
    entry.textContent = inputValue
    let myForm = document.getElementById("form")
    myForm.reset()
}

function convert() {
    let number = entry.textContent
    
    let length = document.getElementById("length")
    let lengthMet = (number * 3.28084).toFixed(3)
    let lengthImp = (number * 0.3048).toFixed(3)
    length.textContent = number + " meters = " + lengthMet + " feet | " + number + " feet = " + lengthImp + " meters"
    
    let volume = document.getElementById("volume")
    let volumeMet = (number * 0.264172).toFixed(3)
    let volumeImp = (number * 3.78541).toFixed(3)
    volume.textContent = number + " liters = " + volumeMet + " gallons | " + number + " gallons = " + volumeImp + " liters"
    
    let mass = document.getElementById("mass")
    let massMet = (number * 2.20462).toFixed(3)
    let massImp = (number * 0.453592).toFixed(3)
    mass.textContent = number + " kilograms = " + massMet + " pounds | " + number + " pounds = " + massImp + " kilograms" 
}