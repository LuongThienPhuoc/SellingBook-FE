import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
import { Card, Divider, Grid, TextField, Box, Button, CardContent, Container, Tab, Tabs } from '@mui/material';
import style from '../styles/Home.module.css'
const SliderCourses = dynamic(() => import('./SliderCourses'))
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { BsArrowReturnLeft } from 'react-icons/bs';

function BookByKeyword(props) {
    const tags = useSelector((state: RootStateOrAny)=> {return state.bookReducer.tags} );
    console.log("tags", tags);
    // let randomColor = [
    //     ['#BEC7E7', '#BEC7E7'],
    //     ['#C4C4C4', '#BEC7E7'],
    //     ['#DEBEE7', '#BEC7E7']
    // ]
    let [currentIndex, setCurrentIndex] = useState(2);
    const listBook = useSelector((state: RootStateOrAny) => {
        return [
            ...state.bookReducer.books,
            ...state.bookReducer.books,
            ...state.bookReducer.books,
            ...state.bookReducer.books,
            ...state.bookReducer.books,
            ...state.bookReducer.books,
            ...state.bookReducer.books,
        ]
    })
    return (
        <div className='mt-5 mb-5' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >
            <Card style={{ overflow: 'inherit' }}>
                <div className='text-xl p-3 font-medium'>Sách theo từ khóa</div>
                <Divider />
                <CardContent>
                    <div className='mt-1 mb-0'>Tổng hợp những cuốn sách theo từ khoá hot nhất</div>
                    <div className='mt-2 flex text-[white] flex-wrap mb-3'>
                        {
                            tags.map((tag, index) => {
                                return (
                                    <div 
                                        className={' mt-2 px-3 py-1 text-base rounded-lg bg-[#BEC7E7] mr-4 '
                                            + 'hover:cursor-pointer hover:opacity-80 '
                                            + (currentIndex == index  ? 'bg-[#8e9fdf]' : '')
                                        }
                                        onClick={() => {
                                            setCurrentIndex(index);
                                        }}
                                    >
                                        {tag.tag}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <SliderCourses
                        className='mt-3'
                        keyword={tags[currentIndex]}
                        books={listBook}
                    />
                </CardContent>
            </Card>
        </div>
    );
}

export default BookByKeyword;