import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const MeetTheChildren = lazy(() => import("@/pages/MeetTheChildren"));
const Index = lazy(() => import("@/pages/index"));
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
    path: "*",
    element: (
      <Suspense>
        <Notfound />
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
];

export default routes;
