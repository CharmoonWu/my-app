import React from "react";

import { TextField, Box, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { jsonplaceholderHttp } from "service/jsonplaceholder";

type Inputs = {
  title: string;
  body: string;
};

export default function FormPost() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const mutation = useMutation({
    mutationFn: (formData: Inputs) => jsonplaceholderHttp.postPosts(formData),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutation.mutate(data);
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="h-[50vh] py-8 px-3 flex flex-col items-stretch"
    >
      <div className="flex flex-col flex-grow space-y-5">
        <TextField variant="standard" label="title" {...register("title")} />
        <TextField variant="standard" label="body" {...register("body")} />
      </div>

      <Button type="submit" variant="contained" className="self-end">
        Action
      </Button>
    </Box>
  );
}
