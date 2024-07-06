import React from "react";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import GitHubIcon from '@mui/icons-material/GitHub';
import NotesIcon from '@mui/icons-material/Notes';
import XIcon from '@mui/icons-material/X';


const About: React.FC = () => {
    return (
        <Container>
            <Stack spacing={2} sx={{ textAlign: 'center', alignItems: 'center' }}>
                <Box sx={{display: "flex"}}>
                    <FaceIcon sx={{fontSize: 65}} />
                    <Typography variant="h2" component="div">
                        About Me
                    </Typography>
                </Box>
                <Typography component="div" sx={{ maxWidth: "70%" }}>
                    情報系専門学校に通っている学生。学校ではAI、組込み分野を学習しており、個人ではweb技術系の技術を勉強したり、プログラマーとしてアルバイトをしている。バックエンドからフロントエンドまで興味あり、インフラとかもやってみたいお気持ち。将来的には、web系のフルスタックエンジニアとしてやっていきたい。
                </Typography>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Link href="https://github.com/kodainn" target="_blank" color={"black"} underline="hover" sx={{display: "flex"}}>
                        <GitHubIcon sx={{fontSize: 35}} />
                        <Typography marginRight={3} fontSize={25} component="div">
                            Github
                        </Typography>
                    </Link>  
                    <Link href="https://qiita.com/kodainn" target="_blank" color={"black"} underline="hover" sx={{display: "flex"}}>
                        <NotesIcon sx={{fontSize: 35}} />
                        <Typography marginRight={3} fontSize={25} component="div">
                            Qiita
                        </Typography>
                    </Link>
                    <Link href="https://x.com/TaTaTaNa0513" target="_blank" color={"black"} underline="hover" sx={{display: "flex"}}>
                        <XIcon sx={{fontSize: 35}} />
                        <Typography marginRight={3} fontSize={25} component="div">
                            X
                        </Typography>
                    </Link> 
                </Box>
            </Stack>
        </Container>
    );
};

export default About;