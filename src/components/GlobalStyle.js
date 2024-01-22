import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

:root {
--primary-color: #3470FF;
--primary-active-color: rgba(52, 112, 255, 0.9);
--white-color: #fff;
--overlay-background-color: rgba(18, 20, 23, 0.5);
--text-sub-color: rgba(18, 20, 23, 0.5);

  --box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
  0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

  --transition-duration: 250ms;
  --transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

button,
a {
  cursor: pointer;
}

img {
  display: block;

  max-width: 100%;
  height: auto;
}

ul {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;

  list-style: none;
}
`;
