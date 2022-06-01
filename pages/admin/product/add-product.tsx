
import React, { useState, useEffect }from 'react'
import Layout from '../../../component/Layout'
import {Button, Container, Grid} from '@mui/material';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const NavigationMobile = dynamic(() => import('../../../component/Admin/NavigationMobile'))
const Navigation = dynamic(() => import('../../../component/Admin/Navigation'))
import {getCategory} from '../../../redux/actions/categoryAction'; 
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import * as URL from '../../../services/api/config'
import axios from 'axios';

interface ProductTypeItem {
    _id: string,
    type: string,
}

const AddBook: React.FC = () => {  
    const dispatch = useDispatch();

    // Lấy tất cả product type
    useEffect(() => {
        const getAllCategory = async() => {
            console.log("dispatch category rồi");
            var categoryList;
            await axios.get(URL.URL_CATEGORY)
                .then((data)=>{
                    categoryList = data.data;
                })
                .catch((error)=>{
                    console.log(error)
                })
            dispatch(getCategory([...categoryList.categories]));
        }
        getAllCategory();
    }, [])

    useSelector((state:RootStateOrAny) => {
        console.log("state", state.categoryReducer.categories);
    })


    const productType : ProductTypeItem[] = useSelector((state)=> {return state.categoryReducer.categories} ) || [];

    const [selectedTypeID, setSelectedTypeID] = useState([]);
    const addSelectedTypeID = (e) => {
        var currentList = JSON.parse(JSON.stringify(selectedTypeID));
        console.log("currentList", currentList);
        currentList.push(e.target.value);
        setSelectedTypeID(currentList);
    }

    const currentKeyWord : string[] = ["Nguyễn Nhật Ánh", "Rùa"]

    const inputSection = () => {
        return ([
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}
                className='input-label relative'
            >
                <div className='title h-8 text-right leading-[22px] mr-4'>Tác giả</div>
                <div className='divider
                        h-[100px] w-[1px] 
                        bg-[#C5C5C5]
                        absolute top-[6px] right-[0px]
                    '   
                ></div>
            </Grid>,
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                className=''
            >
                <input type='text' 
                    className='product-name 
                    w-[calc(100%)] h-[32px]
                    rounded-[4px] border-[1px] border-[#999999]
                    text-[#333] text-[18px]
                    px-[8px]
                    focus-visible:outline-none
                    focus:outline-none
                '>

                </input>
            </Grid> 
        ])
    }

    return (
        <Layout activeNav={"book"}>
            <Head>
                <title>Quản lý sản phẩm</title>
            </Head>
            <Container className='relative' maxWidth='lg'>
                <NavigationMobile option='product'></NavigationMobile>
                <Grid className='mb-16' container spacing={3}>
                    <Grid className='mt-16 min:hidden 900px:block' item md={3}>
                        <Navigation option='product'></Navigation>
                    </Grid>
                    <Grid className='mt-16 font-primary font-[500] text-[#000]' sm={12} item md={9}>
                        <div className='title text-[#2BBCBA] text-[24px]'>
                            Thêm sản phẩm
                        </div>
                        <div style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }} className='rounded-lg'>
                            <div className='title 
                                text-[22px] font-[600] text-[#000]
                            '>
                                Thông tin sản phẩm
                            </div>
                            <Grid container spacing={1} className='mt-2'>
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}
                                    className='input-label relative'
                                >
                                    <div className='title h-8 text-right leading-[22px] mr-4'>Tên sản phẩm</div>
                                    <div className='divider
                                            h-[400px] w-[1px] 
                                            bg-[#C5C5C5]
                                            absolute top-[6px] right-[0px]
                                        '   
                                    ></div>
                                </Grid>
                                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                                    className=''
                                >
                                    <input type='text' 
                                        className='product-name 
                                        w-[calc(100%)] h-[32px]
                                        rounded-[4px] border-[1px] border-[#999999]
                                        text-[#333] text-[18px]
                                        px-[8px]
                                        focus-visible:outline-none
                                        focus:outline-none
                                    '>

                                    </input>
                                </Grid> 
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}
                                    className='input-label relative'
                                >
                                    <div className='title h-8 text-right eading-[22px] mr-4'>Mô tả</div>
                                </Grid>
                                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                                    className=''
                                >
                                    <textarea
                                        className='product-detail
                                        w-[calc(100%)] h-[100px]
                                        rounded-[4px] border-[1px] border-[#999999]
                                        text-[#333] text-[18px]
                                        px-[8px]
                                        focus-visible:outline-none
                                        focus:outline-none
                                        resize-none
                                    '>

                                    </textarea>
                                </Grid> 
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}
                                    className='input-label relative'
                                >
                                    <div className='title h-8 text-right leading-[22px] mr-4'>Hình ảnh</div>
                                </Grid>
                                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                                    className=''
                                >
                                    <div
                                        className='product-image-border
                                        w-[calc(100%)] h-[200px]
                                        rounded-[4px] border-[1px] border-[#999999]
                                    '>
                                        <div className="product-img-detail">
                                            <div className='add-detail'>
                                                <div className='add-from-link'>
                                                    Thêm hình ảnh
                                                </div>
                                                <div className='add-from-link'>
                                                    Thêm từ link
                                                </div>
                                            </div>
                                            <div className='add-description'>
                                                Chấp nhận hình ảnh từ thiết bị hoặc link
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}
                                    className='input-label relative mt-[11px]'
                                >
                                    <div className='title h-8 text-right leading-[22px] mr-4'>Loại sản phẩm</div>
                                </Grid>
                                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                                    className='mt-2 flex'
                                >
                                    <select name="product-type" id="product-type"
                                        className={
                                            "border-[1px] !border-[#e5e5e5] py-[4px] focus:border-[#e5e5e5]  focus-visible:border-[#e5e5e5] "
                                        }
                                        onChange={(e) => {
                                            addSelectedTypeID(e)
                                        }}
                                    >
                                        <option
                                            value={0}
                                            className="py-1"
                                        >
                                            Chọn các loại
                                        </option>
                                        {
                                            productType.map((item, value, key)=>{
                                                if(!selectedTypeID.includes(item._id))
                                                return (
                                                    <option
                                                        value={item._id}
                                                        className="py-1"
                                                    >
                                                        {item.type}
                                                    </option>
                                                );
                                            })
                                        }
                                    </select>
                                    <button
                                        className={
                                            "buy-button text-[16px] leading-[30px] bg-[#2BBCBA] px-[20px] text-white rounded-[4px] " +
                                            "hover:opacity-70 hover:cursor-pointer ml-2"
                                        }
                                    >
                                        Thêm 
                                    </button>
                                    <div 
                                        className={
                                            "display-type-selected " + 
                                            "flex ml-[24px]"
                                        }
                                    >

                                        {
                                            productType.map((item, value, key)=>{
                                                console.log("selectedTypeID",selectedTypeID)
                                                if(selectedTypeID.includes(item._id))
                                                    return (
                                                        <div
                                                            className="relative"
                                                        >
                                                            <div 
                                                                className={
                                                                    "py-[4px] px-[8px] ml-[16px] "+
                                                                    "bg-[#7E97B9] text-[#fff] rounded-[4px] leading-[25px] "
                                                                }
                                                            >
                                                                {item.type}
                                                            </div>
                                                            <div
                                                                className={
                                                                    "rounded-[100%] bg-[#F16F61] w-4 h-4 text-[#fff] " + 
                                                                    "absolute top-[-4px] right-[-6px]"
                                                                }
                                                            >
                                                                <p
                                                                    className='close-icon mt-[-4px] ml-[4px]'
                                                                >
                                                                    x
                                                                </p>
                                                            </div>
                                                        </div>
                                                        
                                                    );
                                            })
                                        }
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                        <div style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }} className='rounded-lg  mt-[40px]'>
                            <div className='title 
                                text-[22px] font-[600] text-[#000]
                            '>
                                Thông tin nhập sản phẩm
                            </div>
                            <Grid container spacing={1} className='mt-2'>
                                <Grid item sm={12} md={6} lg={6}>
                                    <div className='flex'>
                                        <div>
                                            Giá nhập
                                        </div>
                                        <div>
                                            <input type="number" className="border-[1px]"></input>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div>
                                            Giá bán
                                        </div>
                                        <div>
                                            <input type="number" className="border-[1px]"></input>
                                        </div>
                                        <div className="divider"></div>
                                    </div>
                                    
                                </Grid>
                                <Grid item sm={12} md={6} lg={6}>
                                    <div className='flex'>
                                        <div>
                                            Ngày nhập
                                        </div>
                                        <div>
                                            <input type="date" className="border-[1px]"></input>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div>
                                            Giá bán
                                        </div>
                                        <div>
                                            <input className="border-[1px]"></input>
                                        </div>
                                        <div className="divider"></div>
                                    </div>
                                </Grid>
                                <div className='divider'>

                                </div>
                                <div className='flex'>
                                    <div>
                                        Tổng tiền
                                    </div>
                                    <div>
                                        <input className="border-[1px]"></input>
                                    </div>
                                    <div className="divider"></div>
                                </div>
                            </Grid>
                        </div>

                        <div style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }} className='rounded-lg  mt-[40px]'>
                            <div className='title 
                                text-[22px] font-[600] text-[#000]
                            '>
                                Chi tiết sản phẩm
                            </div>
                            <Grid container spacing={1} className='mt-2'>
                                {inputSection()}
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}
                                    className='input-label relative'
                                >
                                    <div className='title h-8 text-right leading-[22px] mr-4'>Nhà xuất bản</div>
                                </Grid>
                                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                                    className=''
                                >
                                    <input type='text' 
                                        className='product-name 
                                        w-[calc(100%)] h-[32px]
                                        rounded-[4px] border-[1px] border-[#999999]
                                        text-[#333] text-[18px]
                                        px-[8px]
                                        focus-visible:outline-none
                                        focus:outline-none
                                    '>

                                    </input>
                                </Grid> 
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}
                                    className='input-label relative'
                                >
                                    <div className='title h-8 text-right leading-[22px] mr-4'>Dạng bìa</div>
                                </Grid>
                                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                                    className=''
                                >
                                    <input type='text' 
                                        className='product-name 
                                        w-[calc(100%)] h-[32px]
                                        rounded-[4px] border-[1px] border-[#999999]
                                        text-[#333] text-[18px]
                                        px-[8px]
                                        focus-visible:outline-none
                                        focus:outline-none
                                    '>

                                    </input>
                                </Grid> 
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}
                                    className='input-label relative'
                                >
                                    <div className='title h-8 text-right leading-[22px] mr-4'>Năm phát hành</div>
                                </Grid>
                                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                                    className=''
                                >
                                    <input type='text' 
                                        className='product-name 
                                        w-[calc(100%)] h-[32px]
                                        rounded-[4px] border-[1px] border-[#999999]
                                        text-[#333] text-[18px]
                                        px-[8px]
                                        focus-visible:outline-none
                                        focus:outline-none
                                    '>

                                    </input>
                                </Grid> 
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}
                                    className='input-label relative'
                                >
                                    <div className='title h-8 text-right eading-[22px] mr-4'>Chi tiết mô tả</div>
                                </Grid>
                                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                                    className=''
                                >
                                    <textarea
                                        className='product-detail
                                        w-[calc(100%)] h-[100px]
                                        rounded-[4px] border-[1px] border-[#999999]
                                        text-[#333] text-[18px]
                                        px-[8px]
                                        focus-visible:outline-none
                                        focus:outline-none
                                        resize-none
                                    '>

                                    </textarea>
                                </Grid> 
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}
                                    className='input-label relative'
                                >
                                    <div className='title h-8 text-right leading-[22px] mr-4'>Số trang</div>
                                </Grid>
                                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                                    className=''
                                >
                                    <input type='text' 
                                        className='product-name 
                                        w-[calc(100%)] h-[32px]
                                        rounded-[4px] border-[1px] border-[#999999]
                                        text-[#333] text-[18px]
                                        px-[8px]
                                        focus-visible:outline-none
                                        focus:outline-none
                                    '>

                                    </input>
                                </Grid> 
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}
                                    className='input-label relative'
                                >
                                    <div className='title h-8 text-right leading-[22px] mr-4'>Kích thước</div>
                                </Grid>
                                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                                    className=''
                                >
                                    <input type='text' 
                                        className='product-name 
                                        w-[calc(100%)] h-[32px]
                                        rounded-[4px] border-[1px] border-[#999999]
                                        text-[#333] text-[18px]
                                        px-[8px]
                                        focus-visible:outline-none
                                        focus:outline-none
                                    '>

                                    </input>
                                </Grid> 
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}
                                    className='input-label relative mt-[11px]'
                                >
                                    <div className='title h-8 text-right leading-[22px] mr-4'>Từ khoá</div>
                                </Grid>
                                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                                    className='mt-2 flex'
                                >
                                    <input name="product-type" id="product-type"
                                        className={
                                            "border-[1px] !border-[#e5e5e5] py-[4px] focus:border-[#e5e5e5]  focus-visible:border-[#e5e5e5] "
                                        }
                                    >
                                    </input>
                                    <button
                                        className={
                                            "buy-button text-[16px] leading-[30px] bg-[#2BBCBA] px-[20px] text-white rounded-[4px] " +
                                            "hover:opacity-70 hover:cursor-pointer ml-2"
                                        }
                                    >
                                        Thêm 
                                    </button>
                                    <div 
                                        className={
                                            "display-type-selected " + 
                                            "flex ml-[24px]"
                                        }
                                    >
                                        {
                                            currentKeyWord.map((item, value, key)=>{
                                                return (
                                                    <div
                                                        className="relative"
                                                    >
                                                        <div 
                                                            className={
                                                                "py-[4px] px-[8px] ml-[16px] "+
                                                                "bg-[#7E97B9] text-[#fff] rounded-[4px] leading-[25px] "
                                                            }
                                                        >
                                                            {item   }
                                                        </div>
                                                        <div
                                                            className={
                                                                "rounded-[100%] bg-[#F16F61] w-4 h-4 text-[#fff] " + 
                                                                "absolute top-[-4px] right-[-6px]"
                                                            }
                                                        >
                                                            <p
                                                                className='close-icon mt-[-4px] ml-[4px]'
                                                            >
                                                                x
                                                            </p>
                                                        </div>
                                                    </div>
                                                    
                                                );
                                            })
                                        }
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                        <div className="product-manage-contain">
                            <div className='left'>
                                <button>
                                    Huỷ
                                </button>
                            </div>
                            
                            <div className='right'>
                                <button>
                                    Xem trước
                                </button>
                                <button>
                                    Thêm hàng
                                </button>
                            </div>  
                        </div>
                        
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}


export default AddBook