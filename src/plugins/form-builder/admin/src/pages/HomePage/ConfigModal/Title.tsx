import { Box, DialogTitle, IconButton } from "@mui/material";
import React, { ReactElement } from "react";
import CloseIcon from "@mui/icons-material/Close";

export interface DialogTitleProps {
  children?: React.ReactNode;
  onClose: () => void;
  icon: ReactElement;
}

export const Header = (props: DialogTitleProps) => {
  const { children, onClose, icon } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, display: "flex", fontWeight: 900 }}>
      <Box component="span" sx={{ px: 1 }}>
        {icon}
      </Box>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
