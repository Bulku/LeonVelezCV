import * as React from "react";
import { DialogTitle, DialogContent, DialogContentText } from "@mui/material";
import Dialog from "@mui/material/Dialog";

interface Dialogtop {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function Dialogtop(props: Dialogtop) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>No se hacer nada bien pero tengo gracia</DialogTitle>
            <DialogContent className="flex flex-wrap justify-center">
                <img src="images/unnamed.png" alt="Hola mas o menos asi soy XD" />
                
            </DialogContent>
        </Dialog>
    );
}

export default Dialogtop;
