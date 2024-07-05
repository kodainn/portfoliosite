import React from "react";
import Header from "../components/organisms/Header";
import { Box, Stack } from "@mui/material";
import About from "../components/organisms/About";
import Skill from "../components/organisms/Skill";


const HomePage: React.FC = () => {
    return (
        <>
            <Stack spacing={20} marginBottom={20}>
                <Header />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <About />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                    <Skill />
                </Box>
            </Stack>
        </>
    );
};

export default HomePage;