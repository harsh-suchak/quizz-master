import { Card, CardContent, CardHeader, Chip, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material'
import React from 'react'

function QuizCard({data}) {
    let theme = useTheme();
  return (
    <>
        { data.map((quiz,index)=>{
            return <Card sx={{maxWidth:'100%',width:'90rem',padding:2,margin:2,borderRadius:'20px'}} key={index}>
                <CardHeader title={'Q' + (index+1) +'. ' +quiz.question} style={{backgroundColor: theme.palette.primary.light,borderRadius:'10px'}}/>
                <CardContent>
                    {
                        quiz.isMultiAnswerQuestion 
                        ?  
                        (
                            <></>
                        )
                        : 
                        (
                            <RadioGroup sx={{my:0.9}}>
                                { quiz.options.map((option,index)=>{

                                    return option && <FormControlLabel value={index} control={<Radio/>} key={index} label={option}/>
                                })
                                }
                            </RadioGroup>
                        )
                    }
                    {
                        quiz.tags.map((tag)=>{
                            return <Chip label={'#'+tag}/>
                        })
                    }
                </CardContent>
                
            </Card>
            })
        }
    </>
  )
}

export default QuizCard