import { Box } from "@mui/material";
import styled from "styled-components";
import Drawer from "@mui/material/Drawer";

export const DrawerWrapper = styled(Box)`
  width: 20vw;
  height: 100%;

  background-image: linear-gradient(to right, pink, lightblue);
`;

export const DrawerStyled = styled(Drawer)`
  background-color: transparent;
  backdrop-filter: blur(20px);
`;
