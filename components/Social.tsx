import { FaInstagram, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

interface ButtonProps {
  name: string;
  link: string;
}

const Social = ({ link, name }: ButtonProps) => {
  let size = 22;
  let socials = [
    
    {
      icon: (
        <FaInstagram
          onClick={() => window.open(link)}
          size={size}
          className="m-auto"
        />
      ),
      name: "Instagram",
    },
    {
      icon: (
        <FaGithub
          onClick={() => window.open(link)}
          size={size}
          className="m-auto"
        />
      ),
      name: "Github",
    },
    {
      icon: (
        <FaYoutube
          onClick={() => window.open(link)}
          size={size}
          className="m-auto"
        />
      ),
      name: "Youtube",
    },
    {
      icon: (
        <FaLinkedin
          onClick={() => window.open(link)}
          size={size}
          className="m-auto"
        />
      ),
      name: "Linkedin",
    },
  ];

  let icon = socials.find((social) => social.name === name)?.icon;

  return (
    <div>
      <button className="w-11 h-11 bg-[#ca8a04] rounded-full content-center m-3 hover:bg-[#92400e] ">
        {icon}
      </button>
    </div>
  );
};

export default Social;