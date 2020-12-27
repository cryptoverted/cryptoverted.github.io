import * as PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image";
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

class Card extends React.Component {
  static propTypes = {
    card: PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.object,
    }).isRequired,
  }

  render() {
    const { title, url, description, pill, color, image } = this.props.card
    var showPill;

    if (pill !== null) {
      showPill = <p className={"pill "+color}>{pill}</p>;
    } else {
      showPill = '';
    }

    return (
      <a
        href={url}
        className="card"
        target="_blank" 
        rel="noopener noreferrer"
      >

      <div className="card-context">
        <div className="card-image-outer-wrapper">
          <Img fluid={image.childImageSharp.fluid} alt="" className="card-image" />
        </div>
        <div className="card-context--feedback"><FontAwesomeIcon icon={faChevronCircleRight} size="4x" /></div>
        {showPill}
      </div>

      <div className="card-lens">
        <h2>
          {title}
        </h2>
        <p>
          {description}
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </p>
      </div>

    </a>
    )
  }
}

export default Card

export const CardFragment = graphql`
  fragment Card_details on LinksJson {
    links {
      title
      url
      description
      pill
      color
      image {
        childImageSharp {
          fluid(maxWidth: 384, maxHeight: 200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`
