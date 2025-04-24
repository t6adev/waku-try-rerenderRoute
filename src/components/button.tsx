'use client';

import { useActionState } from 'react';

import { serverAction } from '../action';

export const Button = () => {
  const [result, action, isPending] = useActionState<ReturnType<typeof serverAction>>(
    () => serverAction(),
    false
  );
  if (isPending) {
    return <div>Now pending...</div>;
  }
  if (result) {
    return <div>Unexpected</div>;
  }

  return (
    <form action={action}>
      <button className="rounded-xs bg-black px-2 py-0.5 text-sm text-white" type="submit">
        Rerender Route
      </button>
    </form>
  );
};
