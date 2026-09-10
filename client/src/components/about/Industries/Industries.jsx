import React, { useState, useEffect } from "react";
import {
  FiActivity,
  FiTrendingUp,
  FiShoppingCart,
  FiBook,
  FiTruck,
  FiCpu,
  FiHome,
  FiGlobe,
  FiBriefcase,
  FiShield,
} from "react-icons/fi";
import industriesData from "./IndustriesData";
import "./Industries.scss";

export default function Industries() {
  const [activeNode, setActiveNode] = useState(0);
  const [isUserHovered, setIsUserHovered] = useState(false);

  const fallbackIcons = [
    FiActivity,      // Healthcare
    FiTrendingUp,    // FinTech
    FiShoppingCart, // E-Commerce
    FiBook,         // Education
    FiTruck,        // Logistics
    FiCpu,          // Manufacturing
    FiHome,         // Real Estate
    FiGlobe,        // Travel
    FiBriefcase,    // Startups & SMEs
    FiShield,
  ];

  const rawList =
    industriesData?.items ||
    industriesData?.industries ||
    industriesData?.cards ||
    (Array.isArray(industriesData) ? industriesData : []);

  const total = rawList.length || 9;
  const originX = 600;
  const originY = 560;

  // Auto-cycle across sectors every 2.8s
  useEffect(() => {
    if (isUserHovered) return;
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % total);
    }, 2800);
    return () => clearInterval(interval);
  }, [isUserHovered, total]);

  // Wide radial canopy (183° to 357°)
  const startAngle = 183 * (Math.PI / 180);
  const endAngle = 357 * (Math.PI / 180);

  const nodes = rawList.map((item, idx) => {
    const fraction = total > 1 ? idx / (total - 1) : 0.5;
    let angle = startAngle + fraction * (endAngle - startAngle);

    // Prevent direct 270° vertical alignment so strokes never collapse on subpixels
    const deg = angle * (180 / Math.PI);
    if (Math.abs(deg - 270) < 1.5) {
      angle += 0.035;
    }

    // Staggered orbits: Outer Canopy (490x390) vs Inner Canopy (340x270)
    const isOuter = idx % 2 === 0;
    const radiusX = isOuter ? 490 : 340;
    const radiusY = isOuter ? 390 : 270;

    const cx = Math.round(originX + radiusX * Math.cos(angle));
    const cy = Math.round(originY + radiusY * Math.sin(angle));

    return {
      ...item,
      cx,
      cy,
      angle,
      isOuter,
      icon: item?.icon || fallbackIcons[idx % fallbackIcons.length],
    };
  });

  const activeItem = nodes[activeNode] || nodes[0];

  return (
    <section className="industries-network about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-section-header">
          <span className="about-section-tag">
            {industriesData?.badge || "DOMAIN EXPERTISE"}
          </span>
          <h2>
            Sectors We <span>Empower</span> & Transform
          </h2>
          <p>
            {industriesData?.description ||
              "Engineering custom architectures, cloud automation, and digital intelligence across critical global industries."}
          </p>
        </div>

        {/* Mobile Info Dock */}
        <div className="mobile-sector-card">
          <span className="dock-tag">SECTOR 0{activeNode + 1}</span>
          <h4>{activeItem?.title}</h4>
          <p>{activeItem?.description || "Enterprise architecture, integration, and cloud scalability."}</p>
        </div>

        {/* Canvas Frame */}
        <div className="network-scaler-box">
          <div
            className="network-stage"
            onMouseEnter={() => setIsUserHovered(true)}
            onMouseLeave={() => setIsUserHovered(false)}
          >
            {/* SVG Vector Circuit Conduits */}
            <svg
              className="network-svg"
              viewBox="0 0 1200 680"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Active Beam Gradient */}
                <linearGradient
                  id="activeBeam"
                  gradientUnits="userSpaceOnUse"
                  x1="600"
                  y1="560"
                  x2="600"
                  y2="150"
                >
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>

                {/* Root Base Supply Beam */}
                <linearGradient
                  id="rootTrunkBeam"
                  gradientUnits="userSpaceOnUse"
                  x1="600"
                  y1="655"
                  x2="600"
                  y2="560"
                >
                  <stop offset="0%" stopColor="#1d4ed8" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>

                <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Pedestal Bottom Base */}
              <line
                x1="520"
                y1="655"
                x2="680"
                y2="655"
                stroke="#2563eb"
                strokeWidth="7"
                strokeLinecap="round"
                filter="url(#glowFilter)"
              />

              {/* Glowing Base Rail */}
              <line
                x1="600"
                y1="655"
                x2="600"
                y2="560"
                stroke="url(#rootTrunkBeam)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#glowFilter)"
              />

              {/* Base Energy Surge */}
              <circle r="4.5" fill="#ffffff" filter="url(#glowFilter)">
                <animateMotion
                  path="M 600 655 L 600 560"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Radial Conduits */}
              {nodes.map((node, idx) => {
                const isActive = activeNode === idx;
                const pathId = `branch-path-${idx}`;
                const pathD = `M ${originX} ${originY} L ${node.cx} ${node.cy}`;

                return (
                  <g key={`branch-${idx}`}>
                    {/* Underlying Vector Path (Visible on Inactive & Active) */}
                    <path
                      id={pathId}
                      d={pathD}
                      stroke={isActive ? "#2563eb" : "#94a3b8"}
                      strokeWidth={isActive ? "4" : "2"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      strokeDasharray={isActive ? "none" : "6 5"}
                      opacity={isActive ? 1 : 0.65}
                      className={isActive ? "branch-active-glow" : ""}
                    />

                    {/* Active Energy Photon Particle */}
                    {isActive && (
                      <circle r="5" fill="#38bdf8" className="photon-particle">
                        <animateMotion dur="1.1s" repeatCount="indefinite">
                          <mpath href={`#${pathId}`} />
                        </animateMotion>
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Virotech Core Apex Root Node */}
            <div
              className="network-root"
              style={{ left: `${(originX / 1200) * 100}%`, top: `${(originY / 680) * 100}%` }}
            >
              <div className="root-halo" />
              <div className="root-circle">
                <img
                  src="/images/logo/logo.png"
                  alt="Virotech Technologies"
                  className="root-logo-img"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    if (e.currentTarget.nextSibling) {
                      e.currentTarget.nextSibling.style.display = "flex";
                    }
                  }}
                />
                <span className="root-fallback">V</span>
              </div>
              <span className="root-label">VIROTECH CORE</span>
            </div>

            {/* Circular Industry Nodes */}
            {nodes.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeNode === idx;
              const leftPercent = (item.cx / 1200) * 100;
              const topPercent = (item.cy / 680) * 100;

              return (
                <div
                  key={idx}
                  className={`network-node ${item.isOuter ? "node-outer" : "node-inner"} ${
                    isActive ? "is-active" : ""
                  }`}
                  style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
                  onClick={() => setActiveNode(idx)}
                  onMouseEnter={() => {
                    setIsUserHovered(true);
                    setActiveNode(idx);
                  }}
                  onMouseLeave={() => setIsUserHovered(false)}
                >
                  <div className="node-bubble">
                    <Icon className="node-icon" />
                    {isActive && <span className="bubble-sonar-wave" />}
                  </div>

                  <span className="node-short-title">{item.title}</span>

                  {/* Desktop Popover */}
                  <div className="node-popover">
                    <span className="popover-tag">SECTOR 0{idx + 1}</span>
                    <h4>{item.title}</h4>
                    <p>{item.description || "Enterprise architecture, integration, and cloud scalability."}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}