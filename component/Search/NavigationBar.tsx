import React, { useState, useRef } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Divider, TextField } from '@mui/material'
import { FaFilter } from 'react-icons/fa'
import Checkbox from '@mui/material/Checkbox';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { changeCategoryFilter} from '../../redux/actions/searchAction';
import { setSellRange } from '../../redux/actions/searchAction';
function NavigationBar(props) {

    const dispatch = useDispatch();
    const inputRef = {
        fromRef: useRef(null),
        toRef: useRef(null),
    }
    const renderFromToMoney = () => {
        return (
            <div className='flex'>
                <span>Từ</span>
                <input 
                    className='w-12 mx-2 outline-none border-solid border-1 border-black rounded' type={'text'}
                    ref={inputRef.fromRef}
                    onChange={() => {
                        // console.log(currentTarget)
                        if(currentTarget == 3){
                            props.changePriceFilter([inputRef.fromRef.current.value,inputRef.toRef.current.value])
                        }
                    }}
                >
                </input>
                <span>Đến</span>
                <input 
                    className='w-12 mx-2 outline-none border-solid border-1 border-black rounded' type={'text'}
                    ref={inputRef.toRef}
                    onChange={() => {
                        // console.log(currentTarget)
                        if(currentTarget == 3){
                            props.changePriceFilter([inputRef.fromRef.current.value,inputRef.toRef.current.value])
                        }
                    }}
                >
                </input>
            </div>
        )
    }

    const productType = useSelector((state: RootStateOrAny)=> {return state.categoryReducer.categories} ) || [];
    
    const [currentBookTypeFilter, setCurrentBookTypeFilter] = useState([]);

    const handleChangeType = (e) => {
        // console.log("e", e.target.value);
        let bookTypeFilter = JSON.parse(JSON.stringify(currentBookTypeFilter));
        if(bookTypeFilter.indexOf(e.target.value)!=-1){
            bookTypeFilter = bookTypeFilter.filter((value, index) => {
                return value != e.target.value;
            })
            // console.log("remove", bookTypeFilter)
        }
        else{
            bookTypeFilter.push(e.target.value);
        }
        // console.log( "currentBookTypeFilter quqyquryq",  bookTypeFilter)
        setCurrentBookTypeFilter(bookTypeFilter);
        dispatch(changeCategoryFilter(bookTypeFilter));
    }
    
    const [sellRange, setSellRangeRedux] = useState(-1);
    const handleChangeSellRange = (e) => {
        // console.log("e", e.target.value);
        // console.log("e", parseInt(e.target.value));
        props.changeSellFilter(parseInt(e.target.value));
        setSellRangeRedux(parseInt(e.target.value));
        let sellRangeTempt = parseInt(e.target.value)
        dispatch(setSellRange(sellRangeTempt));
    }

    const handleChangePrice = (e) => {
        setCurrrentTarget(parseInt(e.target.value));
        if(parseInt(e.target.value) == 0){
            props.changePriceFilter([100000, -1])
            // console.log();
        }
        else if(parseInt(e.target.value) == 1){
            props.changePriceFilter([50000, 100000])
        }
        else if(parseInt(e.target.value) == 2){
            props.changePriceFilter([0, 50000])
        }
        else if(parseInt(e.target.value) == 3){
            props.changePriceFilter([inputRef.fromRef.current.value, inputRef.toRef.current.value])
        }
    }

    const [currentTarget, setCurrrentTarget] = useState(-1);

    // console.log(sellRange)
    return (
        <div>
            <div className='flex items-center font-bold mb-4'>
                <FaFilter className='mr-2 pr-1'></FaFilter>
                <div>BỘ LỌC TÌM KIẾM</div>
            </div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Loại sách</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider></Divider>
                    <FormControl
                        onChange={(e)=>handleChangeType(e)}
                    >
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            onChange={(e)=>handleChangeType(e)}
                        >
                            {
                                !productType ? null : productType.map((value,index) => {
                                    return (
                                        <FormControlLabel value={value._id} control={<Checkbox />} label={value.type} />
                                    )
                                })  
                            }
                            {/* <FormControlLabel value="0" control={<Checkbox />} label="Tiểu thuyết" />
                            <FormControlLabel value="1" control={<Checkbox />} label="Hài" />
                            <FormControlLabel value="2" control={<Checkbox />} label="Hâhaa" />
                            <FormControlLabel value="3" control={<Checkbox />} label="Huhu" />
                            <FormControlLabel value="4" control={<Checkbox />} label="Hello" /> */}
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Lượt mua</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider></Divider>
                    <FormControl
                        onChange={(e) => {
                            handleChangeSellRange(e);
                        }}
                    >
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            onChange={(e) => {
                                handleChangeSellRange(e);
                            }}
                        >
                            <FormControlLabel value={3} control={<Radio />} label="Trên 100" />
                            <FormControlLabel value={2} control={<Radio />} label="50-100" />
                            <FormControlLabel value={1} control={<Radio />} label="10-50" />
                            <FormControlLabel value={0} control={<Radio />} label="Dưới 10" />
                        </RadioGroup>
                    </FormControl>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Giá bán</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider></Divider>
                    <FormControl
                        onChange={(e)=>handleChangePrice(e)}
                    >
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            onChange={(e)=>handleChangePrice(e)}
                        >
                            <FormControlLabel value={0} control={<Radio />} label="Trên 100.000" />
                            <FormControlLabel value={1} control={<Radio />} label="50.000-100.000" />
                            <FormControlLabel value={2} control={<Radio />} label="Dưới 50.000" />
                            <FormControlLabel value={3} control={<Radio />} label={renderFromToMoney()} />
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default NavigationBar;