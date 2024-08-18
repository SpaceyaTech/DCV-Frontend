import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const MeetTheChildren = lazy(() => import("@/pages/MeetTheChildren"));
const Index = lazy(() => import("@/pages/index"));
const Projects = lazy(() => import("@/pages/Projects"));
const Notfound = lazy(() => import("@/pages/404"));
const Donate = lazy(() => import("@/pages/donate"));
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
    path: "/about",
    element: (
      <Suspense>
        <About />
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
    path: "/donate",
    element: (
      <Suspense>
        <Donate />
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
];

export default routes;
