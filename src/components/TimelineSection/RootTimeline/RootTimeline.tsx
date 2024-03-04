import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faGavel,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";
import AlumniConsultants from "../AlumniConsultants/AlumniConsultants";
import CorporateLawyer from "../CorporateLawyer/CorporateLawyer";
import Intern from "../Intern/Intern";
import Phoenix from "../Phoenix/Phoenix";
import Wavesounds from "../Wavesounds/Wavesounds";

const RootTimeline = () => {
  const className = "vertical-timeline-element--work";
  const contentStyle = { backgroundColor: "#3d4e59", color: "white" };
  const iconStyle = { background: "rgb(33, 150, 243)", color: "white" };
  const edgeStyle = { background: "#ffce2c", color: "#fff" };

  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        id={"Experience"}
        className={className}
        contentStyle={contentStyle}
        date={"2023 - current"}
        iconStyle={iconStyle}
        icon={<FontAwesomeIcon icon={faMobile} />}
      >
        <Phoenix />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={className}
        contentStyle={contentStyle}
        date={"2021 - 2023"}
        iconStyle={iconStyle}
        icon={<FontAwesomeIcon icon={faMobile} />}
      >
        <AlumniConsultants />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={className}
        contentStyle={contentStyle}
        date={"2020 - 2021"}
        iconStyle={iconStyle}
        icon={<FontAwesomeIcon icon={faMobile} />}
      >
        <Wavesounds />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className={className}
        contentStyle={contentStyle}
        date={"2018 - 2020"}
        iconStyle={iconStyle}
        icon={<FontAwesomeIcon icon={faBalanceScale} />}
      >
        <CorporateLawyer />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className={className}
        contentStyle={contentStyle}
        date={"2017 - 2018"}
        iconStyle={iconStyle}
        icon={<FontAwesomeIcon icon={faGavel} />}
      >
        <Intern />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={edgeStyle}
        // icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
};

export default RootTimeline;
