// @flow
import React from "react"

import SvgIcon from "@material-ui/core/SvgIcon"

const CognitoIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 75 75">
      <g id="Reference">
        <rect
          id="Red_Light_BG"
          data-name="Red Light BG"
          style={{ fill: "#d6242d" }}
          width="75"
          height="75"
        />
        <g id="Product_Icon" data-name="Product Icon">
          <path
            style={{ fill: "#fff" }}
            d="M55,15H16.46a3.92,3.92,0,0,0-3.71,4.1v24.8A3.92,3.92,0,0,0,16.46,48H37.75V46H16.46a2,2,0,0,1-1.71-2.1V27h18V42a1,1,0,0,0,1,1h8V41H35.2V40.7a7.74,7.74,0,0,1,5.53-7.43,5.91,5.91,0,0,0,4.92,0,7.82,7.82,0,0,1,4.42,3.42l1.7-1v0a9.8,9.8,0,0,0-4.34-3.82,5.4,5.4,0,0,0,1.27-3.48,5.5,5.5,0,0,0-11,0A5.42,5.42,0,0,0,39,31.8a9.67,9.67,0,0,0-4.22,3.62V22h17v13.7h0V36h2V27h3V37h2l0-17.9A3.92,3.92,0,0,0,55,15ZM43.2,24.87a3.48,3.48,0,0,1,3.5,3.46,3.43,3.43,0,0,1-1.81,3,3.57,3.57,0,0,1-3.39,0,3.44,3.44,0,0,1-1.8-3A3.48,3.48,0,0,1,43.2,24.87ZM53.75,25V21a1,1,0,0,0-1-1h-19a1,1,0,0,0-1,1v4h-18v-5.9A2,2,0,0,1,16.46,17H55a2,2,0,0,1,1.73,2.1V25Z"
          />
          <rect
            style={{ fill: "#fff" }}
            x="16.77"
            y="31.95"
            width="10.98"
            height="2"
          />
          <rect
            style={{ fill: "#fff" }}
            x="16.77"
            y="36.95"
            width="6.98"
            height="2"
          />
          <rect
            style={{ fill: "#fff" }}
            x="25.77"
            y="36.95"
            width="2.98"
            height="2"
          />
          <path style={{ fill: "#fff" }} d="M51.78,35.65h0v0Z" />
          <path
            style={{ fill: "#fff" }}
            d="M52.14,60.05a10.11,10.11,0,1,1,1.22-20.14h0a10.12,10.12,0,0,1,6.46,16.61,10.47,10.47,0,0,1-3.37,2.57A10.19,10.19,0,0,1,52.14,60.05Zm0-18.22a8,8,0,0,0-3.69.9,8.11,8.11,0,0,0,7.16,14.55,8.2,8.2,0,0,0,2.71-2.07,8.11,8.11,0,0,0-5.19-13.32h0A8.22,8.22,0,0,0,52.12,41.83Z"
          />
          <path
            style={{ fill: "#fff" }}
            d="M50.55,54.2h0a1,1,0,0,1-.71-.29l-3.23-3.23L48,49.27l2.52,2.52,5.7-5.71,1.42,1.42-6.42,6.41A1,1,0,0,1,50.55,54.2Z"
          />
          <path style={{ fill: "#fff" }} d="M51.78,35.65h0v0Z" />
        </g>
      </g>
    </SvgIcon>
  )
}

export default [
  {
    name: "AWS - Cognito",
    provider: "cognito",
    Icon: CognitoIcon,
    dataset: {
      interface: {},
      samples: [],
    },
  },
]
