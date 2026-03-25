import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";

function Contact() {

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Building systems, real-time apps, and backend solutions. Open to
            interesting projects and opportunities.
          </p>
          <Box className="contact-buttons">
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              href="mailto:rithvikbansal0501@gmail.com"
              className="contact-btn"
            >
              Email Me
            </Button>

            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/Ritz-Bansal"
              target="_blank"
              className="contact-btn"
            >
              GitHub
            </Button>

            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/rithvik-bansal-08701b288/"
              target="_blank"
              className="contact-btn"
            >
              LinkedIn
            </Button>

            <Button
              variant="outlined"
              startIcon={<TwitterIcon />}
              href="https://x.com/Ritztwt"
              target="_blank"
              className="contact-btn"
            >
              Twitter
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;