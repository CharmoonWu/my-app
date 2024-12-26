"use client";

import { Suspense } from "react";
import { Button, Drawer, Checkbox } from "@mui/material";

import { styled } from "@mui/material/styles";

import GetPosts from "./components/getPosts";
import { useDisclosure } from "utils/useDisclosure";
import FormPost from "./components/formPost";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  "&.Mui-checked": {
    color: theme.status.danger,
  },
}));

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="space-y-5 flex flex-col items-stretch">
      <CustomCheckbox />
      <Button variant="contained" onClick={onOpen} className="self-end">
        Add
      </Button>
      <Suspense fallback={<div>Loading...</div>}>
        <GetPosts />
      </Suspense>
      <Drawer anchor="bottom" open={isOpen} onClose={onClose}>
        <FormPost />
      </Drawer>
    </div>
  );
}
