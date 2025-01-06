import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Use named exports
import 'swiper/css/bundle';

export default function ImageSwiper({ data }) {
    return (
        <Swiper>
            <SwiperSlide>Test 1</SwiperSlide>
            <SwiperSlide>Test 2</SwiperSlide>
            <SwiperSlide>Test 3</SwiperSlide>
            <SwiperSlide>Test 4</SwiperSlide>
            <SwiperSlide>Test 5</SwiperSlide>
            <SwiperSlide>Test 6</SwiperSlide>
        </Swiper>
    );
}