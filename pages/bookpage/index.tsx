
import React, { useState, useEffect }from 'react'
import Layout from '../../component/Layout'
import {Grid} from '@mui/material';
import BookItem from '../../component/BookPage/BookItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ProgressBar from "@ramonak/react-progress-bar";
import Pagination from '@mui/material/Pagination';
import { makeStyles } from "@material-ui/core/styles";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import * as URL from '../../services/api/config';
import axios from 'axios';
import { useRouter } from 'next/router'

const ArrowLeft = (props) => (
    <button
        {...props}
        className='prev w-[60px] h-[60px] bg-white rounded-[100%] border-[1px] border-[#2BBCBA] 
        absolute z-10 left-[-30px] top-[30%]'
    >
        <MdArrowBackIosNew size={26} className='ml-[15px] text-[#2BBCBA]'/>
    </button>   
);

const ArrowRight = (props) => (
    <button
        {...props}
        className='next w-[60px] h-[60px] bg-white rounded-[100%] border-[1px] border-[#2BBCBA] 
        absolute z-10 right-[-30px] top-[30%]'
    >
        <MdArrowForwardIos size={26} className='ml-[17px] text-[#2BBCBA]'/>
    </button>
);

const imgUrl = [
    "https://i.pinimg.com/564x/a0/87/cd/a087cd3d2bde65f23369350e92292bce.jpg",
    "https://i.pinimg.com/564x/1f/f9/77/1ff977bac4d2551597872828c0af31e7.jpg"
]

const BookPage: React.FC = () => {  
    const [width, setDimensions] = React.useState(1200);
    const router = useRouter();
    React.useEffect(() => {
        function handleResize() {
            setDimensions(typeof window !== undefined ? window.innerWidth: 800)
            settings.slidesToShow = width / 340; 
        }
        if(typeof window != undefined)
            window.addEventListener('resize', handleResize)
    })
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: width / 350,
        slidesToScroll: 1,
        nextArrow: <ArrowRight/>,
        prevArrow: <ArrowLeft/>
    };

    const data = [ 10,10,199,89,1443];

    const ratingConcreteRender = (data) => {
        var sum = 0;
        data.forEach(a => {
            if(typeof a == 'number')
                sum += a;
        });
        console.log("sum", sum)
        var totalScore = 0;
        data.forEach((a, index) => {
            if(typeof a == 'number')
                totalScore += a *  (index+1);
        });


        return (
            <div 
                className='rating-container 
                    mr-[12px] 
                '
            >
                <div className='rating-overall'>
                    <div className='
                        rating-heading
                        flex
                    '>
                        <div 
                            className='rating-score
                                font-primary font-[600]
                                text-[36px]
                                leading-[54px]
                            '
                        >
                            {Math.floor(totalScore*10/sum)/10}
                        </div>
                        <div className='
                            rating-comment-overall
                            flex flex-col
                            mt-[7px] ml-[4px]
                        '> 
                            <div 
                                className='rating-detail
                                    flex'
                            >
                                {
                                    Array.from(Array(Math.floor(totalScore/sum)).keys()).map(()=>{
                                        return(<AiFillStar color={'FFD25E'} size={20}/>)
                                    })
                                }
                                {
                                    Array.from(Array(5 - Math.floor( totalScore/sum)).keys()).map(()=>{
                                        return(<AiOutlineStar color={'FFD25E'} size={20}/>)
                                    })
                                }
                            </div>
                            <div className='
                                comment-count 
                                text-[12px]
                            '>
                                <span>{sum}</span> nh???n x??t
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='rating-detail'>
                <div 
                className='comment-concrete-container
            '>
                    {
                        data.slice(0).reverse().map((item, index)=> {
                            return (
                                <div className='star-container
                                    flex
                                '>
                                    <div className='comment-star-concrete
                                        flex
                                    '>
                                        {
                                            Array.from(Array(5-index).keys()).map(()=>{
                                                return(<AiFillStar color={'FFD25E'}/>)
                                            })
                                        }
                                        {
                                            Array.from(Array(index).keys()).map(()=>{
                                                return(<AiOutlineStar color={'FFD25E'}/>)
                                            })
                                        }
                                    </div>
                                    <ProgressBar 
                                        
                                        completed={item*100/sum} 
                                        isLabelVisible={false} 
                                        height='6px'
                                        className='
                                            mt-[5px]
                                            ml-[8px]
                                            w-[40%]
                                        '
                                    />
                                    <div className='comment-count-concrete
                                        text-[10px] font-primary font-[600]
                                        ml-[8px]
                                    '>
                                        {item}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                </div>
            </div>
            
        );
    }

    const comments = [
        {
            userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
            username: 'Nguy???n C??ng Phi',
            star: 5,
            time: '2022/04/22',
            content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        },  
        {
            userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
            username: 'Nguy???n C??ng Phi',
            star: 5,
            time: '2022/04/22',
            content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        }, 
        {
            userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
            username: 'Nguy???n C??ng Phi',
            star: 5,
            time: '2022/04/22',
            content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        }, 
        {
            userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
            username: 'Nguy???n C??ng Phi',
            star: 5,
            time: '2022/04/22',
            content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        }, 
        {
            userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
            username: 'Nguy???n C??ng Phi',
            star: 5,
            time: '2022/04/22',
            content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        }, 
        {
            userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
            username: 'Raiden',
            star: 5,
            time: '2022/03/22',
            content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        }, 
        {
            userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
            username: 'Raiden',
            star: 5,
            time: '2022/03/22',
            content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        }, 
        {
            userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
            username: 'Raiden',
            star: 5,
            time: '2022/03/22',
            content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        }, 
        {
            userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
            username: 'Raiden',
            star: 5,
            time: '2022/03/22',
            content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        }, 
        {
            userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
            username: 'Raiden',
            star: 5,
            time: '2022/03/22',
            content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        }, 
        {
            userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
            username: 'Raiden',
            star: 5,
            time: '2022/03/22',
            content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        }, 
        {
            userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
            username: 'Raiden',
            star: 5,
            time: '2022/03/22',
            content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        }, 
        {
            userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
            username: 'Raiden',
            star: 5,
            time: '2022/03/22',
            content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        }, 
        // {
        //     userAvatar: 'https://i.pinimg.com/736x/ac/8d/41/ac8d41fffb15f91c58e62b679e998bbc.jpg',
        //     username: 'Nguy???n C??ng Phi',
        //     star: 4,
        //     time: new Date('2022-04-22'),
        //     content: 'Kh??ng gi???ng v???i nhi???u t??c ph???m tr?????c ???? c???a Nguy???n Nh???t ??nh, Ng???i kh??c tr??n c??y ???????c nh?? v??n ????a v??o nhi???u ngh???ch c???nh ??o le, bi th????ng nh???m th??? th??ch c??c nh??n v???t v?? gi??p h??? tr?????ng th??nh h??n v??? m???t t??nh c???m theo th???i gian. T??c ph???m ???? n???m trong t???p nh???ng quy???n s??ch Vi???t Nam ???????c nhi???u ng?????i ?????t mua nh???t n??m 2013 theo th???ng k?? c???a nhi???u h??? th???ng ph??n ph???i s??ch tr???c '    
        // }
    ]

    const refineDateTime = (dateTime) => {
        var dateTimeSplit = dateTime.split('/');
        return dateTimeSplit[2] + '/' + dateTimeSplit[1] + '/' + dateTimeSplit[0];
    }

    const calculateDate = (dateTime) => {
        let commentDate: Date = new Date(dateTime);
        commentDate.setHours(0,0,0,0);
        let currentDate: Date = new Date();
        currentDate.setHours(0,0,0,0);
        var diff = Math.abs(currentDate.getTime() - commentDate.getTime())/1000/60/60/24;
        console.log('diff', diff);
        return `${diff} ng??y tr?????c`;  
    }

    const commentItem = (comment) => {
        return (
            <div className ='comment-item-container border-[1px] border-[#333] rounded-[12px] w-[100%] flex font-primary font-[600] mb-3'>
                <div className='avatar-container'>
                    <img 
                        className={
                            'comment-avatar '
                            +'w-[75px] h-[75px] '
                            +'mx-[20px] my-[15px] '
                            +' rounded-[100%]'
                        }
                        src={comment.userAvatar}
                    >
                    </img>
                </div>
                <div className={
                    'comment-detail-container '+ 
                    'mt-[15px] w-[80%]'
                }>
                    <div className={'comment-heading ' + 
                        'flex relative w-[100%]'
                    }>
                        <div className='username'>
                            {comment.username}
                        </div>  
                        <div className='star flex mt-[2px]'>
                            <div className='star-num ml-[20px] leading-5 mr-1'>
                                {comment.star}
                            </div>
                            {
                                Array.from(Array(comment.star).keys()).map(()=>{
                                    return(<AiFillStar color={'FFD25E'} size={20}/>)
                                })
                            }
                            {
                                Array.from(Array(5 - comment.star).keys()).map(()=>{
                                    return(<AiOutlineStar color={'FFD25E'} size={20}/>)
                                })
                            }
                        </div>
                        <div className='comment-time ml-[20px] '>
                            <span className='time'>
                                {refineDateTime(comment.time)}
                            </span>
                            <span className='calculate-time ml-1'>
                                {'(' + calculateDate(comment.time) +')'}
                            </span>
                            
                        </div>
                        <div className={'divider ' + 
                            'w-[calc(108%-24px)] absolute h-[1px] bg-[#c5c5c5] ' +
                            'top-[28px]'
                        }>
                            
                        </div>

                        
                    </div>
                    <div className={'comment-content '+ 'mt-3 w-[calc(100%+20px)] mb-3'}>
                        {comment.content}
                    </div>
                </div>
                
            </div>
        );
    }

    const useStyles = makeStyles({
        root: {
          "& .MuiPagination-ul": {
            textAlign: 'center',
            display: 'flex',
            justifyContent: "center",
            "& > li": {
                "& button": {
                    borderRadius: "50%",
                    border: "none",
                    width: "40px",
                    height: "40px",
                    boxShadow: 'rgba(0, 0, 0, 0.35) 2px 2px 10px',
                    fontFamily: 'Nunito',
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '40px'
                },
            },
            "& .Mui-disabled": {
                background: "#ffffff",
                opacity: '0.25'
            },
            '& .Mui-selected': { 
                backgroundColor: '#2BBCBA',
                color: "#ffffff",
                
            },
            "& > li:first-child": {
              "& button": {
                borderRadius: "50%",
                width: "40px",
                height: "40px",
              },
            },
            "& > li:last-child": {
              "& button": {
                borderRadius: "50%",
                width: "40px",
                height: "40px",
              },
            },
          },
        },
    });

    const renderCommentItems = (comments) => {
        const classes = useStyles();
        let itemPerPage: number = 5;
        const [currentIndex, changeCurrentIndex]  = useState(0);
        const handleChangePage = (page) => {
            console.log("page", page);
            changeCurrentIndex(page - 1);
        }

        return (
            <div className='comment-and-pagination'>
                <div 
                    className='comments-concrete-container 
                        xs:mt-[24px]
                        md:mt-[24px]
                        lg:mt-[24px] 
                        xl:mt-0 xl:ml-[20px]

                '>
                    {
                        comments.map((comment, index) =>{
                            if(index >= currentIndex*itemPerPage && index < (currentIndex+1)*itemPerPage)
                                return (<div>{commentItem(comment)}</div>);
                            else return null;
                        })
                    }
                </div>
                <div
                    className={classes.root + ' mt-4'}
                >
                    <Pagination 
                        count={Math.ceil(comments.length/itemPerPage)} 
                        variant="outlined" 
                        onChange={(e, page) => handleChangePage(page)}
                    />
                </div>
                
            </div>
            
        )
    }

    const url = window.location.pathname;
    const path = url.split("/").filter((x) => x);

    console.log("path", path);
    useEffect(() => {
        const getConcreteProduct = async() => {
            var categoryList;
            await axios.get(URL.URL_PRODUCT)
                .then((data)=>{
                    categoryList = data.data;
                })
                .catch((error)=>{
                    // navigate to login
                    router.push('/login')
                    console.log(error)
                })
        }
        getConcreteProduct();
    }, [])

    return (
        <Layout activeNav={"book"}>
            <div className='page-wrapper px-[86px]'>

                <div className='book-heading-container mt-16 
                    shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]
                    rounded-[12px]'>
                    <Grid container spacing={2} >
                        <Grid item xs={12} lg={3} md={4} sm={12} className='p-0 pl-9'>
                            <div className='image-container pt-8 flex justify-around'>
                                {/* <img 
                                    src="https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg" 
                                    alt="S??ch ng???i kh??c tr??n c??y" 
                                    className='w-[calc(100%-24px)] pl-[18px]'
                                /> */}
                                {/* <Carousel className='carousel-slider picture-slider w-[calc(100%-24px)]' showThumbs={false} axis='horizontal'>
                                    {
                                        imgUrl ? imgUrl.map((imgUrl) =>{
                                            return (
                                                <div className='question-picture-container pl-[18px]'>
                                                    <img className='question-picture object-contain'
                                                        src={imgUrl}
                                                    >
                                                    </img>
                                                </div>
                                            )
                                        }): null
                                    } 
                                </Carousel> */}
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6} md={7} sm={12} className='mt-[32px] pl-[22px]'>
                            <div className='detail-container pl-[22px]'>
                                <p className='font-bold text-3xl font-primary mb-[10px]'>
                                    Ng???i kh??c tr??n c??y
                                </p>
                                <div className='w-16 bg-[#2BBCBA] h-1 rounded-sm mb-[14px]'>

                                </div>
                                <div className="descrip-container">
                                    <div className='price-container flex mb-3'>
                                        <p className='price font-primary text-2xl font-[700]'>
                                            143.000
                                        </p>
                                        <p className='currentcy font-primary text-lg font-[600] ml-[3px]'>
                                            VN??
                                        </p>
                                    </div>
                                    <div className='description text-[14px] mb-[15px] font-primary font-[600]'>
                                        T??n s??ch c?? l??m b???n t?? m??? ???Ng???i kh??c tr??n c??y??? c?? v??? l?? m???t truy???n h??nh ?????ng c???a nh?? v??n Nguy???n Nh???t ??nh?
                                        B???n s??? g???p, sau nh???ng c??u th?? l??ng m???n c???a ch??nh t??c gi??? l??m ????? t???, l?? cu???c s???ng trong m???t ng??i l??ng th?? m???ng ven s??ng, k??? ngh??? h?? v???i nh??n v???t l?? nh???ng ?????a tr??? m???i l???n c?? v?? v??n tr?? ch??i ????n s?? h???p d???n ghi d???u m??i trong l??ng.
                                        C??u chuy???n c???a c?? b?? R??a v?? ch??ng sinh vi??n v???n ??? qu?? chuy???n ra th??nh ph??? c?? gi???ng nh?? b???n t???ng c?? th???i ??i h???c?
                                        V?? c??i c??ch h??? thinh th??ch, r???i th????ng nhau gi???u gi???m, s??? l??m nhau bu???n, mong m???i g???p nhau ?????n m???t ng?????? c?? ph???i l?? m???i t??nh ?????u gi???ng nh?? c???a b???n?
                                    </div>
                                    <div className='amount-display flex mb-2 font-primary'>
                                        <p>C??n</p>
                                        <p className='amount-number mr-[4px] ml-[4px] text-[#2BBCBA] font-[600]'>23</p>
                                        <p>cu???n</p>
                                    </div>
                                    <div className='buy-section flex mb-[60px]'>
                                        <div className='quantity-choosing flex mr-[27px]'>
                                            <div className='decreasing-button h-[40px] w-[24px] leading-[40px] text-center border-[1px] '>-</div>
                                            <input type='number' className='border-[1px] w-[40px] h-[40px] text-center' defaultValue={1}/>
                                            <div className='increasing-button h-[40px] w-[24px] leading-[40px] text-center border-[1px]'>+</div>
                                        </div>
                                        <div className='buy-button text-[16px] leading-[40px] bg-[#2BBCBA] px-[20px] text-white rounded-[4px]'>
                                            MUA H??NG
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={3} md={12} sm={12} className='flex '>
                            <div className='divider w-[1px] h-[calc(100%-40px)] bg-[#c5c5c5] mr-[10px] ml-[-1px]'></div>
                            <div className='book-info w-[calc(100%-20px)] h-[250px] text-[16px] border-[1px] border-[#2BBCBA] 
                                    pl-[20px] p-[20px] rounded-[12px]
                                    mb-[40px]
                            '>
                                <div className='description-item flex'>
                                    <p className="text-[#808080]">T??c gi???:</p>
                                    <p className='ml-[4px] text-[#555555]'> Nguy???n Nh???t ??nh</p>  
                                </div>
                                <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] mb-[8px] mt-[-6px]'></div>
                                <div className='description-item flex'>
                                    <p className="text-[#808080]">Nh?? xu???t b???n:</p>
                                    <p className='ml-[4px] text-[#555555]'> Nh?? xu???t b???n tr???</p>  
                                </div>
                                <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] mb-[8px] mt-[-6px]'></div>
                                <div className='description-item flex'>
                                    <p className="text-[#808080]">D???ng b??a:</p>
                                    <p className='ml-[4px] text-[#555555]'> B??a m???m</p>  
                                </div>
                                <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] mb-[8px] mt-[-6px]'></div>
                                <div className='description-item flex'>
                                    <p className="text-[#808080]">T??nh tr???ng:</p>
                                    <p className='ml-[4px] text-[#555555]'> C??n h??ng</p>  
                                </div>
                                <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] mb-[8px] mt-[-6px]'></div>
                                <div className='description-item flex'>
                                    <p className="text-[#808080]">N??m ph??t h??nh:</p>
                                    <p className='ml-[4px] text-[#555555]'>2013</p>  
                                </div>  
                            </div>
                        </Grid>
                        
                    </Grid>
                </div>  
                
                <div className='book-description mt-16 
                    shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]
                    rounded-[12px] w-[100%]'>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12} md={12} lg={1}>
                            <div 
                                className='description-label text-[#2BBCBA] ml-[18px] mt-[18px] 
                                    mb-[10px] text-[20px] font-primary'
                            >
                                M?? t???
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12}  md={12} lg={11} className='flex'>
                            <div className='divider w-[1px] h-[calc(100%-40px)] bg-[#C5C5C5] mt-[20px]'></div>
                            <div className='description-content text-[14px] ml-[18px] py-[18px] mr-[18px]'>
                                N?????c m???t ????u ph???i ch??? d??nh cho n???i bu???n khi ng?????i ta c?? th??? kh??c v?? ni???m vui v?? h???nh ph??c. V???i Nguy???n Nh???t ??nh n?????c m???t c??n l?? m???t c??i g?? ???? thi??ng li??ng, ?????p ????? v?? ?????y m?? m???ng khi ??ng k??? v??? c??u chuy???n t??nh y??u trong s??ng v?? ng??y th?? gi???a c?? b?? R??a v?? anh ch??ng ????ng trong truy???n ng???n ???Ng???i kh??c tr??n c??y???.
                                T??nh y??u trong s??ng nh?? ????a hoa v???a ch???m n???.
                                R??a l?? c?? b?? c???a thi??n nhi??n, h???n nhi??n, trong s??ng nh??ng l???i ?????y kh?? ch???t m???nh m???. Ho??n c???nh c?? c???c t??? nh??? ???? cho em m???t s??? c???ng r???n, v???i m??i t??c ch??y n???ng tr??n khu??n m???t kh??? ??i. C??n ????ng l?? c???u sinh vi??n th??nh ph??? v??? th??m qu??, l?? ?????a duy nh???t ch??i v???i con R??a, n??i chuy???n, l???ng nghe, v?? ?????ng t??nh v???i n??.
                                T??m h???n ch??ng ?????ng ??i???u v??o nhau nh?? nh???ng ????a hoa d???i m???i ch???m n??? ???? v???i h??a quy???n h????ng th??m ph???ng ph???t ?????u m??a. N??? h??n ?????u v???ng d???i trong khu v?????n  ???? di???n ra m???t c??ch nh??? nh??ng, b??? ng??? m?? c??ng th???t ????ng y??u. C??i ng?????ng ?????n ch??n m???t c???a ????ng khi c??? hai m??i k??? m??i ???????c t??c gi??? mi??u t??? m???t c??ch t??? m??? ???? b??o hi???u cho m???t t??nh y??u trong s??ng, h???n nhi??n ??ang n???y n???.
                                Xem ti???p review s??ch: Ng???i kh??c tr??n c??y-n?????c m???t c?? ch??? d??nh ri??ng cho ni???m ??au?
                                Gi?? s???n ph???m tr??n Goodbook ???? bao g???m thu??? theo lu???t hi???n h??nh. B??n c???nh ????, tu??? v??o lo???i s???n ph???m, h??nh th???c v?? ?????a ch??? giao h??ng m?? c?? th??? ph??t sinh th??m chi ph?? kh??c nh?? ph?? v???n chuy???n, ph??? ph?? h??ng c???ng k???nh, thu??? nh???p kh???u (?????i v???i ????n h??ng giao t??? n?????c ngo??i c?? gi?? tr??? tr??n 1 tri???u ?????ng).....
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className='book-detail-addition mt-16 
                    shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]
                    rounded-[12px] w-[100%]'>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12} md={12} lg={1}>
                            <div 
                                className='description-label text-[#2BBCBA] ml-[18px] 
                                    mt-[18px] mb-[10px] text-[20px] font-primary'>
                                Th??ng tin b??? sung
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12}  md={12} lg={11} className='flex'>
                            <div className='divider w-[1px] h-[calc(100%-40px)] bg-[#C5C5C5] mt-[20px]'></div>
                            <div className='detail-content w-[calc(100%-40px)] text-[14px] ml-[18px] py-[18px] mr-[18px]'>
                                <div className='description-item flex'>
                                    <p className="text-[#808080]">S??? trang:</p>
                                    <p className='ml-[4px] text-[#555555]'>694</p>  
                                </div>
                                <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] mb-[8px] mt-[-6px]'></div>
                                <div className='description-item flex'>
                                    <p className="text-[#808080]">K??ch th?????c:</p>
                                    <p className='ml-[4px] text-[#555555]'>16 x 24 cm</p>  
                                </div>
                                <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] mb-[8px] mt-[-6px]'></div>
                                <div className='description-item flex'>
                                    <p className="text-[#808080]">Nh?? xu???t b???n:</p>
                                    <p className='ml-[4px] text-[#555555]'> Nh?? xu???t b???n tr???</p>  
                                </div>
                                <div className='divider w-[calc(100%-10px)] h-[1px] bg-[#c5c5c5] mb-[8px] mt-[-6px]'></div>
                                <div className='description-item flex'>
                                    <p className="text-[#808080]">T??? kho??:</p>
                                    <p className='ml-[4px] text-[#555555]'> Nguy???n Nh???t ??nh, R??a, ????ng, Ng???i kh??c tr??n c??y</p>  
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='relative-book-section 
                    shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]
                    rounded-[12px] w-[100%] mt-[62px] pb-[18px] pl-[18px] mb-[62px]'>
                        <div 
                            className='description-label text-[#2BBCBA] 
                                pt-[28px] mb-[24px] text-[20px] font-primary'
                        >
                            S???n ph???m li??n quan
                        </div>
                        <div className="bookitem-container">
                            <Slider {...settings} className='relative'>
                                <div>
                                    <BookItem remain={false}/>
                                </div>
                                <div>
                                    <BookItem remain={true}/>
                                </div>
                                <div>
                                    <BookItem remain={true}/>
                                </div>
                                <div>
                                    <BookItem remain={true}/>
                                </div>
                                <div>
                                    <BookItem remain={true}/>
                                </div>
                                <div>
                                    <BookItem remain={true}/>
                                </div>
                                <div>
                                    <BookItem remain={true}/>
                                </div>
                                <div>
                                    <BookItem remain={true}/>
                                </div>
                            </Slider>

                        </div>
                        
                </div>
                <div className='comment-section
                    shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]
                    rounded-[12px] w-[100%] mt-[62px] pb-[18px] pl-[18px] mb-[62px]'>
                    <Grid 
                        xs={12} md={12} lg={12} 
                        className='title 
                            font-primary text-[#2BBCBA] font-[500] text-[20px]
                            mt-[38px] pt-[28px]
                        '
                    >
                        Nh???n x??t, ????nh gi?? t??? kh??ch h??ng
                    </Grid>
                    <Grid container 
                        className='comment-container mt-[16px]'
                    >
                        <Grid item xs={12} md={12} lg={3}
                            className='rating-grid relative'
                        >
                            {ratingConcreteRender(data)}
                           <div 
                                className='divider 
                                    h-[100%] w-[1px] 
                                    bg-[#C5C5C5]
                                    absolute
                                    top-0
                                    right-[6px]
                                    md:hidden xs:hidden sm:hidden lg:hidden xl:block
                                '
                            ></div>

                        </Grid>
                        <Grid 
                            item xs={12} md={12} lg={9}
                            className='comment-grid'
                        >
                            <div 
                                className='comment-container 
                                    mr-[12px] 
                                '
                            >
                                {renderCommentItems(comments)}
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>
            
        </Layout>
    )
}


export default BookPage