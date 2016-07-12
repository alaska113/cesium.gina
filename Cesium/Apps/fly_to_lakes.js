function fly_to_lakes() {
  var lakes = viewer.dataSources.add(Cesium.GeoJsonDataSource.load('https://alaska113.github.io/lakes.txt'));
viewer.camera.flyTo({
       destination : Cesium.Cartesian3.fromDegrees(212.1505, 64.8595, 150.0),
       heading : 90.0,
   pitch : 175.0,
   roll : 25.0
});
}
