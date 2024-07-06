import React from "react";
import { Box, Grid, Typography } from "@mui/material";


type Props = {
    qualifies: string[]
}


const QualifiListItem: React.FC<Props> = ({ qualifies }) => {

  return (
    <Box sx={{backgroundColor: "white", height: "100%", paddingBottom: 2}}>
      <Typography variant="h4" component="div" sx={{textAlign: 'center', padding: 4}}>
        保有資格
      </Typography>
      <Grid container spacing={3}>
        {qualifies.map((qualifies, index) => {
          return (
            <Grid item xs={12} sx={{textAlign: "center"}} key={index}>
                {qualifies}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default QualifiListItem;