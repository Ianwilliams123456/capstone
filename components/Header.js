import html from "html-literal";
export default state => html`
  <head>
    <h1><div id = headertext>${state.header}<div></h1>
  </head>
`;
