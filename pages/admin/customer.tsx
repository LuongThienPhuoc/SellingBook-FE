import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import Head from 'next/head';
import { Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector, RootStateOrAny } from 'react-redux';
const NavigationMobile = dynamic(() => import('../../component/Admin/NavigationMobile'))
const Navigation = dynamic(() => import('../../component/Admin/Navigation'))
import Layout from '../../component/Layout'

import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import * as URL from '../../services/api/config'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Tên', width: 150 },
    { field: 'username', headerName: 'Tài khoản', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'role',
        headerName: 'Chức vụ',
        type: 'string',
        width: 90,
    },
    {
        field: 'phone',
        headerName: 'SĐT',
        type: 'string',
        width: 130,
    },
    {
        field: 'gender',
        headerName: 'Giới tính',
        type: 'string',
        width: 70,
        valueGetter: (params) => {
            if (!params.row.gender) {
                return null
            }
            if (params.row.gender == 'male') {
                return 'Nam'
            } else {
                return 'Nữ'
            }
        }
    }
];

function customer(props) {
    const infoUser = useSelector((state: RootStateOrAny) => state.userReducer.infoUser)
    const router = useRouter()
    const status = useSelector((state: RootStateOrAny) => state.userReducer)
    const [users, setUsers] = useState([])
    const [isDelete, setIsDelete] = useState({
        isDelete: false,
        row: {}
    })

    useEffect(() => {
        const fetApi = async () => {
            await axios.get(URL.URL_GET_ALL_USER)
                .then(res => {
                    console.log(res.data.users)
                    let listUser = res.data.users
                    listUser.map((value, index) => {
                        let currentTime = new Date()
                        if (value.birthday) {
                            let a = new Date(value.birthday)
                            value.age = currentTime.getFullYear() - a.getFullYear()
                        }
                        value.id = index + 1
                        return value
                    })
                    setUsers(res.data.users)
                })
                .catch(err => {
                    console.log(err)
                })
        }

        fetApi()
    }, [])

    if (!status.isLoading) return (<LinearProgress></LinearProgress>)

    if (!status.isLogin) router.push('/login')

    if (infoUser.role == 'user') router.push('/')


    const handleClickCell = (e) => {
        console.log(e)
        setIsDelete({
            isDelete: true,
            row: e.row
        })
    }

    const handleDelete = () => {
        console.log(isDelete)
    }

    return (
        <Layout active="admin">
            <Head>
                <title>Quản lý khách hàng</title>
            </Head>
            <Container className='relative' maxWidth='lg'>
                <NavigationMobile option='customer'></NavigationMobile>
                <Grid className='mb-16' container spacing={3}>
                    <Grid className='mt-16 min:hidden 900px:block' item md={3}>
                        <Navigation option='customer'></Navigation>
                    </Grid>
                    <Grid className='mt-16' sm={12} item md={9}>
                        <div style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }} className='rounded-lg '>
                            <div style={{ height: 400, width: '100%', marginBottom: '20px' }}>
                                <DataGrid
                                    rows={users}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                    onCellClick={handleClickCell}
                                />

                            </div>
                            {
                                isDelete.isDelete ? (
                                    <div onClick={handleDelete} className='inline px-3 py-1 rounded-lg text-[#d33232] border-solid border-2 cursor-pointer border-[#d33232] font-medium'>Xóa</div>
                                ) : null
                            }
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Layout >
    );
}

export default customer;