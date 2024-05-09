import React from 'react'

import PropTypes from 'prop-types'

const CTA1 = (props) => {
  return (
    <>
      <div className="cta1-container thq-section-padding">
        <div className="cta1-max-width thq-section-max-width">
          <div className="cta1-content">
            <h2 className="cta1-heading1 thq-heading-2">{props.heading1}</h2>
            <p className="cta1-content1 thq-body-large">{props.content1}</p>
            <div className="cta1-actions">
              <button className="thq-button-filled cta1-button">
                <span className="cta1-action1 thq-body-small">
                  {props.action1}
                </span>
              </button>
              <button className="thq-button-outline cta1-button1">
                <span className="cta1-action2 thq-body-small">
                  {props.action2}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta1-container {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .cta1-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .cta1-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .cta1-heading1 {
            text-align: center;
          }
          .cta1-content1 {
            text-align: center;
          }
          .cta1-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
          }
          .cta1-action1 {
            text-align: center;
          }
          .cta1-action2 {
            text-align: center;
          }
          @media (max-width: 479px) {
            .cta1-actions {
              width: 100%;
              flex-direction: column;
            }
            .cta1-button {
              width: 100%;
            }
            .cta1-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

CTA1.defaultProps = {
  action1: 'Sign in',
  heading1: 'Professional Login Form',
  content1:
    'Access your account securely with our professional login form. Enter your telephone number with country code for easy access.',
  action2: 'Get Started',
}

CTA1.propTypes = {
  action1: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
}

export default CTA1
