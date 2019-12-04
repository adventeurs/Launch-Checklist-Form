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

let form          = document.getElementById('launchForm').firstElementChild
   ,pilotStatus   = document.getElementById('pilotStatus') 
   ,copilotStatus = document.getElementById('copilotStatus')
   ,fuelStatus    = document.getElementById('fuelStatus')
   ,cargoStatus   = document.getElementById('cargoStatus')



form.addEventListener('submit', function(){

   let pilotName    = document.getElementById('pilotName')
      ,copilotName  = document.getElementById('copilotName')
      ,cargoMass    = document.getElementById('cargoMass')
      ,fuelLevel    = document.getElementById('fuelLevel')
      ,launchStatus = document.getElementById('launchStatus')

   if(!copilotName.value || !pilotName.value || !cargoMass.value || ! fuelLevel.value){
      alert('please complete form')
      event.preventDefault()
   }
   else if(typeof copilotName.value != 'string' || typeof pilotName.value != 'string'){
         alert('Please enter a name')
         event.preventDefault()
      }
   else if(isNaN(cargoMass.value) || isNaN(fuelLevel.value)){  
         alert('Enter valid number')
         event.preventDefault()
      } 

   if(cargoMass.value > 10000 || fuelLevel.value < 10000){
      document.getElementById('faultyItems').style.visibility = 'visible'
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
      copilotStatus.innerHTML = `Pilot ${copilotName.value} is ready for launch`
      launchStatus.innerHTML = 'Shuttle not ready for launch'
      launchStatus.style.color = 'red'
         if(cargoMass.value > 10000)
            cargoStatus.innerHTML = 'Too much mass for liftoff'
         if(fuelLevel.value < 10000) 
            fuelStatus.innerHTML = 'Not enough fuel for liftoff'
   } else{
      launchStatus.innerHTML = 'Shuttle is ready to launch.'
      launchStatus.style.color = 'green'
   }

   fetch('https://handlers.education.launchcode.org/static/planets.json')
      .then(response => response.json())
      .then(json => {
         let select    = json.length
            ,selection = Math.floor(Math.random() * select)

         document.getElementById('missionTarget').innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[selection].name}</li>
               <li>Diameter: ${json[selection].diameter}</li>
               <li>Star: ${json[selection].star}</li>
               <li>Distance from Earth: ${json[selection].distance}</li>
               <li>Number of Moons: ${json[selection].moons}</li>
            </ol>
            <img src="${json[selection].image}">
            `
      })
   event.preventDefault()
});