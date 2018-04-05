function initMap() {
  var landingSpot = {lat: 28.614744, lng: -80.693694};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: landingSpot,
    styles: [
      {
        elementType: 'geometry', 
        stylers: [{color: '#dddddd'}]
      },

      {
        elementType: 'labels.text.stroke', 
        stylers: [{color: '#eaeaea'}]
      },

      {
        elementType: 'labels.text.fill', 
        stylers: [{color: '#353535'}]
      },

      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#353535'}]
      },

      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#353535'}]
      },

      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#639367'}]
      },

      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#353535'}]
      },

      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#c4c4c4'}]
      },

      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#4c4c4c'}]
      },

      {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#353535'}]
      },

      {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#990101'}]
      },

      {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#4c4c4c'}]
      },

      {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#353535'}]
      },

      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#ffb7fb'}]
      },

      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#353535'}]
      },

      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#b7eaff'}]
      },

      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#353535'}]
      },

      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#eaeaea'}]
      }
    ]
  });
  
  var marker = new google.maps.Marker({
    position: landingSpot,
    map: map
  });
}


// // init map
// var myMap;

// function initMap() {
//   // set optios for map 
//   var landingSpot = {lat: 28.614744, lng: -80.693694};
//   var mapOptions = {
//     center: landingSpot,
//     zoom: 17,
//     styles: [
//         {
//           elementType: 'geometry', 
//           stylers: [{color: '#dddddd'}]
//         },

//         {
//           elementType: 'labels.text.stroke', 
//           stylers: [{color: '#eaeaea'}]
//         },

//         {
//           elementType: 'labels.text.fill', 
//           stylers: [{color: '#353535'}]
//         },

//         {
//           featureType: 'administrative.locality',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#353535'}]
//         },

//         {
//           featureType: 'poi',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#353535'}]
//         },

//         {
//           featureType: 'poi.park',
//           elementType: 'geometry',
//           stylers: [{color: '#639367'}]
//         },

//         {
//           featureType: 'poi.park',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#353535'}]
//         },

//         {
//           featureType: 'road',
//           elementType: 'geometry',
//           stylers: [{color: '#c4c4c4'}]
//         },

//         {
//           featureType: 'road',
//           elementType: 'geometry.stroke',
//           stylers: [{color: '#4c4c4c'}]
//         },

//         {
//             featureType: 'road',
//             elementType: 'labels.text.fill',
//             stylers: [{color: '#353535'}]
//         },

//         {
//             featureType: 'road.highway',
//             elementType: 'geometry',
//             stylers: [{color: '#990101'}]
//         },

//         {
//             featureType: 'road.highway',
//             elementType: 'geometry.stroke',
//             stylers: [{color: '#4c4c4c'}]
//         },

//         {
//             featureType: 'road.highway',
//             elementType: 'labels.text.fill',
//             stylers: [{color: '#353535'}]
//         },

//         {
//           featureType: 'transit',
//           elementType: 'geometry',
//           stylers: [{color: '#ffb7fb'}]
//         },

//         {
//           featureType: 'transit.station',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#353535'}]
//         },

//         {
//           featureType: 'water',
//           elementType: 'geometry',
//           stylers: [{color: '#b7eaff'}]
//         },

//         {
//           featureType: 'water',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#353535'}]
//         },

//         {
//           featureType: 'water',
//           elementType: 'labels.text.stroke',
//           stylers: [{color: '#eaeaea'}]
//         }
//       ]

//   };

//   var marker = new google.maps.Marker({
//     position: landingSpot,
//     map: map
//   });

//   // create map and add to page
//   myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
// }

// function showDog (image){
// console.log(image)

//   var image = {
//     scaledSize: new google.maps.Size(20,32),
//     origin: new google.maps.Point (0,0),
//     url: image
//   }

//   // create a marker for de Haagse Hogeschool
//   var hhsMarker = new google.maps.Marker({
//     position: {
//       lat: 28.614744, 
//       lng: -80.693694,
//     },

//     icon: image,
//     map: myMap,
//     title: 'de Haagse Hogeschool'
//   });

// }

// function getAPIdata() {

//   // get dog names
//   fetch('https://app.ticketmaster.com/discovery/v2/events/0B004F0401BD55E5/images.json?apikey=rMIJkubIWxD5AYHJiAHdIEhEyTAsgV83')

//   // parse to JSON format
//   .then(function(response) {
//     return response.json();
//   })

//   // render weather per day
//   .then(function(response) {

//   //show Marker
//   showDog(response.message);

//   })

//   // catch error
//   .catch(function (error) {
//     console.error('Request failed', error);
//   });


// }

// // init data stream
// getAPIdata();

// {
//     "fault": {
//         "faultstring": "Invalid ApiKey",
//         "detail": {
//             "errorcode": "oauth.v2.InvalidApiKey"
//         }
//     }
// }



// type:"GET",
//   url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=rMIJkubIWxD5AYHJiAHdIEhEyTAsgV83",
//   async:true,
//   dataType: "json",
//   success: function(json) {
//               console.log(json);
//               // Parse the response.
//               // Do other things.
//            },
//   error: function(xhr, status, err) {
//               // This time, we do not end up here!
//            }













// function initMap() {
//   var landingSpot = {lat: 28.614744, lng: -80.693694};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 15,
//     center: landingSpot,
//     styles: [
//       {
//         elementType: 'geometry', 
//         stylers: [{color: '#dddddd'}]
//       },

//       {
//         elementType: 'labels.text.stroke', 
//         stylers: [{color: '#eaeaea'}]
//       },

//       {
//         elementType: 'labels.text.fill', 
//         stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'administrative.locality',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'poi',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'poi.park',
//         elementType: 'geometry',
//         stylers: [{color: '#639367'}]
//       },

//       {
//         featureType: 'poi.park',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'road',
//         elementType: 'geometry',
//         stylers: [{color: '#c4c4c4'}]
//       },

//       {
//         featureType: 'road',
//         elementType: 'geometry.stroke',
//         stylers: [{color: '#4c4c4c'}]
//       },

//       {
//           featureType: 'road',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#353535'}]
//       },

//       {
//           featureType: 'road.highway',
//           elementType: 'geometry',
//           stylers: [{color: '#990101'}]
//       },

//       {
//           featureType: 'road.highway',
//           elementType: 'geometry.stroke',
//           stylers: [{color: '#4c4c4c'}]
//       },

//       {
//           featureType: 'road.highway',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'transit',
//         elementType: 'geometry',
//         stylers: [{color: '#ffb7fb'}]
//       },

//       {
//         featureType: 'transit.station',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'water',
//         elementType: 'geometry',
//         stylers: [{color: '#b7eaff'}]
//       },

//       {
//         featureType: 'water',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'water',
//         elementType: 'labels.text.stroke',
//         stylers: [{color: '#eaeaea'}]
//       }
//     ]
//   });
  
//   var marker = new google.maps.Marker({
//     position: landingSpot,
//     map: map
//   });
// }

// function getAPIdata() {

//   // get dog names
//   fetch('https://app.ticketmaster.com/discovery/v2/events')

//   // parse to JSON format
//   .then(function(response) {
//     return response.json();
//   })

//   // render weather per day
//   .then(function(response) {

//     //show Marker
//     showEvent(response.message);

//   })

//   // catch error
//   .catch(function (xhr, status, err) {
//     console.error('Request failed', error);
//   });
// }

// // init data stream
// getAPIdata();




























// // init map
// var myMap;

// function initMap() {
//   // set optios for map 
//   var landingSpot = {lat: 28.592399, lng: -80.660912}
//   var mapOptions = {
//     center: landingSpot,
//     zoom: 17,
//     styles: [
//       {
//         elementType: 'geometry', 
//         stylers: [{color: '#dddddd'}]
//       },

//       {
//         elementType: 'labels.text.stroke', 
//         stylers: [{color: '#eaeaea'}]
//       },

//       {
//         elementType: 'labels.text.fill', 
//         stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'administrative.locality',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'poi',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'poi.park',
//         elementType: 'geometry',
//         stylers: [{color: '#639367'}]
//       },

//       {
//         featureType: 'poi.park',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'road',
//         elementType: 'geometry',
//         stylers: [{color: '#c4c4c4'}]
//       },

//       {
//         featureType: 'road',
//         elementType: 'geometry.stroke',
//         stylers: [{color: '#4c4c4c'}]
//       },

//       {
//           featureType: 'road',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#353535'}]
//       },

//       {
//           featureType: 'road.highway',
//           elementType: 'geometry',
//           stylers: [{color: '#990101'}]
//       },

//       {
//           featureType: 'road.highway',
//           elementType: 'geometry.stroke',
//           stylers: [{color: '#4c4c4c'}]
//       },

//       {
//           featureType: 'road.highway',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'transit',
//         elementType: 'geometry',
//         stylers: [{color: '#ffb7fb'}]
//       },

//       {
//         featureType: 'transit.station',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'water',
//         elementType: 'geometry',
//         stylers: [{color: '#b7eaff'}]
//       },

//       {
//         featureType: 'water',
//         elementType: 'labels.text.fill',
//         stylers: [{color: '#353535'}]
//       },

//       {
//         featureType: 'water',
//         elementType: 'labels.text.stroke',
//         stylers: [{color: '#eaeaea'}]
//       }
//     ]
//   };

//   var marker = new google.maps.Marker({
//     position: landingSpot,
//     map: map
//   });

//   // create map and add to page
//   myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
// }

// // function showEvent (image){
// //   console.log(image)

// //   var image = {
// //     scaledSize: new google.maps.Size(20,32),
// //     origin: new google.maps.Point (0,0),
// //     url: image
// //   }

// //   // create a marker for the landing spot
// //   var korftlaanMarker = new google.maps.Marker({
// //     position: {
// //       lat: 28.592399, 
// //       lng: -80.660912,

// //     },

// //     icon: image,
// //     map: myMap,
// //     title: 'Korftlaan Delft'
// //   });

// // }



// function getAPIdata() {

//   // get dog names
//   fetch('https://app.ticketmaster.com/discovery/v2/events')

//   // parse to JSON format
//   .then(function(response) {
//     return response.json();
//   })

//   // render weather per day
//   .then(function(response) {

//     //show Marker
//     showEvent(response.message);

//   })

//   // catch error
//   .catch(function (xhr, status, err) {
//     console.error('Request failed', error);
//   });
// }

// // init data stream
// getAPIdata();


