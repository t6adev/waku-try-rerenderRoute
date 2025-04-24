import { Button } from '../components/button';

export default async function HomePage() {
  return (
    <div>
      <h1>Top Page</h1>
      <Button />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const;
};
