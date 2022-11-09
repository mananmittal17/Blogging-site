import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';

import Zoom from '@mui/material/Zoom';
import
Dialog
    from "@mui/material/Dialog";
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { useForm, Controller } from "react-hook-form";
// import { makeStyles } from "@mui/styles"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import FormControl from "@mui/material/FormControl"
import { login, signUp } from "../Axios/Api";
import { Alert } from "@mui/material";
import AlertTitle from '@mui/material/AlertTitle'
import SnackbarPopUp from "./snackbar";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} timeout={500} />;
});




const HeaderBar = () => {

    const defaultValues = {
        name: "",
        email: "",
        password: "",
    };
    const { control, handleSubmit, formState, setValue, reset } = useForm({
        defaultValues,
    });
    const [showPopUp, setShowPopUp] = useState(false)
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [messageInfo, setMessageInfo] = useState("")
    const [alertType, setAlertType] = useState("error")
    const [userStatus, setUserStatus] = useState("")
    const barStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.3rem"
    };
    const rightPartStyle = {
        display: "flex",
        color: "#ffffff",
        alignItems: "center",
        fontWeight: "900",
        fontSize: "1.2rem"
    }
    const { errors } = formState;
    const errorClass = {
        color: "#bf1650",
        padding: "0",
        // marginLeft: "13.5rem",
        " &::before": {
            display: "inline",
            content: "⚠ ",
        },
    }


    const onSubmit = (data) => {
        if(userStatus == "signUp") { 
        if (data.email && data.name && data.password) {
            signUp(data)
                .then((res) => {
                    if (res.responseCode == 200) {
                        login(data)
                            .then((resp) => {
                                console.log(resp)
                                setShowPopUp(false)
                                setAlertType("success")
                                setMessageInfo("Login Successfull")
                                setOpenSnackBar(true)
                                localStorage.setItem("userData", JSON.stringify(resp.result))
                            })
                            .catch((error) => {
                                setAlertType("error")
                                setMessageInfo("Login Failed")
                                setOpenSnackBar(true)
                                console.log(error.message)
                            })
                    }
                    else {
                        setOpenSnackBar(true)
                        setAlertType("warning")
                        setMessageInfo(res.message)
                        setOpenSnackBar(true)
                    }
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err.message)
                    setOpenSnackBar(true)
                    setAlertType("error")
                    setMessageInfo("User registration unsuccessful")
                })
        }
     }else if(userStatus == "login"){
        login(data)
        .then((resp) => {
            console.log(resp)
            setShowPopUp(false)
            setAlertType("success")
            setMessageInfo("Login Successfull")
            setOpenSnackBar(true)
            localStorage.setItem("userData", JSON.stringify(resp.result))
        })
        .catch((error) => {
            setAlertType("error")
            setMessageInfo("Login Failed")
            setOpenSnackBar(true)
            console.log(error.message)
        })
     }
    };
    useEffect(() => {
        if (!showPopUp) {
            reset()
        }
    }, [showPopUp])

    const handleLogOut = ()=>{
        localStorage.removeItem("userData");
        setUserStatus("logOut")
        setAlertType("error")
            setMessageInfo("Logout successful")
            setOpenSnackBar(true)

    }

    return (
        <>
            <div style={barStyle}>
                <div style={rightPartStyle}>
                    <img src="./logo1.png" height={40} />
                    <div > BLOG-WLOG</div>
                </div>
                <div style={rightPartStyle}>

                    {localStorage.getItem("userData") ?
                        <Button style={{ marginRight: "1rem" }} color="inherit" onClick={handleLogOut}>LOG OUT</Button> :
                        <>
                            <Button style={{ marginRight: "1rem" }} color="inherit" onClick={() => {setUserStatus("login");
                            setShowPopUp(true);
                        }}>LOG IN</Button>
                            <Button style={{ marginRight: "1rem" }} color="inherit" onClick={() => {
                                setShowPopUp(true);
                                setUserStatus("signUp")
                            }}>SIGN UP</Button>

                        </>
                    }
                    <Button color="inherit">
                        CREATE YOUR BLOG
                    </Button>
                </div>
            </div>
            {showPopUp &&
                <Dialog
                    open={showPopUp}
                    TransitionComponent={Transition}
                    onClose={() => setShowPopUp(false)}
                    sx={{ cursor: "pointer" }}
                    maxWidth="md"
                >
                    <Box sx={{ p: 4 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <div style={{ textAlign: "center" }}>
                                    <Typography variant="body1">
                                        {userStatus == "login" ? "LOGIN" : "SIGN UP"}
                                    </Typography>
                                    <Typography variant="body2" sx={{ p: 2 }}>
                                        {userStatus == "login" ?
                                            "Login to see your blogs" :
                                            "Enter your email address to create account on Blog-Wlog"
                                        }
                                    </Typography>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                                   {userStatus == "signUp"  ? 
                                    <Box display="flex" flexDirection="column">
                                        <Box sx={{ width: "18rem", display: "flex" }}>
                                            <Typography
                                                variant="subtitle1"
                                                gutterBottom
                                            >
                                                Name
                                            </Typography>
                                            <Typography sx={{ color: "red" }}>*</Typography>
                                        </Box>
                                        <FormControl fullWidth>
                                            <Controller
                                                name="name"
                                                // rules={
                                                //     ({
                                                //         required: true,
                                                //     },
                                                //     {
                                                //         validate: (value) => {
                                                //             return
                                                //             //    validateUsername(value);
                                                //         },
                                                //     })
                                                // }
                                                render={({ field }) => (
                                                    <TextField
                                                        {...field}
                                                        id="name"
                                                        type="text"
                                                        fullWidth
                                                        size="small"
                                                        variant="outlined"
                                                        placeholder="Enter your name"
                                                        inputProps={{
                                                            maxLength: 30,
                                                            autocomplete: "name",
                                                            form: {
                                                                autocomplete: "off",
                                                            },
                                                        }}
                                                        onInput={(e) => {
                                                            e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, "")

                                                        }}
                                                    />
                                                )}
                                                control={control}
                                            />
                                            {errors?.firstName ? (
                                                <p className={errorClass}>{errors.firstName.message}</p>
                                            ) : (
                                                <p style={{ padding: "0", margin: "0" }}><br /></p>
                                            )}
                                        </FormControl>
                                    </Box>
                                    :""
                                     }
                                    <Box display="flex" flexDirection="column">
                                        <Box sx={{ width: "18rem", display: "flex" }}>
                                            <Typography
                                                variant="subtitle1"
                                                gutterBottom
                                            >
                                                Email
                                            </Typography>
                                            <Typography sx={{ color: "red" }}>*</Typography>
                                        </Box>
                                        <FormControl fullWidth>
                                            <Controller
                                                name="email"
                                                // rules={
                                                //     ({
                                                //         required: true,
                                                //     },
                                                //     {
                                                //         validate: (value) => {
                                                //             return
                                                //             //   validateEmail(value);
                                                //         },
                                                //     })
                                                // }
                                                render={({ field }) => (
                                                    <TextField
                                                        {...field}
                                                        id="email"
                                                        type="text"
                                                        fullWidth
                                                        size="small"
                                                        variant="outlined"
                                                        placeholder="Enter your mail"
                                                        inputProps={{
                                                            autocomplete: "email",
                                                            form: {
                                                                autocomplete: "off",
                                                            },
                                                        }}
                                                    />
                                                )}
                                                control={control}
                                            />
                                            {errors?.email ? (
                                                <p className={errorClass}>{errors.email.message}</p>
                                            ) : (
                                                <p style={{ padding: "0", margin: "0" }}><br /></p>
                                            )}
                                        </FormControl>
                                    </Box>


                                    <Box display="flex" flexDirection="column">
                                        <Box sx={{ width: "18rem", display: "flex" }}>
                                            <Typography
                                                variant="subtitle1"
                                                gutterBottom
                                            >
                                                Password
                                            </Typography>
                                            <Typography sx={{ color: "red" }}>*</Typography>
                                        </Box>
                                        <FormControl fullWidth>
                                            <Controller
                                                name="password"
                                                // rules={
                                                //     ({
                                                //         required: true,
                                                //     },
                                                //     {
                                                //         validate: (value) => {
                                                //             return ""
                                                //         }
                                                //     })
                                                // }
                                                render={({ field }) => (
                                                    <TextField
                                                        {...field}
                                                        id="password"
                                                        size="small"
                                                        placeholder="Enter 8-16 digit password"
                                                        type={"password"}

                                                        variant="outlined"
                                                        fullWidth

                                                        inputProps={{
                                                            maxLength: 16,
                                                            autocomplete: "password",
                                                            form: {
                                                                autocomplete: "off",
                                                            },
                                                        }}
                                                    />
                                                )}
                                                control={control}
                                            />
                                            {errors?.password ? (
                                                <p className={errorClass}>{errors.password.message}</p>
                                            ) : (
                                                <p style={{ padding: "0", margin: "0" }}><br /></p>
                                            )}
                                        </FormControl>
                                    </Box>

                                    <div style={{ textAlign: "center" }}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            style={{ textTransform: "none", backgroundColor: "#1d2b34", color: "#ffffff" }}
                                        >
                                            { userStatus == "login" ? "Lets get started" : "Begin your journey"}
                                        </Button>
                                    </div>
                                </form>
                            </Grid>
                            <Grid item xs={6}>
                                {/* <img style = {{width : "100%"}} src="./image1.jpg" /> */}
                                <Typography variant= {userStatus == "signUp" ? "h3" :"h4"} style={{ backgroundImage: "linear-gradient(to right, #EDC2D8FF , #8ABAD3FF)", height: "100%", color: "#ffffff", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    BLOG-WLOG
                                </Typography >
                            </Grid>
                        </Grid>
                    </Box>


                </Dialog>
            }
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


export default HeaderBar