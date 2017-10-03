const mapbox = require("mapbox-gl");

const iconUrls = {
    hotel: 'http://i.imgur.com/D9574Cu.png',
    food: 'http://i.imgur.com/cqR6pUI.png',
    activity: ' http://i.imgur.com/WbMOfMl.png'
}

const buildMarker = function (type, coordinates) {
    let markerDomEl = document.createElement('img');
    if (type==='hotel') {
        markerDomEl.src = iconUrls.hotel;
    } else if (type==='food') {
        markerDomEl.src = iconUrls.food;
    } else if (type==='activity') {
        markerDomEl.src = iconUrls.activity
    }
    return new mapbox.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports = buildMarker;