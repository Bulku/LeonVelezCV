interface DescriptionProps {
    title: string;
    text: string;
  }
  
  const Description = ({ title, text }: DescriptionProps) => {
    return (
      <div className="text-center p-10 w-96 min-w-max m-2">
        <h2 className="text-4xl mb-5 font-bold  text-Black">{title}</h2>
        <h4 className="mb-2 font-medium whitespace-normal max-w-xl  text-[#050505] font-">{text}</h4>
      </div>
    );
  };
  
  export default Description;