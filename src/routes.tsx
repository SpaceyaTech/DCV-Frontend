import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const Index = lazy(() => import("@/pages/index"));
const Projects = lazy(() => import("@/pages/Projects"));
const Notfound = lazy(() => import("@/pages/404"));
const About = lazy(() => import("@/pages/about"));
const MeetTheTeam = lazy(() => import("@/pages/MeetTheTeam"));

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
    path: "/staff",
    element: (
      <Suspense>
        <MeetTheTeam />
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
