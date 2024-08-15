import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const Index = lazy(() => import("@/pages/index"));
const Projects = lazy(() => import("@/pages/Projects"));
const Notfound = lazy(() => import("@/pages/404"));

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
    path: "/projects",
    element: (
      <Suspense>
        <Projects />
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
];

export default routes;
