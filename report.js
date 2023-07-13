//To add Scope 1 values
// To display data from the form input and calculate the scope 1,2 and 3 total and Emission total
window.addEventListener('load', () => {
//Basics
const organisation = localStorage.getItem('organisation');
const period = localStorage.getItem('period');
//scope1
const fuelTotal = parseFloat(localStorage.getItem('fuelTotal')) || 0;
const bioenergyTotal = parseFloat(localStorage.getItem('bioenergyTotal')) || 0;
const refrigerantsTotal = parseFloat(localStorage.getItem('refrigerantsTotal')) || 0;
const passengerTotal = parseFloat(localStorage.getItem('passengerTotal')) || 0;
const deliveryTotal = parseFloat(localStorage.getItem('deliveryTotal')) || 0;
//scope2
const electricityTotal = parseFloat(localStorage.getItem('electricityTotal')) || 0;
const heatTotal = parseFloat(localStorage.getItem('heatTotal')) || 0;
const evTotal = parseFloat(localStorage.getItem('evTotal'))|| 0;
const districtTotal = parseFloat(localStorage.getItem('districtTotal')) || 0;
//scope3
const otherfuelTotal = parseFloat(localStorage.getItem('otherfuelTotal')) || 0;
const transmissionTotal = parseFloat(localStorage.getItem('transmissionTotal')) || 0;
const wastewaterTotal = parseFloat(localStorage.getItem('wastewaterTotal'))|| 0;
const wasteTotal = parseFloat(localStorage.getItem('wasteTotal')) || 0;
const waterTotal = parseFloat(localStorage.getItem('waterTotal')) || 0;
const materialTotal = parseFloat(localStorage.getItem('materialTotal')) || 0;
const airTotal = parseFloat(localStorage.getItem('airTotal')) || 0;
const businessTotal = parseFloat(localStorage.getItem('businessTotal')) || 0;
const seaTotal = parseFloat(localStorage.getItem('seaTotal')) || 0;
const roadTotal = parseFloat(localStorage.getItem('roadTotal')) || 0;
const freightingTotal = parseFloat(localStorage.getItem('freightingTotal')) || 0;
const employeesTotal = parseFloat(localStorage.getItem('employeesTotal')) || 0;
const foodTotal = parseFloat(localStorage.getItem('foodTotal')) || 0;
const homeTotal = parseFloat(localStorage.getItem('homeTotal')) || 0;

// Display the retrieved values in their respective spans
//Basics
document.getElementById('organisation-report').textContent = organisation;
document.getElementById('period').textContent = period;
//scope1
document.getElementById('fuel-total').textContent = fuelTotal.toFixed(2);
document.getElementById('bioenergy-total').textContent = bioenergyTotal.toFixed(2);
document.getElementById('refrigerants-total').textContent = refrigerantsTotal.toFixed(2);
document.getElementById('passenger-total').textContent = passengerTotal.toFixed(2);
document.getElementById('delivery-total').textContent = deliveryTotal.toFixed(2);
//scope2
document.getElementById('electricity-total').textContent = electricityTotal.toFixed(2);
document.getElementById('heat-total').textContent = heatTotal.toFixed(2);
document.getElementById('ev-total').textContent = evTotal.toFixed(2);
document.getElementById('district-total').textContent = districtTotal.toFixed(2);
//scope3
document.getElementById('otherfuel-total').textContent = otherfuelTotal.toFixed(2);
document.getElementById('transmission-total').textContent = transmissionTotal.toFixed(2);
document.getElementById('wastewater-total').textContent = wastewaterTotal.toFixed(2);
document.getElementById('waste-total').textContent = wasteTotal.toFixed(2);
document.getElementById('water-total').textContent = waterTotal.toFixed(2);
document.getElementById('material-total').textContent = materialTotal.toFixed(2);
document.getElementById('air-total').textContent = airTotal.toFixed(2);
document.getElementById('business-total').textContent = businessTotal.toFixed(2);
document.getElementById('sea-total').textContent = seaTotal.toFixed(2);
document.getElementById('road-total').textContent = roadTotal.toFixed(2);
document.getElementById('freighting-total').textContent = freightingTotal.toFixed(2);
document.getElementById('employees-total').textContent = employeesTotal.toFixed(2);
document.getElementById('food-total').textContent = foodTotal.toFixed(2);
document.getElementById('home-total').textContent = homeTotal.toFixed(2);


// Calculate and display the total
//scope1
var scope1Total = fuelTotal + bioenergyTotal + refrigerantsTotal + passengerTotal + deliveryTotal;
document.getElementById('scope1-total').textContent = scope1Total.toFixed(2);

//scope2
var scope2Total = electricityTotal + heatTotal + evTotal + districtTotal;
document.getElementById('scope2-total').textContent = scope2Total.toFixed(2);

//scope3
var scope3Total = otherfuelTotal + transmissionTotal + wastewaterTotal + wasteTotal + waterTotal + materialTotal + airTotal + businessTotal + seaTotal + roadTotal + freightingTotal + employeesTotal + foodTotal + homeTotal; 
document.getElementById('scope3-total').textContent = scope3Total.toFixed(2);


//emission
var emissionTotal = fuelTotal + bioenergyTotal + refrigerantsTotal + passengerTotal + deliveryTotal + electricityTotal + heatTotal + evTotal + districtTotal + otherfuelTotal + transmissionTotal + wastewaterTotal + wasteTotal + waterTotal + materialTotal + airTotal + businessTotal + seaTotal + roadTotal + freightingTotal + employeesTotal + foodTotal + homeTotal;
document.getElementById('emission-total').textContent = emissionTotal.toFixed(2);});