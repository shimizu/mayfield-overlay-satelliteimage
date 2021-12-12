import { BitmapLayer} from '@deck.gl/layers';


export function renderLayers({value}) {

  const opacity = value/100; 
  const layer = new BitmapLayer({
    id: 'bitmap-layer',
    bounds: [-88.64538, 36.73265, -88.62293, 36.75064],
    image: 'img/mayfield-2021-12-11-min.jpg',
    opacity: opacity
  });


  return [layer];
}
