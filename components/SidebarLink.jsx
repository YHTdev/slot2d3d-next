import Link from "next/link";
import { useRouter } from "next/router";

const SidebarLink = ({ pathName, linkIcon, linkTitle }) => {
  const router = useRouter();
  return (
    <div
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        router.pathname === `${pathName}` && "hover:slate-slate-900"
      }`}>
      <Link href={pathName}>
        <a
          className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
            router.pathname === `${pathName}` &&
            "hover:text-white text-blue-500"
          }`}>
          <div className="flex items-center">
            {linkIcon}
            <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
              {linkTitle}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default SidebarLink;
