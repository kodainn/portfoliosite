import React from "react";
import Header from "../components/organisms/Header";
import { Box, Stack } from "@mui/material";
import About from "../components/organisms/About";
import Skill from "../components/organisms/Skill";
import Work from "../components/organisms/Work";


const PortfolioPage: React.FC = () => {
    return (
        <>
            <Stack spacing={20} marginBottom={20} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Header />
                <Box >
                    <About />
                </Box>
                <Box>
                    <Skill />
                </Box>
                <Box>
                    <Work />
                </Box>
            </Stack>
        </>
    );
};

export default PortfolioPage;