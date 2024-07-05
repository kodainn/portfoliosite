import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, Stack, Typography } from "@mui/material";

const About: React.FC = () => {
    return (
        <Container maxWidth="md"> {/* Set the maxWidth of the Container to control overall width */}
            <Stack spacing={2} sx={{ textAlign: 'center', alignItems: 'center' }}>
                <Typography variant="h2" component="div">
                    About Me
                </Typography>
                <Typography component="div" sx={{ maxWidth: "70%" }}>
                    情報系専門学校に通っている学生。学校ではAI、組込み分野を学習しており、個人ではweb技術に興味があり、アルバイトや独学で学んでいる。
                    将来的には、web系のフルスタックエンジニアとしてやっていきたい。
                </Typography>
            </Stack>
        </Container>
    );
};

export default About;