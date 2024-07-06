import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


type Props = {
    title: string,
    sentence: string,
    techStacks: string,
    imagePath: string,
    githubLink: string,
    githubLink2?: string
};

const PortfolioCard: React.FC<Props> = ({ title, sentence, techStacks, imagePath, githubLink, githubLink2 = "" }) => {
    return (
        <Card sx={{height: "100%"}}>
            <CardMedia
                component="img"
                height="40%"
                image={imagePath}
                width={"100%"}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom color="text.secondary" sx={{ wordWrap: "break-word" }}>
                    {sentence}
                </Typography>
                <Typography gutterBottom color="text.secondary" sx={{ wordWrap: "break-word" }}>
                    {techStacks}
                </Typography>
                <Typography gutterBottom color="text.secondary">
                    <Link href={githubLink} target="_blank" underline="hover">
                        github
                    </Link>
                </Typography>
                <Typography gutterBottom color="text.secondary">
                    {githubLink2.length !== 0 ?
                        (<Link href={githubLink2} target="_blank" underline="hover">
                            github2
                        </Link>) : ""}
                </Typography>
            </CardContent>
        </Card>
      );
}

export default PortfolioCard;