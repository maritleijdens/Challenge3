function initMap() {
  var landingSpot = {lat: 52.016563, lng: 4.380914};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: landingSpot,
    styles: [
      {
        // land
        elementType: 'geometry', 
        stylers: [{color: '#d1cfcf'}]
      },
      
      {
        // namen (straten / plaatsen) tekst lijn
        elementType: 'labels.text.stroke', 
        stylers: [{color: '#000000'}]
      },

      { 
        // Staten / landen tekst fill
        elementType: 'labels.text.fill', 
        stylers: [{color: '#ffffff'}]
      },

      {
        // namen (straten / plaatsen) tekst fill
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },

      {
        // tekst supermarkten / winkels fill
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },

      {
        // natuur
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#00873a'}]
      },

      {
        // natuur tekst
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },

      {
        // wegen
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#757575'}] 
      },

      {
        //zijkanten weg
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#494949'}]
      },

      {
        //
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },

      {
        //snelweg
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#383838'}]
      },

      {
        //snelweg rand
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1c1c1c'}]
      },

      {
        //
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },

      {
        //vliegvelden en dergelijke
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#6d0404'}]
      },

      {
        //
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },

      {
        //
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#1d2d7f'}]
      },

      {
        //
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },

      {
        //
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#ffffff'}]
      }
    ]

  });

  var contentString = 
    '<div id="content">'+
      '<h1 id="firstHeading" class="firstHeading">Landing Sport</h1>'+
      '<div id="bodyContent">'+
        '<p><b>Delftse Hout</b></p>' +
        '<p>This is where you will be landing.</p>' +
        '<p>When you are safely on the ground, </p>' +
        '<p>you will be surrounded by the nature of Earth.</p>'+
      '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: landingSpot,
    map: map,
    title: 'Delft (Zuid Holland)',
    icon: 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}









//function weather() {
//   var delft = {lat: 52.017314, lng: 4.378947};
//   var contentString = api.openweathermap.org/data/2.5/weather?id=2172797'<div id="content">'+
//     '<div id="siteNotice">'+
//     '</div>'+
//     '<h1 id="firstHeading" class="firstHeading">Delft</h1>'+
//     '<div id="bodyContent">'+
//     '<p><b>Delft</b> - Korftlaan 10, mooiste plekje van Delft</p>'+
//     '</div>'+
//     '</div>';

//   var infowindow = new google.maps.InfoWindow({
//     content: contentString
//   });

//   var marker = new google.maps.Marker({
//     position: landingSpot,
//     map: map,
//     title: 'Delft (Zuid Holland)',
//   });

//   marker.addListener('click', function() {
//     infowindow.open(map, marker);
//   });
// }