import React, { useState } from 'react'
import MuiAppBar from './AppBar'
import { Button, Card, CardContent, FormControlLabel, Paper, Radio, RadioGroup, Typography, useTheme } from '@mui/material'
import { useEffect } from 'react'
import { getQuizData } from '../service/QuizApi'
import QuizCard from './QuizCard'

function HomePage() {
    let theme = useTheme();
    const [filters,setFilters] = useState({tag:''}) 
    const [data,setData] = useState([])

    const [titles, setTitles] = useState([
        "Challenge Your Wits",
        "Mind Teasers Unleashed",
        "Journey into Wisdom",
        "Unlock the Secrets: Quiz Time!",
        "Knowledge Quest: Dive In",
        "Brainpower Expedition",
        "Quizzical Adventures Await",
        "Embark on a Quiz Odyssey",
        "Decipher the Unknown",
        "Cerebral Conundrums: Test Yourself",
      ]);

    const getRandomTitle = () => {
        const randomIndex = Math.floor(Math.random() * titles.length);
        return titles[randomIndex];
      };
    

    let getQuizProblems = async () => {
        let responseData = await getQuizData();
        
        setData(responseData.slice(0,10))
    }
    useEffect(()=>{
        getQuizProblems();
    },[])
    useEffect(()=>{
        console.log(data);
    },[data])
  return (
    <>
        <MuiAppBar/>
        <Paper style={{marginTop:'2rem',padding:'2rem'}}>
        <Typography variant="h4" style={{ fontFamily: 'YourDecorativeFont', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem', color: theme.palette.primary.dark }}>
            {getRandomTitle()}
        </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                {data.length > 1 && <QuizCard data={data} />}
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <Button variant='contained'>Prev</Button>
                <Button variant='contained' style={{ marginLeft: 'auto' }}>Next</Button>
            </div>
        </Paper>
    </>
  )
}

export default HomePage