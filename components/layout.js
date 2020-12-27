import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { dom, config } from "@fortawesome/fontawesome-svg-core";

import Container from './container'
import Header from './layout/Header';
import Footer from './layout/Footer';

import touchImage from '../../static/images/apple-touch-icon.png';

import '../layouts/styles/crypto.scss';

config.autoAddCss = false;

const TemplateWrapper = ({ children }) => (
  <Container>

    <Helmet>
      <style type="text/css">{dom.css()}</style>
      <script data-goatcounter="https://cryptoverted.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
    </Helmet>

    <Helmet
      title="Bitcoin resources - Cryptoverted"
      meta={[
        { name: 'description', content: 'A curated list of the best Bitcoin resources' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content:'summary_large_image' },
        { name: 'og:title', content: 'Cryptoverted' },
        { name: 'twitter:title', content: 'Cryptoverted' },
        { name: 'og:description', content: 'A curated list of the best Bitcoin resources' },
        { name: 'twitter:description', content: 'A curated list of the best #Bitcoin resources' },
        { name: 'og:image', content: 'https://cryptoverted.github.io/images/twitter-website.jpg' },
        { name: 'twitter:image', content: 'https://cryptoverted.github.io/images/twitter-website.jpg' },
        { name: 'og:url', content: 'https://cryptoverted.github.io' },
        { name: 'twitter:creator', content: '@cryptoverted' },
        { name: 'theme-color', content: '#003366' },
      ]}
      link={[
        { rel: 'canonical', href: 'https://cryptoverted.github.io' },
        { rel: 'icon', href: touchImage },
        { rel: 'apple-touch-icon', href: touchImage },
      ]}
    />

    <Header />

    {children}

    <Footer />

  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
