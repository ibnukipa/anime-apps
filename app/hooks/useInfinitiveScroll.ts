import {useCallback, useEffect, useState} from 'react';
import {Pagination} from '../types';

type Props<D> = {
  fetcher: (
    q?: string,
    page?: number,
    limit?: number,
  ) => Promise<Pagination<D> | null>;
  query?: string;
  insert?: (data: D) => void;
};

const useInfinitiveScroll = <D>({fetcher, query, insert}: Props<D>) => {
  const [data, setData] = useState<Array<number>>([]);
  const [dataTotal, setDataTotal] = useState(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const fetch = useCallback(
    (currentPage: number, currentIsLastPage: boolean, currentLimit: number) => {
      if (currentIsLastPage) {
        setIsLoading(false);
        setIsFetching(false);
        return;
      } else {
        const doFetch = async () => {
          const response = await fetcher(query, currentPage, currentLimit);
          if (!response) {
            return;
          }

          const responseData = response.data;

          if (!response.pagination.has_next_page) {
            setIsLastPage(true);
            setIsLoading(false);
            setIsFetching(false);
            return;
          } else {
            const newData: Array<number> = [];
            responseData.map((item: any) => {
              insert?.(item);
              newData.push(item.mal_id);
            });
            setData(oldData => {
              if (oldData[oldData.length - 1] === 0) {
                oldData.pop();
              }
              if (currentPage === 0) {
                return newData;
              }
              const renderedData = [...new Set(oldData.concat(newData))];
              if (renderedData.length % 2 !== 0) {
                renderedData.push(0);
              }
              return renderedData;
            });
            setDataTotal(response.pagination.items.total);
            setIsLoading(false);
            setIsFetching(false);
          }
        };
        doFetch();
      }
    },
    [fetcher, query, insert],
  );

  const refresh = useCallback(() => {
    setData([]);
    setDataTotal(0);
    setPage(1);
    setLimit(10);
    setIsLoading(true);
    setIsLastPage(false);

    fetch(1, false, limit);
  }, [fetch, limit]);

  const fetchMore = useCallback(() => {
    const nextPage = page + 1;
    setIsFetching(true);
    setPage(nextPage);

    fetch(nextPage, isLastPage, limit);
  }, [limit, fetch, page, isLastPage]);

  useEffect(() => {
    refresh();
  }, [limit, refresh]);

  return {
    data,
    dataTotal,
    isLoading,
    isFetching,
    isLastPage,
    refresh,
    fetchMore,
    setLimit,
  };
};

export default useInfinitiveScroll;
