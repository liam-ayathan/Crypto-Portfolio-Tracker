import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
 
export default function ActionAreaCard(item) {
  console.log("displaying",item)
  return (
    <Card sx={{ maxWidth: 345}} style ={{margin: "30px"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={item['props']['content']}
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
