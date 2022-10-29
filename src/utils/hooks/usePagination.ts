import { useState } from 'react';

interface UsePaginationProps {
  total: number;
}

interface UsePaginationReturn {
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

/** Simple version of a Pagination */
const usePagination = ({
  total
}: UsePaginationProps): UsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState(1);

  const hasNextPage = currentPage < total;
  const hasPrevPage = currentPage > 1;
  const nextPage = () => hasNextPage ? setCurrentPage(currentPage + 1) : null;
  const prevPage = () => hasPrevPage ? setCurrentPage(currentPage -1 ) : null;

  return {
    currentPage,
    nextPage: () => nextPage(),
    prevPage: () => prevPage(),
    hasNextPage: currentPage < total,
    hasPrevPage: currentPage > 1,
  };
};

export default usePagination;
