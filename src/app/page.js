import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="h-[70vh] flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 text-center">
        <h1 className="text-4xl font-bold">Welcome to MyApp</h1>
        <p className="mt-3 text-gray-600  max-w-lg">
          A simple Next.js project for your assignment — clean UI, protected
          pages, and auth.
        </p>
        <button className="mt-5 px-6 py-3 bg-black text-white rounded">
          Get Started
        </button>
      </section>

      {/* Placeholder sections */}
      <section className="py-16 bg-white dark:bg-black text-center">
        Section 1
      </section>
      <section className="py-16 bg-gray-50 dark:bg-gray-800 text-center">
        Section 2
      </section>
      <section className="py-16 bg-white dark:bg-black text-center">
        Section 3
      </section>
      <section className="py-16 bg-gray-50 dark:bg-gray-800 text-center">
        Section 4
      </section>
      <section className="py-16 bg-white dark:bg-black text-center">
        Section 5 (Banner)
      </section>
    </div>
  );
}
