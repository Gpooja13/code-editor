import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

const Languages = ({ setLanguage }) => {
  const languageDetails = [
    { name: "javascript", icon: <IoLogoJavascript />, extension: "js" },
    { name: "java", icon: <FaJava />, extension: "java" },
    { name: "html", icon: <FaHtml5 />, extension: "html" },
    { name: "css", icon: <FaCss3Alt />, extension: "css" },
    { name: "python", icon: <FaPython />, extension: "py" },
    { name: "cpp", icon: <TbBrandCpp />, extension: "cpp" },
  ];

  return (
    <aside
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "6%",
        padding: "10px",
        backgroundColor: "#2f2f2f",
        color: "white",
        borderRight: "1px solid #ccc",
      }}
    >
      {languageDetails.map((lang) => (
        <span
          key={lang.name}
          onClick={() => setLanguage({ lang: lang.name, extension: lang.extension })}
          style={{
            cursor: "pointer",
            color: "#fff",
            fontSize: "30px",
            margin: "10px",
            border: "1px solid #fff",
            padding: "8px",
            backgroundColor: "#444",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s ease-in-out",
          }}
          title={lang.name.toUpperCase()}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          {lang.icon}
        </span>
      ))}
    </aside>
  );
};

export default Languages;
