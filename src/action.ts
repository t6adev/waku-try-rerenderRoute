'use server';

import { unstable_rerenderRoute } from 'waku/router/server';

export const serverAction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  unstable_rerenderRoute('/dynamic');
  return true;
};
