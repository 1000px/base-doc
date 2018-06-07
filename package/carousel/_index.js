import Carousel from './src/main';
import CarouselItem from './src/item';

/* istanbul ignore next */
export default function(Vue) {
	Vue.component(Carousel.name, Carousel);
	Vue.component(CarouselItem.name, CarouselItem);
};

export { Carousel, CarouselItem };
