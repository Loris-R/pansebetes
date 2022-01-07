const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5.3699525, 43.2961743], // starting position
      zoom: 12
    });
    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');
    const address = document.querySelector('#address');
    map.on('load', function () {
      directions.setDestination(address.textContent); // can be address
    });
  };
};
// destination.textContent = address.textContent;

export { initMapbox };