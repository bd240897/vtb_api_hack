import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Container, useTheme} from "@mui/material";
import * as React from 'react';
import style from "./TabPage.module.sass"

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

import SwipeableViews from "react-swipeable-views-react-18-fix";
import LoginPage from "@/pages/LoginPage/LoginPage";


/**
 * Таб списка пеерключений
 */
function TabPanel(props: TabPanelProps) {

    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

/**
 * Генератор классов для табов
 * @param index
 */
function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function TabPage() {
    const theme = useTheme();

    // текущий таб
    const [value, setValue] = React.useState(0);

    /**
     * Установить текщий таб (апп бар)
     * @param event
     * @param newValue
     */
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <>
            <Container maxWidth="sm" sx={{height: "100%", py: "0", my: "0"}}>

                <div className={style.root}>
                    <Box className={style.box}>

                        <Box className={style.boxIn}>
                            <AppBar position="static">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="white"
                                    textColor="inherit"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                    style={{backgroundColor: "white", boxShadow: 'none'}}
                                >
                                    <Tab label="Вход"
                                         sx={{
                                             backgroundColor: "#000743",
                                             borderTopLeftRadius: "30px",
                                             borderTopRightRadius: "30px",
                                         }}
                                         {...a11yProps(0)} />
                                    <Tab label="Регистрация" sx={{
                                        backgroundColor: "#000743",
                                        borderTopLeftRadius: "30px",
                                        borderTopRightRadius: "30px",
                                    }} {...a11yProps(1)} />
                                </Tabs>
                            </AppBar>


                            <Box sx={{backgroundColor: "#000743"}}>
                                <SwipeableViews
                                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={value}
                                    onChangeIndex={handleChangeIndex}
                                >

                                    <Box value={value} index={0} dir={theme.direction}>
                                        <LoginPage/>
                                    </Box>
                                    <Box value={value} index={1} dir={theme.direction}>
                                        Item One
                                    </Box>

                                </SwipeableViews>
                            </Box>

                        </Box>

                    </Box>
                </div>
            </Container>
        </>
    );
}


export default TabPage;
