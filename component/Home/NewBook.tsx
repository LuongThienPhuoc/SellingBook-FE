import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
import { Card, Divider, Grid, TextField, Box, Button, CardContent, Container, Tab, Tabs } from '@mui/material';
import style from '../styles/Home.module.css'
import { useSelector, RootStateOrAny } from 'react-redux';

const SliderCourses = dynamic(() => import('./SliderCourses'))

function NewBook(props) {
    const listBook = useSelector((state: RootStateOrAny) => {
        return [
            ...state.bookReducer.books,
            ...state.bookReducer.books,
        ]
    })

    return (
        <div className='mt-5 mb-5' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >
            <Card style={{ overflow: 'inherit' }}>
                <div className='text-xl p-3 font-medium'>Sách mới</div>
                <Divider />
                <CardContent>
                    <div className='my-3'>Tổng hợp những đầu sách mới nhập về hoặc mới xuất bản</div>
                    <SliderCourses
                        books={listBook.sort((a,b) => 0.5 - Math.random())}
                    ></SliderCourses>
                </CardContent>
            </Card>
        </div>
    );
}

export default NewBook;