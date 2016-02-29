// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com
// var newCity = '98059'
// var newCity = prompt();



if ('geolocation' in navigator) {
  $('.geolocation').show(); 
} else {
  $('.geolocation').hide();
}


// On Click, Get Geolocation, Call Weather Function
$('button').click( function() {
  
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

$(document).ready(function() {
  getWeather('Ritzville',''); //@params location, woeid
});

// Wrap Plugin, in Function to be Called
// Otherwise, runs when page loads


var getWeather = function(location) {
  
  $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('.region').text(weather.region);
      $('.title').text(weather.title);
      $('.currently').text(weather.currently);
      $('img').attr('src',weather.image)
      console.log(weather);
    
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
  
};








// $('#button').click();

// if ('geolocation' in navigator) {
//   $('.geolocation').show(); 
// } else {
//   $('.geolocation').hide();
// }

// $('button').click( function() {
  
     
//     //load weather using your lat/lng coordinates
//     navigator.geolocation.getCurrentPosition(function(position) {
//         getWeather(position.coords.latitude+','+position.coords.longitude); 
//     });
   
// });

// // $("#form").my({ui:{
// //  "#name": "newCity"
// // }}, data);


// var getWeather = function(location) {
// $.simpleWeather({
//     location: newCity,
//     woeid: '',
//     unit: 'f',
//     success: function(weather) {
      
//       // Display weather data
//       $('.temp').text(weather.temp);
//       $('.city').text(weather.city);
//       $('.region').text(weather.region);
//       $('.title').text(weather.title);
//       $('.currently').text(weather.currently);
     
      
//       $('img').attr('src',weather.image)
//       console.log(weather);
    
      
      
      
//       // Entire weather object
//       console.log(weather);
//     },
//     error: function(error) {
//       // Show if weather cannot be retreived
//     }
  
//   });
// };
  


$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });