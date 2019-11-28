function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {
            lat: 55.879643,
            lng: -4.377434
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        {
            lat: 55.879643,
            lng: -4.377434
        }

    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}