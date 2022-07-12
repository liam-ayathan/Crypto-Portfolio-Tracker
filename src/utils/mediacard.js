import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
 
export default function ActionAreaCard(item) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://lh3.googleusercontent.com/nXZuKlCM3AK-EJb8TPLJoU2seRr6Z3NZvoMePa5rVho-R81127YX7FrTzjArI6oz__ZeohznH9BimiZCGI1vYHTs6DMRY4t6XiBF"
          alt={JSON.stringify(item["props"]["content"])}
        />
      </CardActionArea>
      <CardContent>
        <Typography>{JSON.stringify(item["props"]["name"])}</Typography>
        <Typography>{JSON.stringify(item["props"]["description"])}</Typography>
      </CardContent>
    </Card>
  );
}
