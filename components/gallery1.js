import React from 'react'

import PropTypes from 'prop-types'

const Gallery1 = (props) => {
  return (
    <>
      <div className="gallery1-gallery3 thq-section-padding">
        <div className="gallery1-max-width thq-section-max-width">
          <div className="gallery1-section-title">
            <h2 className="gallery1-text thq-heading-2">{props.heading1}</h2>
            <span className="gallery1-text1 thq-body-large">
              {props.content1}
            </span>
          </div>
          <div className="gallery1-content">
            <div className="gallery1-container">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery1-container1">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery1-container2">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="thq-img-ratio-4-3"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery1-gallery3 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery1-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery1-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery1-text {
            text-align: center;
          }
          .gallery1-text1 {
            text-align: center;
          }
          .gallery1-content {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery1-container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery1-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery1-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .gallery1-content {
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery1.defaultProps = {
  image3Src:
    'https://images.unsplash.com/photo-1503972130742-eb7e6c7921ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1ODYxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Explore our professional login form with telephone input and key for different countries. Ensure a secure login process for your users.',
  image1Src:
    'https://images.unsplash.com/photo-1573495804664-b1c0849525af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1ODYxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Secure login process',
  image2Alt: 'Key for different countries',
  image2Src:
    'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1ODYxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Photo Gallery of the Services you provide',
  image1Alt: 'Professional login form with telephone input',
}

Gallery1.propTypes = {
  image3Src: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image2Src: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Gallery1
