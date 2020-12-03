import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/cobidev/gatsby-Mashimi/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork cobidev/gatsby-Mashimi on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/cobidev/gatsby-Mashimi"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star cobidev/gatsby-Mashimi on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
