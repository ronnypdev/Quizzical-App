import PropTypes from "prop-types";

export default function Button({buttonText}) {
  return (
    <button className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg" >{buttonText}</button>
  )
}


// Props Validation
Button.PropTypes = {
  buttonText: PropTypes.string
};