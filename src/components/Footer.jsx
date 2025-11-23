export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#0d1117] text-gray-700 dark:text-gray-300 mt-12 py-6 transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
}
