const PaginationClassic = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav
        className="mb-4 sm:mb-0 sm:order-1"
        role="navigation"
        aria-label="Navigation">
        <ul className="flex justify-center">
          <li className="ml-3 first:ml-0">
            <a
              className="bg-white cursor-not-allowed btn border-slate-200 text-slate-300"
              href="#0"
              disabled>
              &lt;- Previous
            </a>
          </li>
          <li className="ml-3 first:ml-0">
            <a
              className="text-indigo-500 bg-white btn border-slate-200 hover:border-slate-300"
              href="#0">
              Next -&gt;
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-sm text-center text-slate-500 sm:text-left">
        Showing <span className="font-medium text-slate-600">1</span> to
        <span className="font-medium text-slate-600">10</span> of
        <span className="font-medium text-slate-600">467</span> results
      </div>
    </div>
  );
};

export default PaginationClassic;
