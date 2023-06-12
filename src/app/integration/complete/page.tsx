'use client';
import React, { useEffect } from 'react';

type Props = {};

const IntegrationCompletePage = (props: Props) => {
  useEffect(() => {
    document.cookie = 'code=testcookie123';
  }, []);

  return (
    <div>
      <p>IntegrationCompletePage</p>
      <p>This is where the user will be redirected to once they authorize the extension</p>
    </div>
  );
};

export default IntegrationCompletePage;
