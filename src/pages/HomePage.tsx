import React from "react";
import Header from "../components/organisms/Header";
import { Box, Stack } from "@mui/material";
import About from "../components/organisms/About";
import Skill from "../components/organisms/Skill";
import { grey } from "@mui/material/colors";


const HomePage: React.FC = () => {
    return (
        <>
            <Stack spacing={20} sx={{backgroundColor: grey[200]}}>
                <Header />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <About />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Skill />
                </Box>
            </Stack>
        </>
    );
};

export default HomePage;