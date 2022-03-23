import React from "react";
import Link from 'next/link'
import { Grid, Paper, Container } from '@mui/material'
import style from '../styles/Layout.module.css'
import { Nav } from 'react-bootstrap'
import { GrLocation } from 'react-icons/gr'
import { HiOutlinePhone } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'

const Footer = () => {
    return (
        <div style={{ borderTop: '1px solid #2BBCBA' }}>
            <Container style={{ marginTop: '37px' }}>
                <Grid style={{ borderBottom: '1px solid #C5C5C5' }} container spacing={2}>
                    <Grid xl={3} lg={3} sm={6} md={6} item xs={12}>
                        <div >
                            <p className={style.footerTitle}>Hỗ trợ khách hàng</p>
                            <p style={{ fontSize: '1.1rem', color: 'black' }}>Hotline đặt hàng</p>
                            <p>
                                <Link href='#' passHref>
                                    <a className={style.footerItem}>19522055</a>
                                </Link>
                            </p>
                            <p>
                                <Link href='#' passHref>
                                    <a className={style.footerItem}>19522006</a>
                                </Link>
                            </p>
                            <p>
                                <Link href='#' passHref>
                                    <a className={style.footerItem1}>19522055@gm.uit.edu.vn</a>
                                </Link>
                            </p>
                            <p>
                                <Link href='#' passHref>
                                    <a className={style.footerItem1}>19522006@gm.uit.edu.vn</a>
                                </Link>
                            </p>

                        </div>
                    </Grid>
                    <Grid xl={3} lg={3} sm={6} md={6} item xs={12}>
                        <div>
                            <p className={style.footerTitle}>Phương thức thanh toán</p>
                            <p>
                                <Link href='#' passHref>
                                    <a className={style.footerItem}>Thanh toán khi nhân hàng</a>
                                </Link>
                            </p>
                            <p>
                                <Link href='#' passHref>
                                    <a className={style.footerItem}>Chuyển khoản qua ngân hàng</a>
                                </Link>
                            </p>
                        </div>
                    </Grid>
                    <Grid xl={3} lg={3} sm={6} md={6} item xs={12}>
                        <div>
                            <p className={style.footerTitle}>Thông tin</p>
                            <p>
                                <Link href='#' passHref>
                                    <a className={style.footerItem}>Từ khóa tìm kiếm</a>
                                </Link>
                            </p>
                            <p>
                                <Link href='#' passHref>
                                    <a className={style.footerItem}>Tìm kiếm nâng cao</a>
                                </Link>
                            </p>
                            <p>
                                <Link href='#' passHref>
                                    <a className={style.footerItem}>Về chúng tôi</a>
                                </Link>
                            </p>
                        </div>
                    </Grid>
                    <Grid xl={3} lg={3} sm={6} md={6} item xs={12}>
                        <div>
                            <p className={style.footerTitle}>Liên hệ</p>
                            <p>
                                <GrLocation className={style.footerCustomIcon}></GrLocation>
                                <Link href='#' passHref>
                                    <a className={style.footerItem}>Trường đại học Công nghệ thông tin</a>
                                </Link>
                            </p>
                            <p>
                                <HiOutlinePhone className={style.footerCustomIcon}></HiOutlinePhone>
                                <Link href='#' passHref>
                                    <a className={style.footerItem}>(+84) 9999999999</a>
                                </Link>
                            </p>
                            <p>
                                <AiOutlineMail className={style.footerCustomIcon}></AiOutlineMail>
                                <Link href='#' passHref>
                                    <a className={style.footerItem}>1999999@gm.uit.edu.vn</a>
                                </Link>
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <Grid style={{ marginBottom: '20px' }} container spacing={2}>
                    <Grid item md={4} xs={12}>
                        <p style={{ fontSize: '.8rem', opacity: '36%', marginTop: '10px' }}>@ 2022 All rights Reservce</p>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src="https://s3-alpha-sig.figma.com/img/917c/6af9/34d279d63c39796c40ded3d98c39a196?Expires=1649030400&Signature=X8Ux1HjZpFKPi4vat9FctOmZjVvonOsoPjPsDl15Y147HNi0JESrJUcDgwSNZ36q-I8otXXLNwNNa2BVdW8Rthcfl1gjyGwwjwd18PHiPtZsqmE8p9~neyA~hgb0sfXTFFlsRWCcHjljx5jcfAd2c84suJIXAjKYxzyo1moEjF9uxjGRklgvJue~gm0JfGsolzPBiFI04TIIZBv2hs4HWvLkQnkqYcHvbIMRXfb4EWoT2DjNPeSxnt~YhJBhzyvxSDSKL1wEZefdn0YLTpcgYWf4nQNFc7KTsI2Z44soktiFceE7Akis049lMgl0EB9lG5bEWnrUqbwo3RmScFcRiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""
                                height='80px'
                            />
                            <p style={{ fontSize: '1.6rem', fontWeight: '600', paddingLeft: '10px', marginTop: '12px' }}>GoodBook</p>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            <Link href='#' passHref>
                                <BsTwitter className={style.customIconMedia}></BsTwitter>
                            </Link>
                            <Link href='#' passHref>
                                <BsFacebook className={style.customIconMedia}></BsFacebook>
                            </Link>
                            <Link href='#' passHref>
                                <BsInstagram className={style.customIconMedia}></BsInstagram>
                            </Link>
                            <Link href='#' passHref>
                                <BsYoutube className={style.customIconMedia}></BsYoutube>
                            </Link>



                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}

export default Footer