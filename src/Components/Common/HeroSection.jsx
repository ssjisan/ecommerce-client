import PropTypes from "prop-types";

export default function HeroSection({ title }) {
  return (
    <div
      style={{
        padding: "32px",
        textAlign: "center",
        marginTop: "64px",
        marginBottom: "64px",
        marginLeft: "16px",
        marginRight: "16px",
        borderRadius: "16px",
        backgroundColor: "#dddddd",
      }}
    >
      <h4>This is {title}</h4>
    </div>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
};
