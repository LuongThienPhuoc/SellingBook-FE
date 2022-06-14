import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import dynamic from "next/dynamic";

const CardPurchasedList = dynamic(() => import('./CardPurchasedList'))

interface SliderCardProp {
    books: [],
    productType: string,
    keyword: {
        _id: string,
    },
}

export default class SliderCourses extends Component<SliderCardProp> {
    constructor(props) {
        super(props);
        console.log("props", this.props);
        this.state = {}
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
                    {
                        this.props.productType ? 
                        this.props.books ? this.props.books.map((book) => {
                            let isFind = false;
                            if((book["categoryID"] as string[]).includes(this.props.productType) 
                                || this.props.productType=="")
                            return (
                                <CardPurchasedList book={book}/>
                            )
            
                        }): null : null
                    }
                    {
                        this.props.keyword ? 
                        this.props.books ? this.props.books.map((book) => {
                            // let isFind = false;
                            // console.log((book["tagID"] as string[]).includes(this.props.keyword._id));
                            if((book["tagID"] as string[]).includes(this.props.keyword._id))
                            return (
                                <CardPurchasedList book={book}/>
                            )
            
                        }): null : null
                    }
                    {
                        !this.props.keyword && !this.props.productType && this.props.books ? this.props.books.map((book) => {
                            return (
                                <CardPurchasedList book={book}/>
                            )
                        }):null
                    }
                    {/* <CardPurchasedList index={0}></CardPurchasedList> */}
                    {/* <CardPurchasedList></CardPurchasedList>
                    
                    <CardPurchasedList index={0}></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList> */}
                </Slider>
            </div>
        );
    }
}