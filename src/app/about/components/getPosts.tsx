"use client";

import React from "react";

import { useSuspenseQuery } from "@tanstack/react-query";
import { jsonplaceholderHttp } from "service/jsonplaceholder";

// Corrected Props type definition
type Props = {
  body: string;
  title: string;
  userId: number;
  id: number;
};

export default function GetTitle() {
  const { data } = useSuspenseQuery({
    queryKey: ["getTitle", "zh_CN"],
    queryFn: jsonplaceholderHttp.getPosts,
  }) as { data: Props[] };

  return (
    <div>
      {data.map((item: Props) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
