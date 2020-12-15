// Write your JavaScript code here!
window.addEventListener("load", async function() {
   let form = document.getElementById("launchForm");
   let missionTargetDestination = document.getElementById("missionTarget");
   let randumNumber = Math.floor((Math.random())*6);

   try {
      let res = await fetch('https://handlers.education.launchcode.org/static/planets.json');
      let data = await res.json();
      console.log(data);
      missionTargetDestination.innerHTML = 
      `<h2>Mission Destination</h2>
      <ol>
         <li>Name: ${data[randumNumber].name}</li>
         <li>Diameter: ${data[randumNumber].diameter}</li>
         <li>Star: ${data[randumNumber].star}</li>
         <li>Distance from Earth: ${data[randumNumber].distance}</li>
         <li>Number of Moons: ${data[randumNumber].moons}</li>
      </ol>
      <img src="${data[randumNumber].image}">`
      ;

   } catch (err) {
      console.error(err);
   }


   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         //fuelLevelInput = Number(fuelLevelInput.value);
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
         //cargoMassInput = Number(cargoMassInput.value);
      let errorMessageArray = [];
      let readyForLaunch = false;
      let numberArray = [0,1,2,3,4,5,6,7,8,9];

     document.getElementById("pilotStatus").innerHTML = `Our Pilot, ${pilotNameInput.value}, is ready.`;
     document.getElementById("copilotStatus").innerHTML = `Our Co-Pilot, ${coPilotNameInput.value}, is ready.`;


      function isNumber(value) {
         let retVal = false;
         for(let i = 0; i < value.length; i++) {
            let parsed = Number(value[i])
            if(!isNaN(parsed)) {
               retVal = true;
            }
         }
         return retVal;
       }

       
       if(isNumber(pilotNameInput.value)) {
         errorMessageArray.push(" Are you sure that the Pilot name contains a number? ");
         event.preventDefault();
       }

       if(isNumber(coPilotNameInput.value)) {
         errorMessageArray.push(" Are you sure that the Co-Pilot name contains a number? ");
         event.preventDefault();
       }
       

      if(pilotNameInput.value === '' || pilotNameInput.value == null) {
         errorMessageArray.push(" You didn't enter a Pilot Name ");
         document.getElementById("pilotStatus").innerHTML = `Our Pilot is not ready.`;
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
         readyForLaunch = false;
         event.preventDefault(); 
      }

      if(coPilotNameInput.value === '' || pilotNameInput.value == null) {
         errorMessageArray.push(" You didn't enter a Co-Pilot Name ");
         document.getElementById("copilotStatus").innerHTML = `Our Co-Pilot is not ready.`;
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
         readyForLaunch = false;
         event.preventDefault();
      }

      if(fuelLevelInput.value === '' || fuelLevelInput.value == null) {
         errorMessageArray.push(" You didn't enter a Fuel Level ");
         readyForLaunch = false;
         event.preventDefault();
      }

      if(cargoMassInput.value === '' || cargoMassInput.value == null) {
         errorMessageArray.push(" You didn't enter a Cargo Mass ");
         readyForLaunch = false;
         event.preventDefault();
      }

      document.getElementById("launchStatus").style.color = "green";
      document.getElementById("launchStatus").innerHTML = "Shuttle is ready for Launch"
      fuelLevelInput = Number(fuelLevelInput.value);
      cargoMassInput = Number(cargoMassInput.value);

      if(fuelLevelInput < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey.";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
         readyForLaunch = false;
      }

      if(cargoMassInput > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off.";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
         readyForLaunch = false;
      }


      if(fuelLevelInput >= 10000) {
         document.getElementById("fuelStatus").innerHTML = "There is enough fuel for the journey.";
         readyForLaunch = true;
      }

      if(cargoMassInput <= 10000) {
         document.getElementById("cargoStatus").innerHTML = "Cargo Mass is low enough for Launch.";
         readyForLaunch = true;
      }
      

      if(fuelLevelInput >= 10000 && cargoMassInput <= 10000) {
         document.getElementById("fuelStatus").innerHTML = "There is enough fuel for the journey.";
         document.getElementById("cargoStatus").innerHTML = "Cargo Mass is low enough for Launch.";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
         document.getElementById("launchStatus").style.color = "green";
         readyForLaunch = true;
      }

      if(pilotNameInput.value === '' || coPilotNameInput.value === '') {
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
      }
      
      if(errorMessageArray.length === 0 && document.getElementById("launchStatus").style.color === "green") {
         errorMessageArray.push("We're ready for Liftoff!");
      }


      alert(errorMessageArray);
      event.preventDefault();
   });
});




