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
Button.PropTypes = {
  buttonText: PropTypes.string
};