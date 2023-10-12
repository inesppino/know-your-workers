import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Main from "./Main";

export default function MainLayout() {
  return (
    <>
      <header>Soy el header</header>

      <Box
        sx={{
          display: { lg: "flex" },
          minHeight: { lg: 1 },
        }}
      >
        <Main>
          <Outlet />
        </Main>
      </Box>
    </>
  );
}
