import React from 'react';
import ContentWrapper from "./ContentWrapper";

const Content = (props) => {

  console.log('content ', props);

  return (
    <ContentWrapper>
      {props.children}
    </ContentWrapper>
  );
};

export { Content };