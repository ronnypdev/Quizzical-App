import PropTypes from "prop-types";

export default function Button({buttonText}) {
  return (
    <button className="bg-primary text-white text-sm capitalize font-normal py-3 px-12 rounded-2xl max-w-full" >
      {buttonText}
    </button>
  )
}


// Props Validation
Button.PropTypes = {
  buttonText: PropTypes.string
};