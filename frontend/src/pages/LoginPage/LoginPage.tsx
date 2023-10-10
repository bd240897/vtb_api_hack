import React from 'react';
import {useForm} from "react-hook-form";
import style from "./LoginPage.module.sass"
import classNames from "classnames";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginSchema} from "@/utils/yup";
import {useNavigate} from "react-router-dom";
import {TextField, Box, Button, Typography, Grid} from '@mui/material';

const styleCss = {
    buttonPrimary: {
        backgroundColor: '#0077FF',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#fdff8f',
            color: '#3c52b2',
        },
    },
    buttonSecondary: {
        backgroundColor: '#009FE0',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#fdff8f',
            color: '#3c52b2',
        },
    },
}


const LoginPage = () => {

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({
        resolver: yupResolver(
            LoginSchema,
        ),
    })

    const navigate = useNavigate();

    console.log("errors", errors)

    const handleSubmitForm = (data: any) => {
        console.log("data", data)
        navigate('/')
    }


    return (
        <div className={style.root}>
            <div className={style.background}>
                <Box px={3} py={2}>

                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        className={style.form}
                        onSubmit={handleSubmit(handleSubmitForm)}
                        mb={2}
                    >

                        <Typography variant="h6" align="center" margin="dense" sx={{mb: "10px"}}>
                            Авторизация
                        </Typography>

                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>

                                <TextField
                                    id="standard-password-input"
                                    label="Логин"
                                    helperText="Введите Логин"
                                    // defaultValue=""
                                    variant="filled"
                                    margin="dense"
                                    error={!!errors.login}
                                    fullWidth
                                    className={style.input}
                                    sx={{borderRadius: "10px"}}
                                    InputProps={{
                                        style: {
                                            borderRadius: "10px",
                                        }
                                    }}
                                    {...register('login')}
                                />

                                <Typography color="white" variant="p">
                                    {errors.login?.message}
                                </Typography>

                            </Grid>
                            <Grid item xs={12} sm={12}>

                                <TextField
                                    id="filled-helperText"
                                    label="Пароль"
                                    helperText="Введите Пароль"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="filled"
                                    margin="dense"
                                    error={!!errors.password}
                                    fullWidth
                                    className={style.input}
                                    sx={{mb: "20px", borderRadius: "10px"}}
                                    InputProps={{
                                        style: {
                                            borderRadius: "10px",
                                        }
                                    }}
                                    {...register('password')}
                                />

                                <Typography variant="p" color="white">
                                    {errors.password?.message}
                                </Typography>
                            </Grid>
                        </Grid>


                        <div>
                            <Button variant="contained"
                                    fullWidth
                                    type={"submit"}
                                    // className={classNames(classes.button)}
                                    // sx={{backgroundColor: 'neutral.main'}}
                                    sx={styleCss.buttonPrimary}
                            >
                                Войти
                            </Button>
                        </div>

                        {/*TODO delete*/}
                        {/*<Box sx={{backgroundColor: 'neutral.main'}}*/}
                        {/*>*/}
                        {/*    asdasdasd*/}
                        {/*</Box>*/}

                    </Box>

                    <Typography variant={'h5'} align={"center"} sx={{mb: 2}}>или</Typography>

                    <Button variant="contained"
                            fullWidth
                            className={classNames(style.buttonSecondary)}
                            sx={styleCss.buttonSecondary}
                    >
                        Зарегистрироваться
                    </Button>

                </Box>
            </div>
        </div>
    );
};


export default LoginPage;
