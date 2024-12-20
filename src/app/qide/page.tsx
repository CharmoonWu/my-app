import { Suspense } from "react";

import GetTitle from "./getTitle";
import ServerPage from "./serverPage";

export default function Main() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <GetTitle />
      </Suspense>
      {/* <ServerPage /> */}
    </>
  );
}
