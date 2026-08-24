import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDF8F0] text-stone-800 flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-extrabold font-display text-[#0A5C36] mb-4">404 - Page Not Found</h2>
      <p className="text-lg text-stone-600 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 rounded-2xl bg-[#0A5C36] text-white font-bold hover:bg-[#08482a] transition-all shadow-md"
      >
        Back to Home
      </Link>
    </div>
  );
}
