import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobile,
  faGavel,
  faBalanceScale,
} from '@fortawesome/free-solid-svg-icons';
import AlumniConsultants from '../AlumniConsultants/AlumniConsultants';
import CorporateLawyer from '../CorporateLawyer/CorporateLawyer';
import Intern from '../Intern/Intern';

const RootTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        id={'Experience'}
        className={'vertical-timeline-element--work'}
        contentStyle={{ backgroundColor: '#3d4e59', color: 'white' }}
        date={'2021 - current'}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faMobile} />}
      >
        <AlumniConsultants />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={'vertical-timeline-element--work'}
        contentStyle={{ backgroundColor: '#3d4e59', color: 'white' }}
        date={'2018 - 2020'}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBalanceScale} />}
      >
        <CorporateLawyer />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={'vertical-timeline-element--work'}
        contentStyle={{ backgroundColor: '#3d4e59', color: 'white' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={'2017 - 2018'}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faGavel} />}
      >
        <Intern />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: '#ffce2c', color: '#fff' }}
        // icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
};

export default RootTimeline;
