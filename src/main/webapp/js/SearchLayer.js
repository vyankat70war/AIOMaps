var searchBoxInstance = tomtom.searchBox({
	position : "topright",
	collapsed : true
}).addTo(map);

var reportIcon = new tomtom.L.icon({
	iconUrl : "img/report.png",
	iconSize : [ 34, 34 ]
});

var markerOptions = {
	icon : reportIcon
};

var markersLayer = L.tomTomMarkersLayer();
// Marker layer to indicate the center of the search
var searchCenterLayer = tomtom.markersView().addTo(map);
searchBoxInstance.on(searchBoxInstance.Event.ResultClicked, function(result) {
	markersLayer.setMarkersData([ result.data ]).addTo(map);
	var viewport = result.data.viewport;
	if (viewport) {
		map.fitBounds([ viewport.topLeftPoint, viewport.btmRightPoint ]);
	} else {
		map.fitBounds(markersLayer.getBounds());
	}
	drawSearchCenter(result.data.position);
});

// Draw a marker at the center of the map
function drawSearchCenter(position) {
	var currentLocation = map.getCenter();
	var markerOptions = {
		title : 'Search Center\nLatitude: ' + position.lat
				+ '\nLongitude: ' + position.lon,
		icon : tomtom.L.icon({
			iconUrl : 'img/search_center.png',
			iconSize : [ 24, 24 ],
			iconAnchor : [ 12, 12 ]
		})
	};
	searchCenterLayer.clearLayers();
	searchCenterLayer.addLayer(
			tomtom.L.marker([ position.lat, position.lon ],
					markerOptions)).addTo(map);
}