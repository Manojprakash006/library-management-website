import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalEntries: number;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalEntries,
  limit,
}) => {
  const startEntry = (currentPage - 1) * limit + 1;
  const endEntry = Math.min(currentPage * limit, totalEntries);

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-4 bg-white border-t border-gray-200 sm:px-6 rounded-2xl mt-8 shadow-sm">
      <div className="flex-1 flex justify-between sm:hidden w-full">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{totalEntries === 0 ? 0 : startEntry}</span> to{' '}
            <span className="font-medium">{endEntry}</span> of{' '}
            <span className="font-medium">{totalEntries}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px gap-1"
            aria-label="Pagination"
          >
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-40 transition-colors"
            >
              <span className="sr-only">Previous</span>
              <FiChevronLeft size={20} />
            </button>
            
            {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                // Show first, last, current, and pages around current
                if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 2 && pageNum <= currentPage + 2)
                ) {
                    return (
                        <button
                          key={pageNum}
                          onClick={() => onPageChange(pageNum)}
                          className={`relative inline-flex items-center px-4 py-2 border text-sm font-semibold rounded-md transition-all ${
                            currentPage === pageNum
                              ? 'z-10 bg-linear-to-r from-[#9A10F9] to-[#E60077] border-transparent text-white shadow-md'
                              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {pageNum}
                        </button>
                    );
                } else if (
                    (pageNum === 2 && currentPage > 4) ||
                    (pageNum === totalPages - 1 && currentPage < totalPages - 3)
                ) {
                    return (
                        <span key={pageNum} className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 rounded-md">
                          ...
                        </span>
                    );
                }
                return null;
            })}

            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages || totalPages === 0}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-40 transition-colors"
            >
              <span className="sr-only">Next</span>
              <FiChevronRight size={20} />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
