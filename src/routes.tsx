import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const MeetTheChildren = lazy(() => import("@/pages/MeetTheChildren"));
const Index = lazy(() => import("@/pages/index"));
const Projects = lazy(() => import("@/pages/Projects"));
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
    path: "/children",
    element: (
      <Suspense>
        <MeetTheChildren />
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
  }
];

export default routes;
