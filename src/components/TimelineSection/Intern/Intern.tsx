import ThreeDModel from '../../3DModels/3DModel';
import Building from '../../3DModels/Building';

const Intern = () => {
  return (
    <div>
      <h3 className='vertical-timeline-element-title'>
        Intern at Hagag Buchnik Weinstein and Co. Law Firm
      </h3>
      <h4 className='vertical-timeline-element-subtitle'>Israel, Tel Aviv</h4>
      <p>
        Internship in HBW which is one of the premier law firms that provide a
        wide range of legal services based on professional expertise experience,
        and knowledge especially in real estate and commercial law.
      </p>
      <p>
        The team is made up of thirty-five lawyers and interns working together
        to provide the most professional and effective service to its client
        base in Israel and internationally.
      </p>
      <ThreeDModel>
        <Building />
      </ThreeDModel>
    </div>
  );
};

export default Intern;
