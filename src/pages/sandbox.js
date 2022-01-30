import React from 'react';
import classnames from 'classnames';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const simplemde = new SimpleMDE()
  return (
  );
}

export default SandBox;
