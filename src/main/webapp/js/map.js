var map = L
		.map(
				"map",
				{
					key : "b5w0ip0dC0PPuyZ75hbmUPBcQK7IhO0V",
					source : "vector",
					glyphsUrl : "https://api.tomtom.com/maps-sdk-js/glyphs/v1/{fontstack}/{range}.pbf",
					spriteUrl : "https://api.tomtom.com/maps-sdk-js/sprites/v1/sprite",
					preferCanvas : true,
					inertia : false
				}, 10);

map.locate({setView: true, maxZoom: 15});

/*
 * Added Reports layer 
 */
var imported = document.createElement('script');
imported.src = 'js/ReportsLayer.js';
document.head.appendChild(imported);


var imported = document.createElement('script');
imported.src = 'js/SearchLayer.js';
document.head.appendChild(imported);

