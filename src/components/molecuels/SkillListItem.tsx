import React from "react";
import { Box, Grid, Rating, Typography } from "@mui/material";


type Props = {
  title: string,
  items: {
    name: string,
    period: string,
    level: number
  }[]
}


const SkillListItem: React.FC<Props> = ({ title, items }) => {

  return (
    <Box sx={{backgroundColor: "white", height: "100%", paddingBottom: 2}}>
      <Typography variant="h4" component="div" sx={{textAlign: 'center', padding: 4}}>
        {title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4} sx={{textAlign: "center"}}>
          <Typography variant="h6">
            技術
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{textAlign: "center"}}>
          <Typography variant="h6">
            経験年数(年/月)
          </Typography>
          
        </Grid>
        <Grid item xs={4} sx={{textAlign: "center"}}>
          <Typography variant="h6">
            スキルレベル
          </Typography>
        </Grid>
        {items.map((item) => {
          return (
            <>
              <Grid item xs={4} sx={{textAlign: "center"}}>
                {item.name}
              </Grid>
              <Grid item xs={4} sx={{textAlign: "center"}}>
                {item.period}
              </Grid>
              <Grid item xs={4} sx={{textAlign: "center"}}>
                <Rating name="read-only" value={item.level} readOnly />
              </Grid>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SkillListItem;