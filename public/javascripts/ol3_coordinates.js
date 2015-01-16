var mousePositionControl = new ol.control.MousePosition({

  coordinateFormat: ol.coordinate.createStringXY(4),

  projection: 'EPSG:4326',

  // comment the following two lines to have the mouse position

  // be placed within the map.

  className: 'custom-mouse-position',

  target: document.getElementById('coordinates'),

  undefinedHTML: '&nbsp;'

});
