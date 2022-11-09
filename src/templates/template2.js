import React from "react";
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

const Template2 = () => {

const textStyle = {
    display : "flex",
    flexDirection : "column",
    justifyContent :"center",
    fontSize : "1.2rem",
    padding : "2rem"
}

    return (
        <>
        <Box sx = {{backgroundColor : "#577783" , color : "#ffffff"}}> 
        <Grid container >
        
            <Grid item xs={6} sx = {{p : 0}}>
            <div >
                <div >
                    <img style = {{width : "100%"}} src="./worldMap.png"/>
                </div>
            </div>
            </Grid>
            <Grid item xs={6} sx = {{margin : "auto" , p : 0}}>
            <div style={textStyle}>
            <div style = {{fontSize  : "3rem" , margin : "0rem 0rem 2rem"}}>Know your audience</div>
            <div>Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look.</div>
            </div>
            </Grid>
            </Grid>
            <div style={{textAlign :"center" ,  margin : "2rem" }}>
            <Button variant="contained" style = {{color :"#ffffff" , backgroundColor : "#2f454f",  boxShadow : "5px 10px 5px #3f464f"}}> CREATE YOUR BLOG</Button>
            </div>
            </Box>
        </>
    )

}

export default Template2