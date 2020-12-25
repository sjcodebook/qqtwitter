import React, { useEffect } from 'react';

const Handler = (props) => {
  useEffect(() => {
    window.location = `https://webbrainsmedia.com/tweet2pdf?url=https://twitter.com${props.location.pathname}`;
  }, [props.location.pathname]);

  return <div>redirecting...</div>;
};

export default Handler;
