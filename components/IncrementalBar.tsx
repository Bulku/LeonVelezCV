interface IncrementalBarProps {
    percentage: number;
    name: string;
  }
  
  const incrementalBar = ({ percentage, name }: IncrementalBarProps) => {
    const percentageStyle = {
      width: `${percentage}%`,
      backgroundColor: "#ca8a04",
      height: "5px",
      borderRadius: "5px",
    };
  
    return (
      <div className="mb-1">
        <h2 className="float-left">{name}</h2>
        <h2 className="float-right">{percentage}%</h2>
        <br></br>
        <div className="p-0.5 rounded-full outline outline-1 outline-[#ca8a04]">
          <div style={percentageStyle} />
        </div>
      </div>
    );
  };
  
  export default incrementalBar;