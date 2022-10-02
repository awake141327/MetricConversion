const input = document.getElementById("inputValue")
const convertBtn = document.getElementById("convertBtn")
const length = document.getElementById("length")
const volumne = document.getElementById("volume")
const mass = document.getElementById("mass")

convertBtn.addEventListener('click', function(){
    let value = input.value
    if (value >= 0 && value <= 999999) {
        let meterToFeet = (value*3.2808).toFixed(3)
        let feetToMeter = (value/3.2808).toFixed(3)
        length.innerHTML = `${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter} meters`
        
        let literToGallon = (value*0.2641722).toFixed(3)
        let gallonToLiter = (value/0.2641722).toFixed(3)
        volume.innerHTML = `${value} liters = ${literToGallon} gallons | ${value} gallons = ${gallonToLiter} liters`
        
        let kilogramToPound = (value*2.20462).toFixed(3)
        let poundToKilogram = (value/2.20462).toFixed(3)
        mass.innerHTML = `${value} kilos = ${kilogramToPound} pounds | ${value} pounds = ${poundToKilogram} kilos`
    }
})