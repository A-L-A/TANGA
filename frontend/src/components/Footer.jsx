import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondaryGreen text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} TANGA. All rights reserved.
        </p>
        <div className="space-x-4">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline">
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
