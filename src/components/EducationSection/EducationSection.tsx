import EducationList from './EducationList/EducationList';
import Floating3D from './Floating3D/Floating3D';
import classes from './EducationSection.module.css';

const EducationSection = () => {
  return (
    <div id={'Education'} className={classes['education-main']}>
      <EducationList />
      <Floating3D />
    </div>
  );
};

export default EducationSection;
