import React from 'react'
import SwiperCore, { EffectCoverflow, Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);

const slide_img = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
  ];

const BlogGallery = () =>{
    return(
        <section className="flex flex-col w-full min-h-screen items-center bg-burgundy text-sand-dollar">
                <h2 className='text-6xl mt-8'>
                    Blogs
                </h2>
                <h3 className='text-xlp p-8'>
                    Come check out my blogs on my products and services
                </h3>
            <div className='bg-burnt-orange p-8 rounded-md'>
                <Swiper
                
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
                }}
                pagination={true}
                className="h-100 w-80 md:w-150 md:h-120"
            >
            {slide_img.map((img, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img src={img} alt="" />
                    </SwiperSlide>
                );
                })}
                </Swiper>
            </div>
            <button className='bg-transparent m-10 hover:bg-gold ease-out duration-300 text-gold font-semibold hover:text-white py-2 px-4 border border-gold hover:border-transparent rounded'>
                Check Out More
            </button>
        </section>

    )
}

export default BlogGallery;