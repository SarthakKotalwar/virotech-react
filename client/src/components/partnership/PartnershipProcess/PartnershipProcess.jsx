import { useEffect, useRef, useState } from "react";
import "./PartnershipProcess.scss";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Connect",
    shortTitle: "First conversation",
    description:
      "Tell us about your business, capabilities, technology and the opportunity you see for working together.",
  },
  {
    number: "02",
    title: "Explore",
    shortTitle: "Find the right fit",
    description:
      "We understand your goals, explore the strongest collaboration model and define where our teams can create value together.",
  },
  {
    number: "03",
    title: "Collaborate",
    shortTitle: "Build the partnership",
    description:
      "Our teams align on responsibilities, technology, commercial terms and the practical path forward.",
  },
  {
    number: "04",
    title: "Scale",
    shortTitle: "Grow together",
    description:
      "Once everything is aligned, we launch the partnership and work together toward measurable, long-term growth.",
  },
];

const AGREEMENT_LINES = [92, 74, 83, 60, 88, 70];
const CHECKLIST_ITEMS = [
  "Sign the partnership agreement",
  "Assign a technical point of contact",
  "Complete the integration review",
  "Confirm your go-live date",
];

function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function CheckIcon({ className = "", progress }) {
  const dash = 26;
  const style =
    progress === undefined
      ? undefined
      : {
          strokeDasharray: dash,
          strokeDashoffset: dash * (1 - clamp(progress)),
        };
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={["partnership-process__check-icon", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <path d="M5 12.5 10 17l9-10" />
    </svg>
  );
}

export default function PartnershipProcess() {
  const sectionRef = useRef(null);
  const [pinState, setPinState] = useState("before");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalScroll = section.offsetHeight - vh;
      const scrolled = -rect.top;

      if (scrolled < 0) {
        setPinState("before");
        setProgress(0);
      } else if (scrolled >= 0 && scrolled <= totalScroll) {
        setPinState("pinned");
        const rawProgress = scrolled / totalScroll;
        const mappedProgress = clamp(rawProgress / 0.8);
        setProgress(mappedProgress);
      } else {
        setPinState("after");
        setProgress(1);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activeIndex = Math.min(
    PROCESS_STEPS.length - 1,
    Math.floor(progress * PROCESS_STEPS.length)
  );

  const localProgress = clamp(
    progress * PROCESS_STEPS.length - activeIndex
  );

  const sceneProgress = (index) =>
    activeIndex === index ? localProgress : activeIndex > index ? 1 : 0;

  const sceneState = (index) =>
    [
      "partnership-process__scene",
      activeIndex === index ? "is-active" : "",
      activeIndex > index ? "is-past" : "",
    ]
      .filter(Boolean)
      .join(" ");

  const handshakeProgress = sceneProgress(0);
  const agreementProgress = sceneProgress(1);
  const checklistProgress = sceneProgress(2);
  const doneProgress = sceneProgress(3);

  return (
    <section
      ref={sectionRef}
      className="partnership-process"
      aria-label="Partnership process"
    >
      <div
        className={[
          "partnership-process__viewport",
          pinState === "pinned" ? "is-pinned" : "",
          pinState === "after" ? "is-after" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="partnership-process__background">
          <span className="partnership-process__orb partnership-process__orb--one" />
          <span className="partnership-process__orb partnership-process__orb--two" />
          <span className="partnership-process__grid" />
        </div>

        <div className="partnership-process__container">
          <div className="partnership-process__heading">
            <div className="partnership-process__eyebrow">
              <span className="partnership-process__eyebrow-dot" />
              HOW WE COLLABORATE
            </div>
            <h2>
              From first conversation
              <br />
              to <span>shared growth.</span>
            </h2>
            <p>
              A simple, transparent process designed to turn the right
              partnership into a working relationship.
            </p>
          </div>

          <div className="partnership-process__visual">
            <div className="partnership-process__steps">
              {PROCESS_STEPS.map((step, index) => {
                const isActive = index === activeIndex;
                const isCompleted = index < activeIndex;
                return (
                  <div
                    key={step.number}
                    className={[
                      "partnership-process__step",
                      isActive ? "partnership-process__step--active" : "",
                      isCompleted ? "partnership-process__step--completed" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <div className="partnership-process__step-line">
                      <span className="partnership-process__step-number">
                        {isCompleted ? <CheckIcon /> : step.number}
                      </span>
                      {index !== PROCESS_STEPS.length - 1 && (
                        <span className="partnership-process__connector">
                          <span
                            style={{
                              transform: isCompleted ? "scaleY(1)" : "scaleY(0)",
                            }}
                          />
                        </span>
                      )}
                    </div>
                    <div className="partnership-process__step-content">
                      <span className="partnership-process__step-label">
                        {step.shortTitle}
                      </span>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="partnership-process__stage">
              <div className="partnership-process__stage-glow" />
              <div className="partnership-process__orbit partnership-process__orbit--one" />
              <div className="partnership-process__orbit partnership-process__orbit--two" />
              <div className="partnership-process__orbit partnership-process__orbit--three" />

              {/* Step 1: Pixel-Perfect Dual-Sliding Handshake */}
              <div className={sceneState(0)}>
                <div className="partnership-process__clasp-stage">
                  {/* Subtle Background Glow behind hands */}
                  <span
                    className="partnership-process__clasp-glow"
                    style={{
                      opacity: clamp((handshakeProgress - 0.4) * 2),
                      transform: `translate(-50%, -50%) scale(${
                        0.8 + clamp(handshakeProgress) * 0.4
                      })`,
                    }}
                  />

                  {/* Shared-Origin Handshake Wrapper */}
                  <div
                    className="partnership-process__clasp-frame"
                    style={{
                      transform: `scale(${0.96 + clamp(handshakeProgress) * 0.04})`,
                    }}
                  >
                    {/* Left Half (Blue Sleeve Hand) */}
                    <div
                      className="partnership-process__hand-half partnership-process__hand-half--left"
                      style={{
                        transform: `translateX(${(1 - handshakeProgress) * -140}px)`,
                      }}
                    >
                      <img
                        src="/images/partnership/handshake-3d.png"
                        alt="Left Hand"
                        className="partnership-process__hand-asset"
                      />
                    </div>

                    {/* Right Half (Gray Sleeve Hand) */}
                    <div
                      className="partnership-process__hand-half partnership-process__hand-half--right"
                      style={{
                        transform: `translateX(${(1 - handshakeProgress) * 140}px)`,
                      }}
                    >
                      <img
                        src="/images/partnership/handshake-3d.png"
                        alt="Right Hand"
                        className="partnership-process__hand-asset"
                      />
                    </div>
                  </div>
                </div>
                <p className="partnership-process__scene-caption">
                  You and <strong>Virotech</strong> agree to partner
                </p>
              </div>

              {/* Step 2: Agreement */}
              <div className={sceneState(1)}>
                <div className="partnership-process__paper-rig">
                  <span className="partnership-process__roller" />
                  <div
                    className="partnership-process__paper"
                    style={{
                      transform: `scaleY(${clamp(agreementProgress * 1.5)})`,
                    }}
                  >
                    <div className="partnership-process__paper-inner">
                      <span className="partnership-process__paper-title">
                        Partnership Agreement
                      </span>
                      {AGREEMENT_LINES.map((width, i) => (
                        <span
                          key={width + "-" + i}
                          className="partnership-process__paper-line"
                          style={{
                            width: `${width}%`,
                            opacity: clamp(
                              agreementProgress * AGREEMENT_LINES.length - i
                            ),
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="partnership-process__roller" />
                </div>
                <p className="partnership-process__scene-caption">
                  Terms are drafted and reviewed together
                </p>
              </div>

              {/* Step 3: Checklist */}
              <div className={sceneState(2)}>
                <div className="partnership-process__checklist">
                  {CHECKLIST_ITEMS.map((label, i) => {
                    const itemProgress = clamp(
                      checklistProgress * CHECKLIST_ITEMS.length - i
                    );
                    return (
                      <div
                        key={label}
                        className="partnership-process__check-item"
                        style={{
                          opacity: 0.3 + itemProgress * 0.7,
                          transform: `translateX(${
                            (1 - itemProgress) * -10
                          }px)`,
                        }}
                      >
                        <span className="partnership-process__check-box">
                          <CheckIcon progress={itemProgress} />
                        </span>
                        <span>{label}</span>
                      </div>
                    );
                  })}
                </div>
                <p className="partnership-process__scene-caption">
                  What we need from you to get started
                </p>
              </div>

              {/* Step 4: Scale Stamp */}
              <div className={sceneState(3)}>
                <div
                  className="partnership-process__stamp"
                  style={{
                    opacity: clamp(doneProgress / 0.25),
                    transform: `scale(${
                      1.35 - clamp(doneProgress / 0.25) * 0.35
                    }) rotate(${-10 + clamp(doneProgress / 0.25) * 10}deg)`,
                  }}
                >
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                    const dist = 14 + clamp(doneProgress / 0.5) * 75;
                    const pop =
                      doneProgress < 0.25
                        ? clamp(doneProgress / 0.25)
                        : Math.max(0.2, 1 - (doneProgress - 0.25) * 0.8);
                    const rad = (angle * Math.PI) / 180;
                    return (
                      <span
                        key={angle}
                        className="partnership-process__stamp-particle"
                        style={{
                          opacity: pop,
                          transform: `translate(${Math.cos(rad) * dist}px, ${
                            Math.sin(rad) * dist
                          }px)`,
                        }}
                      />
                    );
                  })}
                  <CheckIcon
                    className="partnership-process__stamp-check"
                    progress={clamp(doneProgress / 0.35)}
                  />
                </div>
                <p className="partnership-process__scene-caption">
                  Agreement complete — <strong>welcome to Virotech</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="partnership-process__progress">
            <div className="partnership-process__progress-track">
              <span style={{ width: `${progress * 100}%` }} />
            </div>
            <div className="partnership-process__progress-labels">
              {PROCESS_STEPS.map((step, index) => (
                <span
                  key={step.number}
                  className={index === activeIndex ? "is-active" : ""}
                >
                  {step.number}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}