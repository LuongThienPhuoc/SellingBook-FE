import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showAlertError, showAlertSuccess } from '../redux/actions/alertAction'
import { getAccessToken } from '../utils/cookies';
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
import Docxtemplater from "docxtemplater";
import PizZip from 'pizzip'
const Layout = dynamic(() =>
  import('../component/Layout'),
  {
    loading: () => <LinearProgress></LinearProgress>
  }
);

const Home = () => {
  const [fileName, setFileName] = useState();
  const [fileContent, setFileContent] = useState<any | null>(null);;


  const showFile = async (e) => {
    console.log('showfile', e)
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target.result;
      var doc = new Docxtemplater(new PizZip(content), { delimiters: { start: '12op1j2po1j2poj1po', end: 'op21j4po21jp4oj1op24j' } });
      var text = doc.getFullText();
      console.log(text)
      setFileContent(text)
      handleStringDocsToMultipleChoice(text)
    };
    reader.readAsBinaryString(e.target.files[0]);
  };

  const handleStringDocsToMultipleChoice = (text) => {
    //vị trí các câu hỏi.
    let index: number[] = []
    let cauhoi: string[] = []

    for (let i = 0; i < 50; i++) {
      let vitri = text.search(`${i + 1}. `);
      if (vitri !== -1) {
        index.push(vitri)
      }
    }

    for (let i = 0; i < index.length; i++) {
      let key: string
      if (i === index.length - 1) {
        key = text.slice(index[i], text.length)
      } else {
        key = text.slice(index[i], index[i + 1])
      }
      cauhoi.push(key);
    }

    
    type TypeDetailAnswer = {
      name: string,
      answers: string[],
      result: number
    }
    let cauhoichitietArr: TypeDetailAnswer[] = []
    for (let i = 0; i < cauhoi.length; i++) {
      let name: string
      let ansA: string
      let ansB: string
      let ansC: string
      let ansD: string
      let result: number
      name = cauhoi[i].slice(0, cauhoi[i].search('A. '));
      ansA = cauhoi[i].slice(cauhoi[i].search('A. '), cauhoi[i].search('B. '))
      ansB = cauhoi[i].slice(cauhoi[i].search('B. '), cauhoi[i].search('C. '))
      ansC = cauhoi[i].slice(cauhoi[i].search('C. '), cauhoi[i].search('D. '))
      ansD = cauhoi[i].slice(cauhoi[i].search('D. '), cauhoi[i].search('Answer: '))
      
      switch (cauhoi[i][cauhoi[i].length - 1]) {
        case 'A':
          result = 0;
          break
        case 'B':
          result = 1;
          break
        case 'C':
          result = 2;
          break
        case 'D':
          result = 3;
          break
        default:
          console.log('Lỗi')
          break;
      }
      let cauhoichitiet: TypeDetailAnswer = {
        name,
        answers: [ansA, ansB, ansC, ansD],
        result
      }
      cauhoichitietArr.push(cauhoichitiet)
    }
     console.log(cauhoichitietArr)
  }

  return (
    <Layout active="home">
      <h1 className="text-3xl font-bold underline text-red-600 mt-16">
        {fileContent}
        <div className='flex justify-center'>hello my selt</div>
        <input type="file" id="fileInput" onChange={(e) => showFile(e)} />
      </h1>
    </Layout>
  )
}


export default Home

