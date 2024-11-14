import PropTypes from 'prop-types';

const AboutMe = ({ aboutText }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {aboutText}
      </p>
    </div>
  );
};

// Prop validation
AboutMe.propTypes = {
  aboutText: PropTypes.string.isRequired,
};

export default AboutMe;
