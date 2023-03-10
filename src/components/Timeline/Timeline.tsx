// @ts-ignore:
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className={'vertical-timeline-element--work'}
        date={'2021 - current'}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Mobile Developer</h3>
        <h4 className='vertical-timeline-element-subtitle'>
          Israel, Herzeliza
        </h4>
        <p style={{ color: 'black' }}>
          Along with my team, we have built from the ground up a complete
          trading app platform for investing in cryptocurrency, forex shares and
          more... A real application for both IOS and Android (8Invest).
          Available on App Store and Play Store.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={'vertical-timeline-element--work'}
        date={'2018 - 2020'}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className='vertical-timeline-element-title'>
          Corporate Lawyer at Moshe Kahn Advocates
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Israel, Tel Aviv</h4>
        <p style={{ color: 'black' }}>
          Moshe Kahn Advocates is a specialist business law firm based in Tel
          Aviv, Israel. The firm provides a full range of legal services that
          encompasses many aspects of business, corporate, real-estete, and
          commercial law, including M&A transactions, and complex commercial
          litigation and dispute resolution proceedings.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={'vertical-timeline-element--work'}
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={'2017 - 2018'}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className='vertical-timeline-element-title'>
          Intern at Hagag Buchnik Weinstein and Co. Law Firm
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Israel, Tel Aviv</h4>
        <p>
          HBW is one of the premier law firms that provide a wide range of legal
          services based on professional expertise experience, and knowledge
          especially in real estate and commercial law. The team is made up of
          thirty-five lawyers and interns working together to provide the most
          professional and effective service to its client base in Israel and
          internationally.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        // icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
