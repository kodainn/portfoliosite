import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import PortfolioCard from '../molecuels/PortfolioCard';
import { portfolioSite, techBooksStudy, goodBuy } from "../../data/portfolio";


const Work: React.FC = () => {
    return (
        <Container>
            <Stack spacing={2} sx={{alignItems: "center"}}>
                <Box sx={{display: "flex"}}>
                    <PlaylistAddCheckIcon sx={{fontSize: 80}}/>
                    <Typography variant="h2" component="div" sx={{textAlign: 'center'}}>
                        Works
                    </Typography>
                </Box>
                <Container>
                    <Grid container spacing={5} sx={{display: "flex", justifyContent: "center"}}>
                        <Grid item xs={4}>
                            <PortfolioCard 
                                title={portfolioSite.title}
                                sentence={portfolioSite.sentence}
                                techStacks={portfolioSite.techStack}
                                imagePath={portfolioSite.imagePath}
                                githubLink={portfolioSite.githubLink} />
                        </Grid>
                        <Grid item xs={4}>
                            <PortfolioCard 
                                title={techBooksStudy.title}
                                sentence={techBooksStudy.sentence}
                                techStacks={techBooksStudy.techStack}
                                imagePath={techBooksStudy.imagePath}
                                githubLink={techBooksStudy.githubLink}
                                githubLink2={techBooksStudy.githubLink2} />
                        </Grid>
                        <Grid item xs={4}>
                            <PortfolioCard 
                                title={goodBuy.title}
                                sentence={goodBuy.sentence}
                                techStacks={goodBuy.techStack}
                                imagePath={goodBuy.imagePath}
                                githubLink={goodBuy.githubLink} />
                        </Grid>
                    </Grid>
                </Container>
            </Stack>
        </Container>
    );
}


export default Work;