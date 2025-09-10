
import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ label, breadcrumbs }) => {
  // Default breadcrumbs (HOME > Current Page)
  const defaultBreadcrumbs = [
    { label: "HOME", href: "/" },
    { label: label },
  ];

  const crumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <header className="w-full border-b border-neutral-200 bg-zinc-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 sm:py-6 md:flex-row md:items-center md:justify-between">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-700">{label}</h1>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            {crumbs.map((bc, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <li key={bc.label} className="flex items-center">
                  {!isLast ? (
                    <Link
                      to={bc.href}
                      className="hover:text-gray-700 transition-colors"
                    >
                      {bc.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-gray-700">
                      {bc.label}
                    </span>
                  )}
                  {!isLast && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-2 h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default PageHeader;
