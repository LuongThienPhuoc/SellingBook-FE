import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import dynamic from "next/dynamic";

const CardPurchasedList = dynamic(() => import('./CardPurchasedList'))

export default class SliderCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    <CardPurchasedList index={0}></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList index={0}></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                </Slider>
            </div>
        );
    }
}