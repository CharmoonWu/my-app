import { Suspense } from "react";

import GetPosts from "./components/getPosts";

export default function Main() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <GetPosts />
      </Suspense>
    </>
  );
}
