import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactTwitterFollowButton extends Component {
  static propTypes = {
    twitterAccount: PropTypes.string.isRequired,
    showLarge: PropTypes.bool,
    showName: PropTypes.bool,
    showCount: PropTypes.bool,
  };

  static defaultProps = {
    showLarge: true,
    showName: false,
    showCount: false,
  };

  componentDidMount() {
    if (document && typeof document !== 'undefined') {
      ((d, s, id) => {
        const pjs = d.getElementsByTagName(s)[d.getElementsByTagName(s).length - 1];
        if (d.getElementById(id)) return;
        const js = d.createElement(s);
        js.id = id;
        js.src = '//platform.twitter.com/widgets.js';
        pjs.parentNode.insertBefore(js, pjs);
      })(document, 'script', 'twitter-js');
    }
  }

  render() {
    const { twitterAccount, showLarge, showName, showCount } = this.props;
    const size = showLarge ? 'large' : 'default';
    return (
      <a
        href={`https://twitter.com/${twitterAccount}?ref_src=twsrc%5Etfw`}
        className="twitter-follow-button"
        data-size={size}
        data-show-screen-name={showName}
        data-show-count={showCount}
      >
        Follow @{twitterAccount}
      </a>
    );
  }
}

export default ReactTwitterFollowButton;
