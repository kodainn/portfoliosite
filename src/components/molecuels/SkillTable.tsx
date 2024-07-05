import React from "react";
import { Box, Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";


type Props = {
  title: string,
  items: {
    name: string,
    period: string,
    level: number
  }[]
}


const SkillTable: React.FC<Props> = ({ title, items }) => {

  return (
    <Box sx={{backgroundColor: "white"}}>
      <Typography variant="h4" component="div" sx={{textAlign: 'left', margin: 3}}>
        {title}
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">技術</TableCell>
              <TableCell align="center">経験年数(年/月)</TableCell>
              <TableCell align="center">スキルレベル</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="center">{item.period}</TableCell>
                <TableCell align="center"><Rating name="read-only" value={item.level} readOnly /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SkillTable;