import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Acheivements/ Work</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2025(Nov) - 2026(Feb)"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Open Source Contributor - Talawa Admin
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              Frontend development, lead the implementation of error Boundary,
              unit testing, fixed cross module data loss
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025(Sept)"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              100x Solana hackathon winner
            </h3>
            <h4 className="vertical-timeline-element-subtitle">100x school</h4>
            <p>Lead the team of 3 to build a trading platform signal</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024(May) - 2024(July)"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              LNMIIT Undergraduate Summer Internship Program
            </h3>
            <h4 className="vertical-timeline-element-subtitle">LNMIIT</h4>
            <p>
              Conducted research on migraine treatment using Unani therapy.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Founder of Study Circle, Sponsorship Head, Club Cordinator
            </h3>
            <h4 className="vertical-timeline-element-subtitle">LNMIIT</h4>
            <p>Founded a spiritual club(Study Circle)<br/>Sponsorship head of the technical fest (PLINTH) <br/> Club Cordinator of the social club (Sankalp)</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;