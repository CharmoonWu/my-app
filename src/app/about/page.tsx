"use client";

import { Suspense } from "react";
import { Button, Drawer } from "@mui/material";

import GetPosts from "./components/getPosts";
import { useDisclosure } from "utils/useDisclosure";
import FormPost from "./components/formPost";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="space-y-5">
      <Button variant="contained" onClick={onOpen}>
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
