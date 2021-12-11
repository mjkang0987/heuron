import {useRef, useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react/swiper-react.js';
import {Navigation, Pagination, Autoplay} from 'swiper';
import {useMediaQuery} from 'react-responsive';

import {LazyImage} from './LazyImage';

import '../styles/visual.scss';

export const Visual = ({data}) => {
    const [thisSwiper, setThisSwiper] = useState(null);
    const targetRefs = useRef([]);

    const isMobile = useMediaQuery({
        query : "(max-width:768px)"
    });

    const togglePlay = ({type}) => {
        if (thisSwiper) {
            thisSwiper.autoplay[type]();
        }
    };

    return (
        <div
            className="visual"
            onMouseEnter={() => {
                togglePlay({type: 'stop'});
            }}
            onMouseLeave={() => {
                togglePlay({type: 'start'});
            }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                loop
                pagination={{clickable: true}}
                autoplay={{delay: 4000}}
                spaceBetween={50}
                slidesPerView={isMobile ? 1 : 3}
                centeredSlides={true}
                lazy={true}
                onSwiper={(swiper) => setThisSwiper(swiper)}
                className="visual-slides">
                {data.map((slide, i) => <SwiperSlide
                    key={`slide-${slide.id}`}
                    className="slide">
                    <a href="/#">
                        <strong className="slide-title">{slide.author}</strong>
                        <LazyImage
                            ref={el => targetRefs.current[i] = el}
                            source={slide.download_url}/>
                    </a>
                    <div className="visual-title">SLIDE DESCRIPTION</div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};