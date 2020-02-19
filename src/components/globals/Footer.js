import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-grey text-center text-capitalize flex-center">
            <h3>all rights reserved &copy;{new Date().getFullYear().toString()}</h3>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
    );
  }

