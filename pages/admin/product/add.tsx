import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import Head from 'next/head';
import { Button, Container, Grid} from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
const Navigation = dynamic(() => import('../../../component/Admin/Navigation'))
const NavigationMobile = dynamic(() => import('../../../component/Admin/NavigationMobile'))
const Layout = dynamic(() => import('../../../component/Layout'),
    {
        loading: () => <LinearProgress></LinearProgress>
    }
)

function product(props) {
    const isLogin = useSelector((state: RootStateOrAny) => state.userReducer.isLogin)
    const infoUser = useSelector((state: RootStateOrAny) => state.userReducer.infoUser)
    // const router = useRouter()
    // useEffect(() => {
     
    //     if (!isLogin || infoUser.role == 'user') {
    //         router.push('/')
    //     }
    // }, [isLogin, infoUser])
    const [option, setOption] = useState('Danh sách đơn hàng')
    const handleClickOption = (e) => {
        e.preventDefault()
        setOption(e.target.innerText)
    }

    return (
        <Layout active="admin">
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
                                    className='input-label relative'
                                >
                                    <div className='title h-8 text-right leading-[22px] mr-4'>Loại sản phẩm</div>
                                </Grid>
                                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}
                                    className=''
                                >
                                    <select name="cars" id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <Button variant="contained">
                                        Thêm 
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}

export default product;