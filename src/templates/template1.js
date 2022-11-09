import React from "react";
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
const Template1 = () => {

const textStyle = {
    display : "flex",
    flexDirection : "column",
    justifyContent :"center",
    fontSize : "1.2rem",
    padding : "2rem"
}

    return (
        <>
        <Box sx = {{backgroundColor : "#ff8000" , color : "#ffffff"}}> 
        <Grid container >
        <Grid item xs={8} sx = {{margin : "auto" , p : 0}}>
            <div style={textStyle}>
            <div style = {{fontSize  : "3rem" , margin : "0rem 0rem 2rem"}}>Choose the perfect design</div>
            <div>Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.</div>
            </div>
            </Grid>
            <Grid item xs={4} sx = {{p : 0}}>
            <div style = {{position : "relative"}}>
                <div style = {{position : "absolute" , left : "-12%"}} >
                <img style = {{width : "50%"}} src="./quote.png.png"/ >
                    <img style = {{width : "40%"}} src="./pngwing.com (2).png" />
                    
                </div>

                <div >
                    <img style = {{width : "100%"}} src="./beach.webp"/>
                </div>
            </div>
            </Grid>
            </Grid>
            </Box>
        </>
    )

}

export default Template1