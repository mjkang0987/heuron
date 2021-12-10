import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {Swiper, SwiperSlide} from 'swiper/react/swiper-react.js';
import {Navigation, Pagination, Autoplay} from 'swiper';

import '../styles/visual.scss';

export const Visual = ({data}) => {
    const [thisSwiper, setThisSwiper] = useState(null);

    useEffect(_ => {
    }, [thisSwiper, setThisSwiper]);

    return (
        <div
            className="visual"
            onMouseEnter={() => {
                if (thisSwiper) {
                    thisSwiper.autoplay.stop();
                }
            }}
            onMouseLeave={() => {
                if (thisSwiper) {
                    thisSwiper.autoplay.start();
                }
            }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                loop
                pagination={{clickable: true}}
                autoplay={{delay: 4000}}
                spaceBetween={50}
                slidesPerView={3}
                centeredSlides={true}
                lazy={true}
                onSwiper={(swiper) => setThisSwiper(swiper)}
                className="visual-slides">
                {data.slice(0, 10).map((slide, i) => <SwiperSlide
                    key={`slide-${i}`}
                    className="slide">
                    <Link to="#">
                        <strong className="slide-title">{slide.author}</strong>
                        <img
                            src={slide.download_url}
                            alt=""/>
                    </Link>
                    <div className="visual-title">SLIDE DESCRIPTION</div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};