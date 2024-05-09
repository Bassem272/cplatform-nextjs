import React from 'react'

import PropTypes from 'prop-types'

const FAQ1 = (props) => {
  return (
    <>
      <div className="faq1-faq7 thq-section-padding">
        <div className="faq1-max-width thq-section-max-width">
          <div className="thq-flex-column">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="faq1-text1 thq-body-large">{props.content1}</p>
          </div>
          <div className="thq-flex-column faq1-list">
            <div className="faq1-list-item1">
              <p className="faq1-faq1-question thq-body-large">
                {props.faq1Question}
              </p>
              <span className="thq-body-small">{props.faq1Answer}</span>
            </div>
            <div className="faq1-list-item2">
              <p className="faq1-faq2-question thq-body-large">
                {props.faq2Question}
              </p>
              <span className="thq-body-small">{props.faq2Answer}</span>
            </div>
            <div className="faq1-list-item3">
              <p className="faq1-faq3-question thq-body-large">
                {props.faq3Question}
              </p>
              <span className="thq-body-small">{props.faq3Answer}</span>
            </div>
            <div className="faq1-list-item4">
              <p className="faq1-faq4-question thq-body-large">
                {props.faq4Question}
              </p>
              <span className="thq-body-small">{props.faq4Answer}</span>
            </div>
            <div className="faq1-list-item5">
              <p className="faq1-faq5-question thq-body-large">
                {props.faq5Question}
              </p>
              <span className="thq-body-small">{props.faq5Answer}</span>
            </div>
          </div>
          <div className="thq-flex-column">
            <div className="faq1-content1">
              <h2 className="thq-heading-2">{props.heading2}</h2>
              <p className="faq1-text3 thq-body-large">{props.content2}</p>
            </div>
            <div className="faq1-container">
              <button className="thq-button-outline faq1-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq1-faq7 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .faq1-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .faq1-text1 {
            text-align: center;
          }
          .faq1-list-item1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq1-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-list-item2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq2-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-list-item3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq3-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-list-item4 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq4-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-list-item5 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq5-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-content1 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .faq1-text3 {
            text-align: center;
          }
          .faq1-container {
            display: flex;
            position: relative;
          }
          @media (max-width: 991px) {
            .faq1-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .faq1-text1 {
              text-align: left;
            }
            .faq1-list {
              gap: var(--dl-space-space-twounits);
            }
            .faq1-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ1.defaultProps = {
  faq4Answer:
    "You can update your phone number in the 'Profile Settings' tab under 'Contact Information'.",
  faq5Question: 'Is my information secure?',
  action1: 'Contact',
  faq1Question: 'How do I create an account?',
  faq4Question: 'How can I update my phone number?',
  faq3Answer:
    "If you forget your password, click on the 'Forgot Password' link and follow the instructions to reset it.",
  faq3Question: 'What should I do if I forget my password?',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  heading2: 'Still have a question?',
  heading1: 'FAQs',
  faq5Answer:
    'Yes, we take security seriously and use encryption to protect your data.',
  faq1Answer:
    "To create an account, click on the 'Sign Up' button and fill out the required information.",
  faq2Answer:
    "Yes, you can change your password by going to the 'Account Settings' section.",
  faq2Question: 'Can I change my password?',
}

FAQ1.propTypes = {
  faq4Answer: PropTypes.string,
  faq5Question: PropTypes.string,
  action1: PropTypes.string,
  faq1Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq3Answer: PropTypes.string,
  faq3Question: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  heading2: PropTypes.string,
  heading1: PropTypes.string,
  faq5Answer: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq2Question: PropTypes.string,
}

export default FAQ1
