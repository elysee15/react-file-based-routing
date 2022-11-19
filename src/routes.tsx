import { Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
export const ROUTES: Record<string, { default: () => JSX.Element }> =
  import.meta.glob("/src/pages/**/[a-zA-Z[]*.tsx", {
    eager: true,
  });

export const getRoutes = () =>
  Object.keys(ROUTES).map((route) => {
    const path = route
      .toLowerCase()
      .replace(/\/src\/pages|index|\.tsx$/g, "")
      .replace(/\[\.{3}.+\]/, "*")
      .replace(/\[(.+)\]/, ":$1");

    const Component = ROUTES[route].default;

    return {
      path,
      element: <Component />,
    } as RouteObject;
  });

console.log("[] ROUTES", ROUTES);
console.log("[] routes", getRoutes());

export const router = createBrowserRouter(getRoutes());
