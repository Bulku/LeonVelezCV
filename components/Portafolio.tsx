import PortafolioDialog from "./PortafolioDialog";
import React from "react";
import { useState } from "react";

interface portafolioProps {
  titulo: string;
  texto: string;
  descripcion: string;
  imagen?: string;
  link?: string;
}

const Portafolio = ({ titulo, texto, imagen, link,descripcion }: portafolioProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="m-10 text-justify  min-w-max rounded-xl hover:scale-95 bg-[#fbbf24]">
      <PortafolioDialog
        title={titulo}
        text={descripcion}
        image={imagen}
        link={link}
        open={open}
        selectedValue=""
        onClose={handleClose}
      />
      <div className="mt-10 h-36 flex justify-center bg-neutral-100 "  >
        <img src={imagen} alt="Portfolio image" className="m-auto w-40" />
      </div>
      <br></br>
      <div className="mx-10 mb-5 w-[14rem] text-left">
        <h2 className="mb-5 font-medium text-xl">{titulo}</h2>
        <h4 className="mb-2 font-medium text-[black] whitespace-normal max-w-xs">
          {texto}
        </h4>
        <button
          className="text-black font-bold text-lg hover:scale-95 bg-[#fbbf24]  rounded-xl"
          onClick={handleClickOpen}
        >
          Ver mas {">"}
        </button>
      </div>
    </div>
  );
};

export default Portafolio;