import React from "react";
import { GithubLogoIcon, LinkedinLogoIcon, XLogoIcon, EnvelopeIcon } from "@phosphor-icons/react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType; 
}

const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: GithubLogoIcon },
  { name: "LinkedIn", url: "https://linkedin.com", icon: LinkedinLogoIcon },
  { name: "Twitter", url: "https://twitter.com", icon: XLogoIcon },
  { name: "Email", url: "mailto:contact@example.com", icon: EnvelopeIcon },
];

const Footer: React.FC = () => {
  return (
    <footer className="py-6 footer ">
      <div className="w-100 mx-auto px-4 d-flex flex-col align-items-center justify-content-between gap-4 container">
        <div className="d-flex justify-content-start gap-6 mb-6">
            <div  className="d-flex flex-column gap-3 align-items-center justify-content-start">
                <span> Find me on </span>
       <div>
           {socialLinks.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition text-2xl"
              title={name}
              aria-label={name}
            >
              <Icon size={32} />
            </a>
          ))}
       </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sanjay Shrestha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
