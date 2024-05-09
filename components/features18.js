import React from 'react'

import PropTypes from 'prop-types'

const Features18 = (props) => {
  return (
    <>
      <div className="features18-layout349 thq-section-padding">
        <div className="features18-max-width thq-section-max-width">
          <div className="features18-content">
            <div className="features18-section-title">
              <span className="thq-body-small">{props.feature1Slogan}</span>
              <div className="features18-content1">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <p className="thq-body-large">{props.feature1Description}</p>
              </div>
            </div>
          </div>
          <div className="features18-image-container">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features18-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features18-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .features18-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features18-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features18-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features18-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          @media (max-width: 991px) {
            .features18-max-width {
              gap: var(--dl-space-space-twounits);
              flex-direction: column-reverse;
            }
          }
        `}
      </style>
    </>
  )
}

Features18.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1555728751-cc08eb3cf261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1ODYxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Telephone input with country key',
  feature1Slogan: 'Effortless country selection',
  feature1Title: 'Country Key Telephone Input',
  feature1Description:
    'Easily select your country code with the intuitive key input for seamless login experience.',
}

Features18.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default Features18
