"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";

import { jsonplaceholderHttp } from "service/jsonplaceholder";

type Props = {
  body: string;
  name: string;
  email: string;
  postId: number;
  id: number;
};

export default function Page() {
  const { postId } = useParams();
  const [post, setPost] = useState<string | null>(null);

  const { data, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      jsonplaceholderHttp.getComments({
        postId,
      }),
    enabled: !!postId,
  }) as { data: Props[]; isPending: boolean };

  useEffect(() => {
    setPost(postId as string);
  }, [postId]);

  if (isPending) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      {data.map((item: Props) => (
        <Card key={item.id}>
          <CardHeader title={item.name} subheader={item.email} />
          <CardContent>
            <Typography variant="body1">{item.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
