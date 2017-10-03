const mapbox = require("mapbox-gl");
const buildMarker = require("./marker");

mapbox.accessToken = "pk.eyJ1IjoiZS1yLWktay1hIiwiYSI6ImNqOGJyZmZydzAxM2QyeG1vcGlkYWVmM2kifQ.ESUq8I1NX4NwbZ8iqxIaZQ";

const map = new mapbox.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/satellite-streets-v10' // mapbox has lots of different map styles available.
});

const FSmarker = buildMarker("activity", [-74.009151, 40.705086]);
FSmarker.addTo(map);

// const markerDomEl = document.createElement("img"); // Create a new, detached DIV
// // markerDomEl.style.width = "32px";
// markerDomEl.style.height = "50px";
// markerDomEl.src = "../public/imHere.png"

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);