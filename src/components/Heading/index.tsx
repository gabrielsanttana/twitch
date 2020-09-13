import React from 'react';
import {Container, HeadingText} from './styles';

const Heading: React.FC = ({children}) => {
  return <HeadingText>{children}</HeadingText>;
};

export default Heading;
