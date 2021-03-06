import React from "react";
import PropTypes from "prop-types";

function WandererIcon({ color }) {
  return (
    <svg
      className="interest-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.16 17.98"
      width="18.16"
      height="17.98"
    >
      <path
        id="ic_gesture_24px"
        fill={color}
        transform="translate(-2.84 -3)"
        d="M 4.59 6.89 c 0.7 -0.71 1.4 -1.35 1.71 -1.22 c 0.5 0.2 0 1.03 -0.3 1.52 c -0.25 0.42 -2.86 3.89 -2.86 6.31 a 3.587 3.587 0 0 0 1.34 2.98 a 3 3 0 0 0 2.64 0.46 c 1.07 -0.31 1.95 -1.4 3.06 -2.77 c 1.21 -1.49 2.83 -3.44 4.08 -3.44 c 1.63 0 1.65 1.01 1.76 1.79 a 6.111 6.111 0 0 0 -5.38 5.37 a 3.158 3.158 0 0 0 3.21 3.09 c 1.63 0 4.29 -1.33 4.69 -6.1 H 21 v -2.5 H 18.53 c -0.15 -1.65 -1.09 -4.2 -4.03 -4.2 c -2.25 0 -4.18 1.91 -4.94 2.84 c -0.58 0.73 -2.06 2.48 -2.29 2.72 c -0.25 0.3 -0.68 0.84 -1.11 0.84 c -0.45 0 -0.72 -0.83 -0.36 -1.92 A 18.248 18.248 0 0 1 7.65 9.14 a 5.3 5.3 0 0 0 1.3 -3.28 A 2.635 2.635 0 0 0 6.44 3 A 4.361 4.361 0 0 0 3.72 4.25 c -0.36 0.36 -0.66 0.66 -0.88 0.93 Z m 9.29 11.66 a 0.751 0.751 0 0 1 -0.74 -0.72 a 3.54 3.54 0 0 1 2.87 -2.76 C 15.71 17.76 14.58 18.55 13.88 18.55 Z"
      />
    </svg>
  );
}

WandererIcon.propTypes = {
  color: PropTypes.string
};

export default WandererIcon;
