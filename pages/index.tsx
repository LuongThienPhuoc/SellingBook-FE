import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
import { Card, Divider, Grid, TextField, Box, Button, CardContent, Container, Tab, Tabs } from '@mui/material';
import style from '../styles/Home.module.css'

const Layout = dynamic(() =>
  import('../component/Layout'),
  {
    loading: () => <LinearProgress></LinearProgress>
  }
);
const SliderCourses = dynamic(() => import('../component/Home/SliderCourses'))

const Home = () => {
  // const [fileName, setFileName] = useState();
  // const [fileContent, setFileContent] = useState<any | null>(null);;

  // const showFile = async (e) => {
  //   console.log('showfile', e)
  //   e.preventDefault();
  //   const reader = new FileReader();
  //   reader.onload = async (e) => {
  //     const content = e.target.result;
  //     var doc = new Docxtemplater(new PizZip(content), { delimiters: { start: '12op1j2po1j2poj1po', end: 'op21j4po21jp4oj1op24j' } });
  //     var text = doc.getFullText();
  //     console.log(text)
  //     setFileContent(text)
  //     handleStringDocsToMultipleChoice(text)
  //   };
  //   reader.readAsBinaryString(e.target.files[0]);
  // };

  // const handleStringDocsToMultipleChoice = (text) => {
  //   //vị trí các câu hỏi.
  //   let index: number[] = []
  //   let cauhoi: string[] = []
  //   for (let i = 0; i < 50; i++) {
  //     let vitri = text.search(`${i + 1}. `);
  //     if (vitri !== -1) {
  //       index.push(vitri)
  //     }
  //   }

  //   for (let i = 0; i < index.length; i++) {
  //     let key: string
  //     if (i === index.length - 1) {
  //       key = text.slice(index[i], text.length)
  //     } else {
  //       key = text.slice(index[i], index[i + 1])
  //     }
  //     cauhoi.push(key);
  //   }


  //   type TypeDetailAnswer = {
  //     name: string,
  //     answers: string[],
  //     result: number
  //   }
  //   let cauhoichitietArr: TypeDetailAnswer[] = []
  //   for (let i = 0; i < cauhoi.length; i++) {
  //     let name: string
  //     let ansA: string
  //     let ansB: string
  //     let ansC: string
  //     let ansD: string
  //     let result: number
  //     name = cauhoi[i].slice(0, cauhoi[i].search('A. '));
  //     ansA = cauhoi[i].slice(cauhoi[i].search('A. '), cauhoi[i].search('B. '))
  //     ansB = cauhoi[i].slice(cauhoi[i].search('B. '), cauhoi[i].search('C. '))
  //     ansC = cauhoi[i].slice(cauhoi[i].search('C. '), cauhoi[i].search('D. '))
  //     ansD = cauhoi[i].slice(cauhoi[i].search('D. '), cauhoi[i].search('Answer: '))

  //     switch (cauhoi[i][cauhoi[i].length - 1]) {
  //       case 'A':
  //         result = 0;
  //         break
  //       case 'B':
  //         result = 1;
  //         break
  //       case 'C':
  //         result = 2;
  //         break
  //       case 'D':
  //         result = 3;
  //         break
  //       default:
  //         console.log('Lỗi')
  //         break;
  //     }
  //     let cauhoichitiet: TypeDetailAnswer = {
  //       name,
  //       answers: [ansA, ansB, ansC, ansD],
  //       result
  //     }
  //     cauhoichitietArr.push(cauhoichitiet)
  //   }
  //    console.log(cauhoichitietArr)
  // }
  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout active="home">
      <div className={style.backgroundHome}>
        <div
          className='rounded-xl  absolute  text-[#2BBCBA]  xl:text-6xl xl:translate-x-20   lg:text-5xl lg:translate-x-15  900px:text-4xl 900px:translate-x-10  md:text-3xl md:translate-x-10  sm:text-2xl   min:text-xl min:translate-x-5 min:top-1/4 min:right-1/4 '
        >
          SELLING BOOK
        </div>
        <div
          className='rounded-xl cursor-pointer absolute  bg-[#2BBCBA] text-white xl:text-4xl   xl:py-3 xl:px-6 lg:text-3xl  lg:py-3 lg:px-6 900px:text-3xl  900px:py-2 900px:px-4 md:text-2xl  md:py-2 md:px-4 sm:text-xl  sm:py-2 sm:px-4 min:text-base min:bottom-1/4 min:right-1/4 min:py-1 min:px-3'
        >
          XEM TẤT CẢ
        </div>
      </div>
      <Container maxWidth={'xl'} style={{ overflow: 'inherit' }}>
        <div className='mt-4' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} >
          <Card style={{ overflow: 'inherit' }}>
            <div className='text-xl p-3 font-medium'>Tất cả loại sách</div>
            <Divider />
            <CardContent>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Tiểu thuyết" {...a11yProps(0)} />
                    <Tab label="Ngôn tình" {...a11yProps(1)} />
                    <Tab label="Kỹ năng" {...a11yProps(2)} />
                    <Tab label="Kinh tế" {...a11yProps(3)} />
                    <Tab label="Sách giáo khoa" {...a11yProps(4)} />
                    <Tab label="Chính trị" {...a11yProps(5)} />
                  </Tabs>
                </Box>
              </Box>
              <div className='my-3'>Tiểu thuyết là một thể loại văn xuôi có hư cấu, thông qua nhân vật, hoàn cảnh, sự việc để phản ánh bức tranh xã hội rộng lớn và những vấn đề của cuộc sống con người, biểu hiện tính chất tường thuật, tính chất kể chuyện bằng ngôn ngữ văn xuôi theo những chủ đề xác định</div>
              <SliderCourses></SliderCourses>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Layout>
  )
}


export default Home

