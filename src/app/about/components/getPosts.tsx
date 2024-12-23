"use client";

import React from "react";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

import { jsonplaceholderHttp } from "service/jsonplaceholder";

// Corrected Props type definition
type Props = {
  body: string;
  title: string;
  userId: number;
  id: number;
};

export default function GetTitle() {
  const router = useRouter();

  const { data } = useSuspenseQuery({
    queryKey: ["getTitle", "zh_CN"],
    queryFn: jsonplaceholderHttp.getPosts,
  }) as { data: Props[] };

  return (
    <div className="space-y-3">
      {data.map((item: Props) => (
        <Card key={item.id} onClick={() => router.push(`/about/${item.id}`)}>
          <CardContent className="space-y-3">
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body1">{item.body}</Typography>
          </CardContent>
          <CardActions className="justify-end">
            <Button variant="contained">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
