import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import Languages from "./Languages";

const CodeEditor = () => {
  const [language, setLanguage] = useState({
    lang: "javascript",
    extension: "js",
  });
  const [code, setCode] = useState("// Write your code here...");
  const [results, setResults] = useState("");
  const [theme, setTheme] = useState("vs-dark"); // State for theme

  const handleRunCode = () => {
    setResults(`Output of your ${language.lang} code will be displayed here.`);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "vs-dark" ? "vs-light" : "vs-dark"));
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        backgroundColor: theme === "vs-dark" ? "black" : "white",
      }}
    >
      <div style={{ display: "flex", flex: 1, width: "100%" }}>
        {/* Languages Sidebar */}
        <Languages setLanguage={setLanguage} />

        {/* Code Editor Section */}
        <div style={{ flex: 1 }}>
          <nav style={{ backgroundColor: "#2f2f2f" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  backgroundColor: "#1e1e1e",
                  padding: "10px",
                  marginTop: "5px",
                  color: "white",
                }}
              >
                main.{language.extension}
              </span>
              <div>
                <button
                  onClick={handleRunCode}
                  style={{
                    padding: "5px 25px",
                    backgroundColor: "#007acc",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginRight: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Run
                </button>
              </div>
            </div>
          </nav>
          <Editor
            height="92vh"
            language={language.lang}
            value={code}
            onChange={(value) => setCode(value)}
            theme={theme} // Use dynamic theme
            options={{
              selectOnLineNumbers: true,
              automaticLayout: true,
              minimap: { enabled: false },
              lineNumbers: "off",
            }}
          />
        </div>

        {/* Results Editor Section */}
        <div style={{ flex: 1 }}>
          <nav style={{ backgroundColor: "#2f2f2f" , display:"flex", justifyContent:"space-between", width:"100%", alignItems:"center"}}>
            <button
              onClick={toggleTheme}
              style={{
                padding: "5px",
                marginLeft: "10px",
                backgroundColor: "#ccc",
                color: "#333",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize:"16px"
                
              }}
            >
              {theme === "vs-dark" ? "Light" : "Dark"} Mode
            </button>
    
              <button
                onClick={() => setResults("")}
                style={{
                  padding: "5px 25px",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "2px solid black",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  margin: "6px",
                  fontWeight: "bold",
                }}
              >
                Clear
              </button>
 
          </nav>
          <Editor
            height="92vh"
            value={results}
            theme={theme} // Use dynamic theme
            options={{
              selectOnLineNumbers: true,
              automaticLayout: true,
              minimap: { enabled: false },
              lineNumbers: "off",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
