import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import SkillListItem from "../molecuels/SkillTable";
import { programmingSkill } from "../../data/skill";


const Skill: React.FC = () => {
    return (
        <Container>
            <Stack spacing={2}>
                <Typography variant="h2" component="div" sx={{textAlign: 'center'}}>
                    Skills
                </Typography>
                <SkillListItem title={programmingSkill.title} items={programmingSkill.items} />
            </Stack>
        </Container>
    );
};

export default Skill;