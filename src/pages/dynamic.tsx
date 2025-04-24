import { Link } from 'waku';

export default async function DynamicPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <h1>Dynamic Page</h1>
      <Link to="/" className="mt-4 inline-block underline">
        Top page
      </Link>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const;
};
