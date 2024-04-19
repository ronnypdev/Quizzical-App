import PropTypes from "prop-types";

export default function Button({buttonText}) {
  return (
    <>
      <button className="button">
        {buttonText}
      </button>
    </>
  )
}


// Props Validation
Button.propTypes = {
  buttonText: PropTypes.string
};