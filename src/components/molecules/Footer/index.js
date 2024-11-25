import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built by{' '}
        <a
          href="https://www.linkedin.com/in/nilesh-ranjan-294285253/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Nilesh Ranjan
        </a>
      </section>

      <section className="Footer__Items">
        
        <a
          href="https://github.com/NILESH-2003/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;
