import { Suspense } from "react";
import { DrinkMachinePage } from "../pages/drink-machine-page/drink-machine-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { links } from "./links";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: links.machine,
      element: <DrinkMachinePage />,
    },
  ]);

  // return (
  //   <Suspense fallback={<BigLoader />}>
  //     <RouterProvider router={router} />
  //   </Suspense>
  // );

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

