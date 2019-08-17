import 'ol/ol.css';
import {Map, View} from 'ol';
import {getCenter} from 'ol/extent.js';
import ImageLayer from 'ol/layer/Image.js';
import {defaults as defaultControls, FullScreen} from 'ol/control.js';
import {defaults as defaultInteractions} from 'ol/interaction.js';
import Projection from 'ol/proj/Projection.js';
import Static from 'ol/source/ImageStatic.js';

  var extent = [0, 0, 400, 300];
  var projection = new Projection({
    code: 'br-map',
    units: 'pixels',
    extent: extent
  });

var map = new Map({
  controls: defaultControls().extend([
    new FullScreen()
  ]),
  target: 'map',
        interactions: defaultInteractions({
          constrainResolution: true, onFocusOnly: true
        }),
  layers: [
    new ImageLayer({
      source: new Static({
        attributions: '© <a href="https://ashesofcreation.wiki/Ashes_of_Creation_Wiki:General_disclaimer">Map image is property of Intrepid Studios</a>',
        url: 'https://ashesofcreation.wiki/images/1/14/APOC-battlegrounds-map.jpg',
        projection: projection,
        imageExtent: extent
      })
    })
  ],
  view: new View({
    projection: projection,
    center: getCenter(extent),
    zoom: 1.8,
    minZoom: 1,
    maxZoom: 4
  })
});
