

var map;

// var wmsAddr = "http://192.168.56.101/?map=/map/pokemonworld/map/map.map";
var wmsAddr = "http://esipe.geonef.fr/mapserver/pokemon-world/map";

function init() {

	map = new OpenLayers.Map('map');

	var wmsTerrain = new OpenLayers.Layer.WMS(

		"Terrain",

		wmsAddr,

		{layers: 'land,lake', format: 'image/png'}

	);


	var wmsRasterCities = new OpenLayers.Layer.WMS(

		"Raster cities",

		wmsAddr,

		{layers: 'kanto,johto,sinnoh,hoenn,almia,fiore,kalos,unys',transparent:true, format: 'image/png'}

	);


	var wmsRoad = new OpenLayers.Layer.WMS(

		"Road",

		wmsAddr,

		{layers: 'road', transparent:true,format: 'image/png'},
		{singleTile: true}

	);

	var wmsCity = new OpenLayers.Layer.WMS(

		"City",

		wmsAddr,

		{layers: 'city', transparent:true,format: 'image/png'},
		{singleTile: true}

	);

	var wmsRival = new OpenLayers.Layer.WMS(

		"Rival",

		wmsAddr,

		{layers: 'rival', transparent:true,format: 'image/png'},
		{gutter: 15}

	);


	map.addLayers([wmsTerrain,wmsRoad,wmsCity,wmsRasterCities,wmsRival]);


	map.addControl(new OpenLayers.Control.LayerSwitcher({'div':OpenLayers.Util.getElement('layerStack')}));

	map.addControl(new OpenLayers.Control.ScaleLine());
    map.addControl(new OpenLayers.Control.OverviewMap());




    info = new OpenLayers.Control.WMSGetFeatureInfo({
            url: wmsAddr,
            title: 'Identify features by clicking',
            layers: [wmsRival],
            queryVisible: true,
            eventListeners: {
                getfeatureinfo: function(event) {
                    map.addPopup(new OpenLayers.Popup.FramedCloud(
                        "chicken",
                        map.getLonLatFromPixel(event.xy),
                        null,
                        event.text,
                        null,
                        true
                    ));
                }
            }
        });
        map.addControl(info);
        info.activate();

    map.zoomToExtent(new OpenLayers.Bounds(-32.903366088867,-8.696365356445,13.854446411133,26.459884643555), true);

}
