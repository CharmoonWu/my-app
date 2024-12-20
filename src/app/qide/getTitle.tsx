"use client";

import React from "react";

import { useSuspenseQuery } from "@tanstack/react-query";
import { loginReg } from "service/authService";

export default function GetTitle() {
  const { data: getTitle }: any = useSuspenseQuery({
    queryKey: ["getTitle", "zh_CN"],
    queryFn: () => loginReg.getTitle({ lang: "zh_CN" }),
  });
  console.log(getTitle);

  return (
    <div>
      {getTitle?.map((v: { name?: string; code?: string; image?: string }) => {
        return <div key={v.code}>{v.name}</div>;
      })}
    </div>
  );
}
