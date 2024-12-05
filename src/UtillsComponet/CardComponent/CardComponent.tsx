import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import './CardComponent.css';
import { memo } from "react";
export interface CardComponentProps {
  img: string;
  title: string;
  shortDescription: string;
  id: number;
}

function CardComponent(cardContent: CardComponentProps) {
  return (
    <Card key={cardContent.id} className="w-[100%] h-auto cursor-pointer rounded-md border-2 p-1 border-black flex flex-col items-center  overflow-hidden">
      <CardHeader  className="text-lg font-extrabold" title={ cardContent.title || "Monster House"}></CardHeader>
      <CardContent className="block w-[100%] h-[100%] overflow-hidden">
        <CardMedia
          component={"img"}
          className="h-[100%]  w-[100%] block"
          src={cardContent.img || "https://mir-s3-cdn-cf.behance.net/project_modules/1400/61da8438155793.57575971afe13.jpg"}
          alt="Avatar"
        />
        <p className="text-center text-lg font-bold">{cardContent.shortDescription || "This is a monster house"}</p>
      </CardContent>
      
    </Card>
  );
}

export default memo(CardComponent);
