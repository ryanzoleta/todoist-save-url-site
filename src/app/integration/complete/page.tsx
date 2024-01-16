'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { track } from '@vercel/analytics';

const IntegrationCompletePage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  if (!code) {
    // location.href = '/';
  }

  useEffect(() => {
    if (code) {
      axios.post('/integration/token', { code: code }).then((response) => {
        const { data } = response;
        const token = data['token'];
        console.log(data);

        if (token) {
          document.cookie = `token=${token};max-age=604800;path=/`;
          track('OAuthComplete');
        }
      });
    }
  }, [code]);

  return (
    <main className="h-full w-full px-96 pt-10">
      <div className="rounded-md border border-slate-300 p-10">
        <h1 className="text-4xl font-bold tracking-tight">Thank you!</h1>
        <p className="mt-5 text-base text-gray-500">
          Authorization is complete. You may now close this tab.
        </p>
      </div>
    </main>
  );
};

export default IntegrationCompletePage;
