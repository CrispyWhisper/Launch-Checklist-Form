// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");


   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        // fuelLevelInput = Number(fuelLevelInput.value);
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
         //cargoMassInput = Number(cargoMassInput.value);
      let errorMessageArray = [];
      
      
      if(pilotNameInput.value === '' || pilotNameInput.value == null) {
         errorMessageArray.push(" You didn't enter a Pilot Name ");
         event.preventDefault(); 
      }

      if(coPilotNameInput.value === '' || pilotNameInput.value == null) {
         errorMessageArray.push(" You didn't enter a Co-Pilot Name ");
         event.preventDefault();
      }

      if(fuelLevelInput.value === '' || fuelLevelInput.value == null) {
         errorMessageArray.push(" You didn't enter a Fuel Level ");
         event.preventDefault();
      }

      if(cargoMassInput.value === '' || cargoMassInput.value == null) {
         errorMessageArray.push(" You didn't enter a Cargo Mass ");
         event.preventDefault();
      }
      
      alert(errorMessageArray);
     // event.preventDefault();
      
      
     // console.log("submit clicked");
      //alert("submit clicked");
   });
});



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
