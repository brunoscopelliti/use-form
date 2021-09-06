import React from "react";
import PropTypes from "prop-types";

/**
 * @name Message
 * @component
 * @example
 * const label = "Hello, world!";
 * return (
 *   <Message label={label} />
 * );
 */
function Message (props) {
  return (
    <div className="label">
      {props.label}
    </div>
  );
}

Message.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Message;
