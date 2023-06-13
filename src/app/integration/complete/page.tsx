'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

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
        }
      });
    }
  }, [code]);

  return (
    <main className="w-full h-full pt-10 px-96">
      <div className="border p-10 border-slate-300 rounded-md">
        <h1 className="text-4xl font-bold tracking-tight">Thank you!</h1>
        <p className="text-base text-gray-500 mt-5">
          Authorization is complete. You may now close this tab.
        </p>
      </div>
    </main>
  );
};

export default IntegrationCompletePage;
