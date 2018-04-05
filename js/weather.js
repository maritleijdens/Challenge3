  var map;
  var geoJSON;
  var request;
  var gettingData = false;
  var openWeatherMapKey = "b8f7877e283d19ebfc5dfc047f5a35cc"

  function initialize () {
    var myLatLng {lat: 52.017314, lng: 4.378947};

    var contentString = api.openweathermap.org/data/2.5/weather?id=2757344;

  	var infowindow = new google.maps.InfoWindow({
	    content: contentString
	  });

	  var marker = new google.maps.Marker({
	    position: myLatLng,
	    map: map,
	    title: 'Delft (Zuid Holland)',
	    icon: icon
	  });

	  marker.addListener('click', function() {
	    infowindow.open(map, marker);
	  });

  }
