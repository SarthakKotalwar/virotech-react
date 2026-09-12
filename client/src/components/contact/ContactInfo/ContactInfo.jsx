import React, { useState, useRef, useEffect } from "react";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Clock,
  ExternalLink,
  Copy,
  Check,
  ChevronDown
} from "lucide-react";
import "./ContactInfo.scss";

const ContactInfo = () => {
  const [showMailMenu, setShowMailMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef(null);

  const emailAddress = "support@virotech.in";
  const emailSubject = encodeURIComponent("Project Consultation Inquiry - Virotech Technologies");
  const emailBody = encodeURIComponent("Hello Virotech Team,\n\nI would like to discuss a project with your team.\n\n");

  // Direct webmail web composers
  const mailLinks = {
    default: `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${emailSubject}&body=${emailBody}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${emailAddress}&subject=${emailSubject}&body=${emailBody}`,
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMailMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setShowMailMenu(false);
    }, 1800);
  };

  return (
    <div className="contact-info">
      <div className="contact-info__header">
        <span className="contact-label">02 / REACH OUT</span>
        <div className="contact-info__arrow">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="contact-info__intro">
        <h3>
          Prefer direct <span>channels?</span>
        </h3>
        <p>
          Skip the specs builder and connect with our operational desks or
          dispatch a direct directive.
        </p>
      </div>

      <div className="contact-info__list">
        {/* Email with Multi-Client Selector */}
        <div
          ref={dropdownRef}
          className={`contact-info__item contact-info__item--email ${showMailMenu ? "is-open" : ""}`}
          onClick={() => setShowMailMenu((prev) => !prev)}
        >
          <span className="contact-info__item-number">01</span>
          <div className="contact-info__item-icon">
            <Mail size={18} />
          </div>
          <div className="contact-info__item-content">
            <span>EMAIL</span>
            <strong>{emailAddress}</strong>
          </div>
          <div className="contact-info__item-arrow">
            <ChevronDown size={16} className={`chevron ${showMailMenu ? "rotate" : ""}`} />
          </div>

          {/* Email Provider Flyout */}
          {showMailMenu && (
            <div className="email-flyout" onClick={(e) => e.stopPropagation()}>
              <div className="email-flyout__header">
                <span>CHOOSE EMAIL CLIENT</span>
              </div>

              <div className="email-flyout__options">
                <a
                  href={mailLinks.gmail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flyout-option"
                  onClick={() => setShowMailMenu(false)}
                >
                  <span className="dot dot--red" />
                  <strong>Open in Gmail</strong>
                  <ExternalLink size={12} className="option-arrow" />
                </a>

                <a
                  href={mailLinks.outlook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flyout-option"
                  onClick={() => setShowMailMenu(false)}
                >
                  <span className="dot dot--blue" />
                  <strong>Open in Outlook Web</strong>
                  <ExternalLink size={12} className="option-arrow" />
                </a>

                <a
                  href={mailLinks.default}
                  className="flyout-option"
                  onClick={() => setShowMailMenu(false)}
                >
                  <span className="dot dot--neutral" />
                  <strong>Default Mail App</strong>
                  <ArrowUpRight size={12} className="option-arrow" />
                </a>

                <button
                  type="button"
                  className="flyout-option flyout-option--copy"
                  onClick={handleCopyEmail}
                >
                  <span className="dot dot--green" />
                  <strong>{copied ? "Copied to Clipboard!" : "Copy Email Address"}</strong>
                  {copied ? <Check size={13} className="copy-check" /> : <Copy size={12} />}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Location Item */}
        <div
          className="contact-info__item"
          onClick={() => window.open("https://maps.google.com/?q=India", "_blank")}
        >
          <span className="contact-info__item-number">02</span>
          <div className="contact-info__item-icon">
            <MapPin size={18} />
          </div>
          <div className="contact-info__item-content">
            <span>LOCATION</span>
            <strong>India</strong>
          </div>
          <div className="contact-info__item-arrow">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>

      <div className="contact-info__response">
        <span>RESPONSE GUARANTEE</span>
        <strong>&lt; 24H</strong>
        <p>Direct review by principal engineers, not automated triage bots.</p>
      </div>
    </div>
  );
};

export default ContactInfo;