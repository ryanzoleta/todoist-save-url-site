'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

const IntegrationCompletePage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  useEffect(() => {
    if (code) {
      axios.post('/integration/token', { code: code }).then((response) => {
        const { data } = response;
        const token = data['token'];
        console.log(data);

        if (token) {
          document.cookie = `token=${token};max-age=604800;path=/`;
        }
      });
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
