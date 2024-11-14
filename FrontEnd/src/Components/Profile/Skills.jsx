import PropTypes from 'prop-types';

const Skills = ({ skills }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {skills.map((skill, index) => (
          <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// Prop validation
Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Skills;