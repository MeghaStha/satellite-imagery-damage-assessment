config={
	"layer-styles": {
		"idp-camp": {
			fillColor: "#ff9966",
			fillOpacity: 0.8,
			color: "#cccccc"
		}
	}
};


$(document).ready(function(){
    var map = L.map("map", {
        center: [27.8006, 85.3934],
        zoom: 8,
        layers: [L.tileLayer("https://{s}.tiles.mapbox.com/v4/kll.m410hgod/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2xsIiwiYSI6IktVRUtfQnMifQ.GJAHJPvusgK_f0NsSXS8QA")]
    });

    var layerControl = L.control.layers({},{},{
    	collapsed: false
    }).addTo(map);

    $.ajax({
    	url: "data/idp-camp.geojson",
    	success: function(data){
    		var geojsonLayer = L.geoJson(data).setStyle(config["layer-styles"]["idp-camp"]);
    		layerControl.addOverlay(geojsonLayer);
    	}
    })
});