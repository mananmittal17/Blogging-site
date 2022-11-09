import React from "react";
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import "./footer.css"
const Footer = () => {

    return (
        <>
        <Box sx = {{backgroundColor : "#1d2b34" , color:"#ffffff" , padding:"3rem  2rem"}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <div className = "head">
                        <h4>Help</h4>
                        <ul>
                            <li>Help Center</li>
                            <li>Help Forum</li>
                            <li>Video Tutorials</li>
                        </ul>
                    </div>
                </Grid >
                <Grid item xs={3}>
                    <div  className = "head">
                        <h4>Community</h4>
                        <ul>
                            <li>Blogger Buzz</li>

                        </ul>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className = "head">
                        <h4>Developers</h4>
                        <ul>
                            <li>Blogger API</li>
                            <li>Developer Forum</li>

                        </ul>
                    </div>
                </Grid>
            </Grid>
            </Box>
        </>
    )
}

export default Footer