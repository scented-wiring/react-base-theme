import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Label from '../../components/module-components/label/index.jsx';

export default function MySlider() {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <Label text="This is a label"/>
            </SwiperSlide>
            <SwiperSlide>
                <Label text="This is a label 2"/>
            </SwiperSlide>
            <SwiperSlide>
                <Label text="This is a label 3"/>
            </SwiperSlide>
            <SwiperSlide>
                <Label text="This is a label 4"/>
            </SwiperSlide>
            <SwiperSlide>
                <Label text="This is a label 5"/>
            </SwiperSlide>
            <SwiperSlide>
                <Label text="This is a label 6"/>
            </SwiperSlide>
            <SwiperSlide>
                <Label text="This is a label 7"/>
            </SwiperSlide>
        </Swiper>
    );
}