import React, { useEffect } from 'react';
import 'swiper/css';
import { Navigation, Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './Carousel.module.css';
import CarouselLeft from './CarouselLeft/CarouselLeft';
import CarouselRight from './CarouselRight/CarouselRight';

const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
        // swiper.slideTo(0)
    }, [data]);

    return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
    return (
        <div className={styles.wrapper}>
            <Swiper initialSlide={0} slidesPerView={'auto'} spaceBetween={40} allowTouchMove navigation>
                <Controls data={data} />
                <CarouselLeft />
                <CarouselRight />
                {data.map((item, index) => (
                    <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
