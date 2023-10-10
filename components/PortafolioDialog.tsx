import * as React from "react";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";

interface PortafolioDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  title: string;
  text: string;
  image?: string;
  link?: string;
}

function PortfolioDialog(props: PortafolioDialogProps) {
  const { onClose, selectedValue, open, title, text, image, link  } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle className="flex flex-wrap justify-center text-[#d69a00] font-bold text-2xl">
        {title}
      </DialogTitle>
      <DialogContent className="flex flex-wrap justify-center">
        <img src={image} alt="hireMe Dialog" />
        <DialogContentText className="flex flex-wrap text-center justify-center">
          {text}
        </DialogContentText>
        {link ? <button
          className="m-5 py-2 px-5 rounded-lg text-slate-50 text-black hover:bg-[#d69a00] font-bold text-lg"
          onClick={() =>
            window.open(link)
          }
        >
          Link
        </button>:null}
        <button
          className="m-5 py-2 px-5 rounded-lg text-slate-50 text-black hover:bg-[#d69a00] font-bold text-lg"
          onClick={handleClose}
        >
          Cerrar
        </button>
      </DialogContent>
    </Dialog>
  );
}

export default PortfolioDialog;