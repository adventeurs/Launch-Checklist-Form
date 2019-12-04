// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

let form = document.getElementById('launchForm').firstElementChild
console.log(form)

form.addEventListener('submit', function(){
   let pilotName     = document.getElementsByName('pilotName')
      ,copilotName   = document.getElementsByName('copilotName')
      ,cargoMass     = document.getElementsByName('cargoMass')
      ,fuelLevel    = document.getElementsByName('fuelStatus')

   if(typeof copilotName != 'string' || typeof pilotName != 'string'){
      preventDefault()
      alert('Please complete form')
   } 
   else if(isNaN(cargoMass.value) || isNaN(fuelLevel.value)){
      preventDefault()
      alert('Please complete form');
   } 

   let pilotStatus = document.getElementById('pilotStatus') 
      ,copilotStatus= document.getElementById('copilotStatus')
      ,fuelStatus= document.getElementById('fuelStatus')
      ,cargoStatus= document.getElementById('cargoStatus')

      pilotStatus.innerHTML = `Pilot ${pilotStatus.value} is ready for launch`
      copilotStatus.innerHTML = `Pilot ${pilotStatus.value} is ready for launch`
});