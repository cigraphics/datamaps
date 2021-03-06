define([
  'underscore',
  'app/views/Map',
  'app/views/MapOptions',
  'app/data/world-countries-and-us-states-build'
], function(_, Map, MapOptions, features) {

  var MapWithFeatures = Map.extend({
    options: _.extend(MapOptions, {
      pathData: features,
      scope: 'world'
    })
  });

  //don't namespace this
  /*if (window.define && window.define.amd) {
    window.define( "Map", [], function () { return MapWithFeatures; } );
  } else {
    window.Map = MapWithFeatures;
  }*/

  return MapWithFeatures;


});