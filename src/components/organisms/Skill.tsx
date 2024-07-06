import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import SkillListItem from "../molecuels/SkillListItem";
import { programming, framework, toul, infra } from "../../data/skill";
import Grid from '@mui/material/Unstable_Grid2';
import QualifiListItem from "../molecuels/QualifiListItem";
import { qualifi } from "../../data/qualifi";
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Skill: React.FC = () => {
    return (
        <Container>
            <Stack spacing={2} sx={{alignItems: "center"}}>
                <Box sx={{display: "flex"}}>
                    <LightbulbIcon sx={{fontSize: 65}}/>
                    <Typography variant="h2" component="div" sx={{textAlign: 'center'}}>
                        Skills
                    </Typography>
                </Box>
                <Container>
                    <Grid container spacing={6}>
                        <Grid xs={12} md={12} lg={12}>
                            <SkillListItem title={programming.title} items={programming.items} />
                        </Grid>
                        <Grid xs={12} md={12} lg={6}>
                            <SkillListItem title={framework.title} items={framework.items} />
                        </Grid>
                        <Grid xs={12} md={12} lg={6}>
                            <SkillListItem title={toul.title} items={toul.items} />
                        </Grid>
                        <Grid xs={12} md={12} lg={6}>
                            <SkillListItem title={infra.title} items={infra.items} />
                        </Grid>
                        <Grid xs={12} md={12} lg={6}>
                            <QualifiListItem qualifies={qualifi} />
                        </Grid>
                    </Grid> 
                </Container>
            </Stack>
        </Container>
    );
};

export default Skill;