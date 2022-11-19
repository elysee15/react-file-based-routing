import { getRoutes, ROUTES } from "../routes";

export default function Index() {
  console.log("[] ROUTES", ROUTES);
  console.log("[] routes", getRoutes);

  return <div>This is the /Index/ page</div>;
}
