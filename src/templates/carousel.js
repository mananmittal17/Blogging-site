import React, { useEffect, useState } from "react";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import BlogPost from "./blogPosts";
import { useTheme } from '@mui/material/styles';
import { Box, MobileStepper, rgbToHex, Typography } from "@mui/material";
import { getAllBlogs } from "../Axios/Api";
import SnackbarPopUp from "../Common/snackbar";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = () => {
    const theme = useTheme();
    const images = [
        {
            label: 'San Francisco – Oakland Bay Bridge, United States',
            imgPath: "./image1.jpg",
        },
        {
            label: 'Bird',
            imgPath:
                './image2.jpg',
        },
        {
            label: 'Bali, Indonesia',
            imgPath:
                './image3.jpg',
        },
        {
            label: 'Goč, Serbia',
            imgPath:
                './image4.jpg',
        },
    ];

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const [blogData , setBlogData] = useState([])
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [messageInfo, setMessageInfo] = useState("")
    const [alertType, setAlertType] = useState("error")

useEffect(()=>{
   getAllBlogs()
   .then((res)=>{
    if(res.responseCode == 200){
        let i = 5
        res.result.map((e , index)=>{
            // if(index <= 4){
               e.imgPath = images[0].imgPath
            // }else {
            //     // if((index - i) <= 4){

            //     // }
            //     // else{ i = index}
            //     console.log(index-i)
            //    e.imgPath = images[0].imgPath
            // }
return e
        })
        setBlogData(res.result)
    }
   })
   .catch(()=>{
        setAlertType("error")
        setOpenSnackBar(true)
        setMessageInfo("Something went wrong")
   })
},[])

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <>
            <Box display="flex" sx = {{backgroundColor : "rgb(55,56,78)" ,padding : "2rem 0rem 2rem 3rem" , color:"#ffffff"}}>
                <div style={{fontSize: "8rem"}}>
                <Typography variant="h1" >
                Stay curious.
                </Typography>
                <Typography variant="h3" color="text.secondary">
                Discover stories, thinking, and expertise from writers on any topic.
                </Typography>
                </div>
                {blogData.length > 0 ?
                <Box style={{ width: "50%", overflow: "hidden" }}>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                        style={{ width: "25vw", overflowX: "none" }}
                    >
                        { blogData.map((step, index) => (

                            <BlogPost step={step} image = {images[1]}/>

                        ))}

                    </AutoPlaySwipeableViews>
                </Box> : ""}
            </Box>
            {openSnackBar &&
                <SnackbarPopUp
                    type={alertType}
                    open={openSnackBar}
                    setopenpopup={setOpenSnackBar}
                    messageInfo={messageInfo}
                />}
        </>
    )
}

export default Carousel