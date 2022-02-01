import React from 'react';
// import classnames from 'classnames';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import SimpleMDE from 'simplemde'
// import 'simplemde/dist/simplemde.min.css'

// To prevent navigator is not defined
import dynamic from "next/dynamic";
// import EasyMDE from 'easymde';
const EasyMDE = dynamic(() => import("easymde"), { ssr: false });

function Home() {
  // const simplemde = new SimpleMDE()
  var easyMDE = new EasyMDE();
  return (
    <textarea />
    );
}

export default SandBox;
