import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

Main.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node,
};

export default function Main({ children, sx, ...other }) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: "100%",
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
