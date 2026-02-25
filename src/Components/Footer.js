import React from "react";

function Footer() {
  return (
    <footer className="text-center text-white mt-auto p-3" style={{ background: "rgba(0,0,0,0.2)" }}>
      &copy; {new Date().getFullYear()} Joga Funkcjonalna
    </footer>
  );
}

export default Footer;