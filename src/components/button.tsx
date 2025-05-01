'use client';

import { useState, useTransition } from 'react';

import { serverAction } from '../action';

export const Button = () => {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState(false);

  if (isPending) {
    return <div>Now pending...</div>;
  }
  if (result) {
    return <div>Unexpected</div>;
  }

  return (
    <form
      action={() => {
        startTransition(async () => {
          const result = await serverAction();
          setResult(result);
        });
      }}
    >
      <button className="rounded-xs bg-black px-2 py-0.5 text-sm text-white" type="submit">
        Rerender Route
      </button>
    </form>
  );
};
