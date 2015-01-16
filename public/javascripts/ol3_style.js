  var image = new ol.style.Circle({

  radius: 5,

  fill: new ol.style.Fill({color: 'rgba(242,175,56,0.4)'}),

  stroke: new ol.style.Stroke({color: 'rgba(242,175,56,1)', width: 2})

  });



  var rimage = new ol.style.Circle({

  radius: 5,

  fill: new ol.style.Fill({color: 'rgba(102,204,204,0.4)'}),

  stroke: new ol.style.Stroke({color: 'rgba(102,204,204,1)', width: 2})

  });



  var prpsimage = new ol.style.Circle({

  radius: 6,

  fill: new ol.style.Fill({color: 'rgba(230,140,255,1)'}),

  stroke: new ol.style.Stroke({color: 'rgba(186,0,240,1)', width: 2})

  });



  var blueimage = new ol.style.Circle({

  radius: 5,

  fill: new ol.style.Fill({color: 'rgba(0,112,254,1)'}),

  stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1)', width: 1})

  });



  var greenimage = new ol.style.Circle({

  radius: 6,

  fill: new ol.style.Fill({color: 'rgba(0,254,0,1)'}),

  stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1)', width: 1})

  });



  var orangeimage = new ol.style.Circle({

  radius: 7,

  fill: new ol.style.Fill({color: 'rgba(254,128,0,1)'}),

  stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1)', width: 1})

  });



  var redimage = new ol.style.Circle({

  radius: 8,

  fill: new ol.style.Fill({color: 'rgba(254,0,0,1)'}),

  stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1)', width: 1})

  });



var istyles = {

  'Point': [new ol.style.Style({

    image: image

  })],

  'prps': [new ol.style.Style({

    image: prpsimage

  })],

  'point_blue': [new ol.style.Style({

    image: blueimage

  })],

  'point_red': [new ol.style.Style({

    image: redimage

  })],

  'point_green': [new ol.style.Style({

    image: greenimage

  })],

  'point_orange': [new ol.style.Style({

    image: orangeimage

  })],

  'Rooster': [new ol.style.Style({

    image: rimage

  })],

  'LineString': [new ol.style.Style({

    stroke: new ol.style.Stroke({

      color: 'green',

      width: 1

    })

  })],

  'MultiLineString': [new ol.style.Style({

    stroke: new ol.style.Stroke({

      color: 'green',

      width: 1

    })

  })],

  'MultiPoint': [new ol.style.Style({

    image: image

  })],

  'MultiPolygon': [new ol.style.Style({

    stroke: new ol.style.Stroke({

      color: 'yellow',

      width: 1

    }),

    fill: new ol.style.Fill({

      color: 'rgba(255, 255, 0, 0.1)'

    })

  })],

  'Boundary': [new ol.style.Style({

    stroke: new ol.style.Stroke({

      color: 'orange',

      width: 2

    })

  })],

  'parcel': [new ol.style.Style({

    stroke: new ol.style.Stroke({

      color: 'yellow',

      width: 1

    })

  })],

  'Polygon': [new ol.style.Style({

    stroke: new ol.style.Stroke({

      color: 'blue',

      lineDash: [4],

      width: 3

    }),

    fill: new ol.style.Fill({

      color: 'rgba(0, 0, 255, 0.1)'

    })

  })],



  'poly_blue': [new ol.style.Style({

    fill: new ol.style.Fill({

      color: 'rgba(0, 112, 254, 1)'

    })

  })],

  'poly_green': [new ol.style.Style({

    fill: new ol.style.Fill({

      color: 'rgba(0, 254, 0, 1)'

    })

  })],

  'poly_orange': [new ol.style.Style({

    fill: new ol.style.Fill({

      color: 'rgba(254, 128, 0, 1)'

    })

  })],

  'poly_red': [new ol.style.Style({

    fill: new ol.style.Fill({

      color: 'rgba(254, 0, 0, 1)'

    })

  })],

  'GeometryCollection': [new ol.style.Style({

    stroke: new ol.style.Stroke({

      color: 'magenta',

      width: 2

    }),

    fill: new ol.style.Fill({

      color: 'magenta'

    }),

    image: new ol.style.Circle({

      radius: 10,

      fill: null,

      stroke: new ol.style.Stroke({

        color: 'magenta'

      })

    })

  })],

  'Circle': [new ol.style.Style({

    stroke: new ol.style.Stroke({

      color: 'red',

      width: 2

    }),

    fill: new ol.style.Fill({

      color: 'rgba(0,254,0,0.2)'

    }),

    text: new ol.style.Text({

	    font: '12px Calibri,sans-serif',

	    fill: new ol.style.Fill({

	      color: '#000'

	    }),

	    stroke: new ol.style.Stroke({

	      color: '#fff',

	      width: 3

	    })

  	})

  })],

  'neighborhood_col': [new ol.style.Style({

    stroke: new ol.style.Stroke({

      color: 'orange',

      width: 2

    }),

    fill: new ol.style.Fill({

      color: 'rgba(255, 128, 0, 0.3)'

    })

  })],

  'neighborhood_har': [new ol.style.Style({

    stroke: new ol.style.Stroke({

      color: 'blue',

      width: 2

    }),

    fill: new ol.style.Fill({

      color: 'rgba(0, 0, 255, 0.3)'

    })

  })],

  'neighborhood_fai': [new ol.style.Style({

    stroke: new ol.style.Stroke({

      color: 'green',

      width: 2

    }),

    fill: new ol.style.Fill({

      color: 'rgba(0, 255, 0, 0.3)'

    })

  })]

};





var styleFunction = function(feature, resolution) {

	if (feature.getProperties().chrom_ppb_l > 98000){

		return istyles[feature.getGeometry().getType()];

	} else {

  	return istyles["Rooster"];

  }

};



var as_maxFunction = function(feature, resolution) {

  var value = parseInt(feature.getProperties().arsenicmax);

  if (value <= 6.5 ){

    return istyles["poly_blue"];

  } else if ((value >  6.5) && (value <= 19.5)){

    return istyles["poly_green"];

  } else if ((value >  19.5) && (value <= 102)){

    return istyles["poly_orange"];

  } else {

    return istyles["poly_red"];

  }

};



var bap_maxFunction = function(feature, resolution) {

  if (feature.getProperties().bapmax_ppb <= 530){

    return istyles["poly_blue"];

  } else if ((feature.getProperties().bapmax_ppb >  530) && (feature.getProperties().bapmax_ppb <= 1590)){

    return istyles["poly_green"];

  } else if ((feature.getProperties().bapmax_ppb >  1590) && (feature.getProperties().bapmax_ppb <= 2010)){

    return istyles["poly_orange"];

  } else {

    return istyles["poly_red"];

  }

};



var as_cocFunction = function(feature, resolution) {

  if (feature.getProperties().arseniclabmax <= 6.5 ){

    return istyles["point_blue"];

  } else if ((feature.getProperties().arseniclabmax >  6.5) && (feature.getProperties().arseniclabmax <= 19.5)){

    return istyles["point_green"];

  } else if ((feature.getProperties().arseniclabmax >  19.5) && (feature.getProperties().arseniclabmax <= 102)){

    return istyles["point_orange"];

  } else {

    return istyles["point_red"];

  }

};



var as_xrfFunction = function(feature, resolution) {

  if (feature.getProperties().arsenicxrfmax <= 6.5 ){

    return istyles["point_blue"];

  } else if ((feature.getProperties().arsenicxrfmax >  6.5) && (feature.getProperties().arsenicxrfmax <= 19.5)){

    return istyles["point_green"];

  } else if ((feature.getProperties().arsenicxrfmax >  19.5) && (feature.getProperties().arsenicxrfmax <= 102)){

    return istyles["point_orange"];

  } else {

    return istyles["point_red"];

  }

};



var bap_cocFunction = function(feature, resolution) {

  if (feature.getProperties().n04_bap_ppb_s <= 530){

    return istyles["point_blue"];

  } else if ((feature.getProperties().n04_bap_ppb_s >  530) && (feature.getProperties().n04_bap_ppb_s <= 1590)){

    return istyles["point_green"];

  } else if ((feature.getProperties().n04_bap_ppb_s >  1590) && (feature.getProperties().n04_bap_ppb_s <= 2010)){

    return istyles["point_orange"];

  } else {

    return istyles["point_red"];

  }

};



var lead_cocFunction = function(feature, resolution) {

  if (feature.getProperties().n02_lead_ppm_s <= 400 ){

    return istyles["point_blue"];

  } else if ((feature.getProperties().n02_lead_ppm_s >  400) && (feature.getProperties().n02_lead_ppm_s <= 1200)){

    return istyles["point_green"];

  } else {

    return istyles["point_red"];

  }

};



var boundaryFunction = function(feature, resolution) {

  return istyles["Boundary"];

};



var parcelFunction = function(feature, resolution) {

  return istyles["parcel"];

};



var prpsFunction = function(feature, resolution) {

  return istyles["prps"];

};



var neighborhoodFunction = function(feature, resolution) {

  if (feature.getProperties().elem_text == "Collegeville"){

    return istyles["neighborhood_col"];

  } else if (feature.getProperties().elem_text == "Harriman Park"){

    return istyles["neighborhood_har"];

  } else {

    return istyles["neighborhood_fai"];

  }

};





var neighborhoodFunction = function() {

  

  return function(feature, resolution) {

    var textStroke = new ol.style.Stroke({

      color: '#fff',

      width: 5

    });

    var textFill = new ol.style.Fill({

      color: '#000'

    });

    if (feature.getProperties().elem_text == "Collegeville"){

        return [new ol.style.Style({

          stroke: new ol.style.Stroke({

            color: 'orange',

            width: 2

          }),

          fill: new ol.style.Fill({

            color: 'rgba(255, 128, 0, 0.3)'

          }),

          text: new ol.style.Text({

            font: '16px Calibri,sans-serif',

            text: feature.get('elem_text'),

            fill: textFill,

            stroke: textStroke

          })

        })];

    } else if (feature.getProperties().elem_text == "Harriman Park"){

        return [new ol.style.Style({

          stroke: new ol.style.Stroke({

            color: 'blue',

            width: 2

          }),

          fill: new ol.style.Fill({

            color: 'rgba(0, 0, 255, 0.3)'

          }),

          text: new ol.style.Text({

            font: '16px Calibri,sans-serif',

            text: feature.get('elem_text'),

            fill: textFill,

            stroke: textStroke

          })

        })];

    } else { 

        return [new ol.style.Style({

          stroke: new ol.style.Stroke({

            color: 'green',

            width: 2

          }),

          fill: new ol.style.Fill({

            color: 'rgba(0, 255, 0, 0.3)'

          }),

          text: new ol.style.Text({

            font: '16px Calibri,sans-serif',

            text: feature.get('elem_text'),

            fill: textFill,

            stroke: textStroke

          })

        })];

    };

  }

  

}()












