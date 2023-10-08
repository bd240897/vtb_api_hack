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

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>

                // TODO delete
                {/*<Route path="/" element={<MainLayout/>}>*/}
                {/*    <Route index element={<ListSessionsPage/>}/>*/}


                    {/*<Route path="session/" element={<SessionLayout/>}>*/}
                    {/*    <Route path=":sessionId" element={<DetailSessionPage/>}/>*/}
                    {/*    <Route path=":sessionId/log" element={<LogSessionPage/>}/>*/}
                    {/*</Route>*/}

                    {/*/!*<Route path="/test" element={<TestPage/>}/>*!/*/}

                    {/*<Route path="/about" element={<AboutPage/>}/>*/}
                    {/*<Route path="/login" element={<LoginPage/>}/>*/}
                {/*</Route>*/}
            </Routes>
        </div>
    );
};

export default App;
