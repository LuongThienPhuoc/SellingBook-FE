import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Container, Grid, CircularProgress } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import * as URL from '../services/api/config'
import { memo } from 'React'
import Stack from '@mui/material/Stack';
const NavigationBar = dynamic(() => import('../component/Search/NavigationBar'))
const CardPurchasedList = dynamic(() => import('../component/Search/CardPurchasedList'))
const Layout = dynamic(() => import('../component/Layout'),
    {
        loading: () => <LinearProgress></LinearProgress>
    }
)
import {getCategory} from '../redux/actions/categoryAction';
import { AiOutlineConsoleSql } from 'react-icons/ai';


function search(props) {
    const search = useSelector((state: RootStateOrAny) => state.searchReducer.search)
    const currentCategoryFilter = useSelector((state: RootStateOrAny) => {
        return state.searchReducer.currentFilter.categoryList
    })
    // const changeSellFilter = useSelector((state: RootStateOrAny) => {
    //     return state.searchReducer.currentFilter.sellRange
    // })
    
    // console.log("changeSellFilter", changeSellFilter)
    const router = useRouter()
    const [products, setProducts] = useState({
        isLoading: false,
        products: []
    })
    const [currentSelect, setCurrentSelect] = useState(1)
    const [currentProducts, setCurrentProducts] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        const getAllCategory = async() => {
            // console.log("dispatch category rồi");
            var categoryList;
            await axios.get(URL.URL_CATEGORY)
                .then((data)=>{
                    categoryList = data.data;
                })
                .catch((error)=>{
                    console.log(error)
                })
            dispatch(getCategory(categoryList.categories));
        }
        getAllCategory();
        // const fetchBook= async () => {
        //     axios.get( URL.URL_PRODUCT, {})
        //     .then((data) => {
        //         console.log("get data", data);
        //         // // alert("Thêm sản phẩm thành công");
        //         // dispatch(showAlertSuccess("Lấy dữ liệu sách thành công"));
        //         // // console.log(router);
        //         // router.push('/admin/product/');
        //         // return true;
        //         dispatch(loadingBook(data.data.product))
        //     })
        //     .catch((error) => {
        //         // dispatch(showAlertSuccess("Lấy dữ liệu sách thất bại"));
        //         // alert(error);
        //     })
        // }
        // fetchBook()
    }, [])


    useEffect(() => {
        setProducts({
            isLoading: false,
            products: []
        })
        let a = setTimeout(() => {
            router.push(`/search?search=${search}`)
            const fetApi = async () => {
                await axios.get(URL.URL_GET_SEARCH + search)
                    .then(res => {
                        console.log(res)
                        setProducts({
                            isLoading: true,
                            products: res.data.products
                        })
                        setCurrentProducts(res.data.products)
                    })
                    .catch(err => {

                    })
            }
            fetApi()
            console.log(search)
        }, 500)
        return () => clearTimeout(a)
    }, [search])

    const renderCount = () => {
        let index = currentProducts.length
        if (index % 12 == 0) {
            return Number(index / 12)
        } else {
            return Number(Math.floor(index / 12) + 1)
        }
    }

    const filterCategory = (currentProductList) => {
        if(currentCategoryFilter.length == 0){
            return currentProductList;
        }
        else {
            let listProducts = [];
            currentProductList.forEach(product => {
                let isFind = false;
                for(let i = 0; i < currentCategoryFilter.length; i++){
                    if(product.categoryID.includes(currentCategoryFilter[i])){
                        isFind = true;
                        break;
                    }
                }
                if(isFind){
                    listProducts.push(product);
                }
            })
            return listProducts;
        }
    }

    const filterSellRange = (currentProductList) => {
        if(changeSellFilter == -1){
            return currentProductList;
        }
        else {
            let res = [];
            currentProductList.forEach(product => {
                if(changeSellFilter == 0){
                    if(product.purchased < 10){
                        res.push(product);
                    }
                }
                if(changeSellFilter == 1){
                    if(product.purchased < 50 && product.purchased >= 10){
                        res.push(product);
                    }
                }
                if(changeSellFilter == 2){
                    if(product.purchased < 100 && product.purchased >= 50){
                        res.push(product);
                    }
                }
                if(changeSellFilter == 3){
                    if(product.purchased >= 100){
                        res.push(product);
                    }
                }
            });
            return res;
        }
    }

    const filterPrice = (currentProductList) => {
        if(price[0] == - 1){
            return currentProductList;
        }
        else {
            let res = [];
            currentProductList.forEach(product => {
                if(price[1] == -1){
                    if(product.price >= price[0]){
                        res.push(product);
                    }
                }
                else {
                    if(product.price < price[1] && product.price >= price[0]){
                        res.push(product);
                    }
                }
            });
            return res;
        }
    }

    const countBook = () => {
        console.log(filterPrice(filterSellRange(filterCategory(currentProducts))));
        return filterPrice(filterSellRange(filterCategory(currentProducts))).length;
    }

    const [changeSellFilter, setChangeSellFilter] = useState(-1);
    const [price, setPrice] = useState([-1, -1]);

    console.log("price", price);

    return (
        <Layout>
            <Head>
                <title>Tìm kiếm - {search}</title>
            </Head>
            <Container className='relative' maxWidth='xl'>
                <Grid className='mb-16' container spacing={3}>
                    <Grid className='mt-16' item md={4} sm={12}>
                        <div
                            style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }}
                            className='rounded-lg '
                        >
                            <NavigationBar
                                changeSellFilter = {(val) => {
                                    setChangeSellFilter(val);
                                }}
                                changePriceFilter = {(val) => {
                                    setPrice(val);
                                }}
                            >

                            </NavigationBar>
                        </div>
                    </Grid>
                    <Grid className='mt-16' item md={8} sm={12}>
                        <div style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }} className='rounded-lg '>
                            {
                                search == '' ? (
                                    <>
                                        <div className='text-xl font-bold mb-2'>Tất cả loại sách</div>
                                    </>
                                ) : (
                                    <>
                                        <div className='text-xl font-bold mb-2'>Kết quả tìm kiếm cho "<span className='text-[#2BBCBA]'>{search}</span>"</div>
                                    </>
                                )
                            }
                            <div className='mb-4'>Tổng cộng <span className='text-[#2BBCBA]'>{countBook()}</span> sách được tìm thấy</div>
                            {
                                !products.isLoading ? (
                                    <Stack sx={{ color: 'grey.500', display: 'flex', justifyContent: 'center' }} spacing={2} direction="row">
                                        <CircularProgress color="secondary" />
                                    </Stack>
                                ) : (
                                    <Grid container spacing={3}>
                                        {
                                            filterPrice(filterSellRange(filterCategory(currentProducts))).length == 0 ? (<h5 className='mt-4' style={{ textAlign: 'center', display: 'block', width: '100%' }}>Không tìm thấy sản phẩm</h5>) : (
                                                filterPrice(filterSellRange(filterCategory(currentProducts))).map((product, key) => {
                                                    return (
                                                        <CardPurchasedList product={product} key={key}></CardPurchasedList>
                                                    )
                                                })
                                            )
                                        }
                                    </Grid>
                                )
                            }
                            <div className='mt-10 flex justify-center profile-pagination'>
                                <Pagination onChange={(e, num) => { setCurrentSelect(num) }} count={renderCount()} color="primary" variant="outlined" />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}

export default memo(search);