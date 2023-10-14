import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { customTheme } from "./assets/reset";
import WorkersTable from "./WorkersTable";
import MainLayout from "./components/layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "login", element: <Login /> },
      {
        path: "/trabajadores",
        element: <WorkersTable />,
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
