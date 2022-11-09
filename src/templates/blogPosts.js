import { Avatar, Card, CardHeader, CardMedia, Collapse, IconButton ,CardContent, Typography} from "@mui/material";

import { red } from "@mui/material/colors";
import React from "react";

const BlogPost = ({step}) => {
    console.log(step)
    return (
        <>
            <Card sx={{ maxWidth: 345 , backgroundColor : "#fffdd0" , color : "#000000"}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {step.name.slice(0,1)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                           
                        </IconButton>
                    }
                    title= {step.name}
                    subheader= {step.creationDate}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={step.imgPath}
                    alt="Paella dish"
                />
                <CardContent>
                <Typography variant="body1" >
                 {step.title}
                    </Typography>
                <Typography variant="body2" color="text.secondary">
                    {step.description}
                    </Typography>
                </CardContent>
                <Collapse in={false} timeout="auto" unmountOnExit>
                    <CardContent>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    )
}

export default BlogPost