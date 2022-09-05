import * as React from "react";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import * as S from "./DrawerMenu.styles";

import Drawer from "@mui/material/Drawer";

import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Button onClick={toggleDrawer} sx={{ zIndex: "9999" }}>
        {" "}
        <Icon path={mdiMenu} size={1} color="#FFF" />
      </Button>
      <S.DrawerStyled
        anchor="left"
        open={open}
        sx={{ zIndex: "99999" }}
        onClose={toggleDrawer}
      >
        <S.DrawerWrapper>
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </S.DrawerWrapper>
      </S.DrawerStyled>
    </div>
  );
}
