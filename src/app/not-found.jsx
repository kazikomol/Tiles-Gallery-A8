import Link from 'next/link';

// Next.js App Router metadata export
export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-center">
      <h1 className="text-8xl font-black text-blue-600">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
      <p className="mt-2 max-w-sm text-gray-600">
        Oops! The page you are looking for doesnt exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Back to Home
      </Link>
    </main>
  );
}