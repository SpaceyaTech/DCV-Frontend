import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import useDebugRender from "tilg";

export default function App() {
  useDebugRender();

  return (
    <main className="max-w-full font-santoshi 2xl:container 2xl:max-w-[95%]">
      <Outlet />
      <ScrollRestoration />
    </main>
  );
}
