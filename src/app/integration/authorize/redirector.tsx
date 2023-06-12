'use client';

import React, { useEffect } from 'react';

type Props = { url: string };

function Redirector({ url }: Props) {
  useEffect(() => {
    location.href = url;
  }, [url]);

  return <div></div>;
}

export default Redirector;
