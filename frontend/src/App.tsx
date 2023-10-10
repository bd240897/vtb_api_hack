import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.sass'

import {Route, Routes} from "react-router-dom";

import * as React from 'react';
import Button from '@mui/material/Button';
import Test from "@/components/Test/Test";
import Header from "@/components/pageUI/Header/Header"
import MainPage from "@/pages/MainPage/MainPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";
import ListPaymentsPage from "@/pages/ListPaymentsPage/ListPaymentsPage";
import AuthPage from "@/pages/AuthPage/AuthPage";

// login
import LoginPage from "@/pages/LoginPage/LoginPage";
import TabPage from "@/pages/LoginPage/TabPage";

// theme
import {colors} from "@mui/material";

// const { palette } = createTheme();
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: "#2a9461"
//         },
//         secondary: {
//             main: "#494c7d"
//         },
//         companyRed: {
//             main: "#E44D69",
//             contrastText: "#000",
//         },
//     }
// });

// interface IPalette extends Palette {
//     xxx: {}
// }
// interface ITheme extends Theme {
//     palette: IPalette;
// }
// interface IThemeOptions extends ThemeOptions {
//     palette: IPalette;
// }

// const theme = createTheme({
//     palette: {
//         primary: { dark: '#f50057' as React.CSSProperties['color'] },
//     }
// });

import {createTheme, ThemeProvider, styled, Palette, Theme, ThemeOptions} from '@mui/material/styles';

// @ts-ignore
const theme = createTheme({
    status: {
        danger: '#e53e3e'
    },
    palette: {
        secondary: {
            main: colors.orange[500]
        },
        neutral: {
            main: "#555555",
            darker: colors.grey[700]
        }
    }
})


const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <div>
                    <Routes>
                        <Route path="/" element={<MainLayout/>}>
                            <Route index element={<MainPage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/register" element={<RegisterPage/>}/>
                            <Route path="/list" element={<ListPaymentsPage/>}/>
                            <Route path="/auth" element={<AuthPage/>}/>
                            <Route path="/tab" element={<TabPage/>}/>


                            <Route path="*" element={<NotFoundPage/>}/>
                        </Route>
                    </Routes>
                </div>
            </ThemeProvider>
        </>
    );
};

export default App;
