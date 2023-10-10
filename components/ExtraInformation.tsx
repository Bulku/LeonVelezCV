import { FcFlashOn } from "react-icons/fc";

interface ExtraInformationProps {
  name: string;
}

const extraInformation = ({ name }: ExtraInformationProps) => {
  return (
    <div>
      <FcFlashOn className="mr-5 float-left" color="#0e7490" />
      <h2>{name}</h2>
    </div>
  );
};

export default extraInformation;