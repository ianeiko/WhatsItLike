angular.module('whatsitlike', []).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/app', {templateUrl: 'partials/map.html',   controller: MainApp}).
        when('/places/:place/:month', {templateUrl: 'partials/detail.html', controller: MainApp}).
        otherwise({redirectTo: '/app'});
}]);

function MainApp($scope, $http, $routeParams){
    if($routeParams.place && $routeParams.month){
        var place = $routeParams.place,
            month = $routeParams.month;

        // set view class
        document.documentElement.className = '';

        // set active month
        document.getElementById('main-nav').setAttribute('data-active', month);
        
        // fetch data
        $http.get('data/'+place+'.json').success(function(data) {
            $scope.data = data;
        });

    }else{
        // set view class
        document.documentElement.className = 'map';

        // load map
        loadMap();
    }
}

function MainNav($scope, $location){
    $scope.changeMonth = function(month){
        $location.path('/places/bali/'+month);
    }
}

function loadMap(){
    var features = [{
        "geometry": { "type": "Point", "coordinates": [103.8871694, 22.3094655]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/1/1f/Sapa3.jpg",
            "url": "#/places/bali/1",
            "city": "Sa Pa, Vietnam"
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [95.3542159,5.5640231]},
        "properties": {
            "image": "http://www.unlvasa.org/wp-content/uploads/2010/03/aceh_besar-batur_rahman.jpg",
            "url": "#/places/bali/1",
            "city": "Aceh, Indonesia"
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [103.864403,13.36866]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/7/77/Siemreap.jpg",
            "url": "#/places/bali/1",
            "city": "Siem Reap, Cambodia"
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [119.38749540042421,11.179478273369376]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/7/77/ElNido_Bay_Palawan.jpg",
            "url": "#/places/bali/1",
            "city": "El Nido, Palawan, Philippines"
        }
     }, {
         "geometry": { "type": "Point", "coordinates": [115.26004893465226,-8.458092963238881]},
         "properties": {
            "image": "http://inzumi.com/images/destinations/ID_Bali_Reiseziel_7.jpg",
            "url": "#/places/bali/1",
            "city": "Bali, Indonesia"
         }
     }];


    // Create map
    var map = mapbox.map('map');
    map.addLayer(mapbox.layer().id('jneiku.map-cz9jmzy0'));

    // Create and add marker layer
    var markerLayer = mapbox.markers.layer().features(features);
    var interaction = mapbox.markers.interaction(markerLayer);
    map.addLayer(markerLayer);

    // Set a custom formatter for tooltips
    // Provide a function that returns html to be used in tooltip
    interaction.formatter(function(feature) {
    var o = '<a href="' + feature.properties.url + '">' +
        '<img src="' + feature.properties.image + '"' + 'width="300" height="200" >' +
        '<h2>' + feature.properties.city + '</h2>' +
        '</a>';

    return o;
    });

    // Set iniital center and zoom
    map.centerzoom({
       lat: 10.36866,
       lon: 108.864403
    }, 5);

    // Attribute map
    map.ui.attribution.add()
      .content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');
}