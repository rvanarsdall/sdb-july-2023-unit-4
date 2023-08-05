console.log("space x works");

async function fetchSpaceXMissionData() {
  console.log("fetch click worked");
  let url = "https://api.spacexdata.com/v3/missions";

  try {
    let response = await fetch(url);
    let data = await response.json();
    displayMissionData(data);
  } catch (error) {
    console.error(error);
  }
}

function displayMissionData(missions) {
  //   console.log(missions);
  //   mission name
  // description
  // payloads

  let containerElement = document.querySelector(".container");
  missions.forEach((mission) => {
    console.log(mission);
    console.log(mission.mission_name);
    console.log(mission.description);
    console.log(mission.payload_ids);

    // Create the Elements
    let missionTitleElement = document.createElement("h2");
    let missionDescriptionElement = document.createElement("p");
    // Update the textContent
    missionTitleElement.textContent = mission.mission_name;
    missionDescriptionElement.textContent = mission.description;
    // Build the HTML
    containerElement.appendChild(missionTitleElement);
    containerElement.appendChild(missionDescriptionElement);

    // Payloads

    // Create the unordered list
    let payloadULElement = document.createElement("ul");

    //  Create a loop for the payload items
    // inside the loop create the LI's and append them to the UL element

    mission.payload_ids.forEach((payload) => {
      // Create the element
      let payloadElement = document.createElement("li");
      //  Update the textContent
      payloadElement.textContent = payload;
      // Append it to the UL
      payloadULElement.appendChild(payloadElement);
    });

    containerElement.appendChild(payloadULElement);
  });
}
