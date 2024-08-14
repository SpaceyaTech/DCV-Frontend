import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const Index = lazy(() => import("@/pages/index"));
const Notfound = lazy(() => import("@/pages/404"));
const About = lazy(() => import("@/pages/about"));

export const routes: Array<RouteObject> = [
  {
    index: true,
    element: (
      <Suspense>
        <Index />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense>
        <Notfound />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense>
        <About />
      </Suspense>
    ),
  },
];

export default routes;
