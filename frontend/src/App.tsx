import { useState } from 'react'
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
import LoginPage from "@/pages/LoginPage/LoginPage";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";
import ListPaymentsPage from "@/pages/ListPaymentsPage/ListPaymentsPage";
import AuthPage from "@/pages/AuthPage/AuthPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/list" element={<ListPaymentsPage/>}/>
                    <Route path="/auth" element={<AuthPage/>}/>

                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
