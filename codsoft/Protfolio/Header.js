import React from 'react';

function Header() {
  return (
    <header className="bg-dark text-white text-center py-4">
      <h1>Chirag Surana</h1>
      <p>Front-End Developer & MCA Student</p>
      <div>
        <a href="mailto:chiraag.surana@gmail.com" className="btn btn-primary mx-2">Email</a>
        <a href="https://linkedin.com/in/chirag-surana-3266891b1" className="btn btn-info mx-2">LinkedIn</a>
        <a href="https://github.com/ChiraagSurana" className="btn btn-dark mx-2">GitHub</a>
      </div>
    </header>
  );
}

export default Header;
