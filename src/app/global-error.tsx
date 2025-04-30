'use client';

import * as Sentry from '@sentry/nextjs';
import Error from 'next/error';
import { useEffect } from 'react';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body className="bg-black text-[#00fff7] font-mono min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl mb-4">// SYSTEM ERROR</h1>
          <p className="text-xl opacity-80 mb-6">Protocol execution failed</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 border border-[#00fff7] hover:bg-[#00fff7] hover:text-black transition-colors"
          >
            Reinitialize
          </button>
        </div>
      </body>
    </html>
  );
} 