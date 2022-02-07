const Breadcrumb = () => {
  return (
    <div className="mb-8">
      {/* Start */}
      <ul className="inline-flex flex-wrap text-sm font-medium">
        <li className="flex items-center">
          <a className="text-slate-500 hover:text-indigo-500" href="#0">
            Home
          </a>
          <svg
            className="w-4 h-4 mx-3 fill-current text-slate-400"
            viewBox="0 0 16 16">
            <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
          </svg>
        </li>
        <li className="flex items-center">
          <a className="text-slate-500 hover:text-indigo-500" href="#0">
            Settings
          </a>
          <svg
            className="w-4 h-4 mx-3 fill-current text-slate-400"
            viewBox="0 0 16 16">
            <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
          </svg>
        </li>
        <li className="flex items-center">
          <a className="text-slate-500 hover:text-indigo-500" href="#0">
            Notifications
          </a>
        </li>
      </ul>
      {/* End */}
    </div>
  );
};

export default Breadcrumb;
