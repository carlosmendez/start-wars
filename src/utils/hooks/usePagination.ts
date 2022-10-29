import { useState } from 'react';

interface UsePaginationProps {
  total: number;
}

interface UsePaginationReturn {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

/** Simple version of a Pagination */
const usePagination = ({
  total
}: UsePaginationProps): UsePaginationReturn => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page < total) setPage(page + 1);
    setPage(total);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
    setPage(1);
  };

  return {
    page,
    nextPage: () => nextPage(),
    prevPage: () => prevPage(),
    hasNextPage: page < total,
    hasPrevPage: page > 1,
  };
};

export default usePagination;
