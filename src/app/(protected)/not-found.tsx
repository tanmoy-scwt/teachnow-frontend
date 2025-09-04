export default function DashboardNotFound() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 p-8 text-center">
      <h1 className="text-4xl font-semibold text-red-600">Dashboard Page Not Found</h1>
      <p className="mt-2 text-gray-500">The dashboard route you requested does not exist.</p>
      <a
        href="/dashboard"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Go to Dashboard
      </a>
    </section>
  );
}
