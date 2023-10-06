import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WorkersTable from "./WorkersTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/trabajadores",
    element: <WorkersTable />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
