import PropTypes from "prop-types";

export default function Button({buttonText, buttonCLick}) {
  return (
    <>
      <button onClick={buttonCLick} className="button">
        {buttonText}
      </button>
    </>
  )
}


// Props Validation
Button.propTypes = {
  buttonText: PropTypes.string
};