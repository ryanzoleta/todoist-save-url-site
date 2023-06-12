'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const IntegrationCompletePage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  useEffect(() => {
    if (code) {
      document.cookie = `code=${code};max-age=604800;path=/`;
    }
  }, [code]);

  return (
    <div>
      <h1 className="text-3xl">Authorization Complete!</h1>
      <p>You may now close this window</p>
    </div>
  );
};

export default IntegrationCompletePage;
