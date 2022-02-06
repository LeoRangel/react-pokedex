import * as S from './styles';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  handleCurrentPage: (value: number) => void;
};

export function Pagination({ currentPage, totalPages, handleCurrentPage }: PaginationProps) {
  return (
    <S.Pagination>
      {currentPage >= 1 + 2 && (
        <li>
          <S.PaginationButton type="button" onClick={() => handleCurrentPage(1)}>
            <span>1</span>
          </S.PaginationButton>
        </li>
      )}

      {currentPage >= 1 + 3 && (
        <li>
          <span>...</span>
        </li>
      )}

      {currentPage === totalPages && (
        <li>
          <S.PaginationButton type="button" onClick={() => handleCurrentPage(totalPages - 2)}>
            <span>{totalPages - 2}</span>
          </S.PaginationButton>
        </li>
      )}

      {currentPage >= 2 && (
        <li>
          <S.PaginationButton type="button" onClick={() => handleCurrentPage(currentPage - 1)}>
            <span>{currentPage - 1}</span>
          </S.PaginationButton>
        </li>
      )}

      <li>
        <S.PaginationButton type="button" active disabled>
          <span>{currentPage}</span>
        </S.PaginationButton>
      </li>

      {currentPage <= totalPages - 1 && (
        <li>
          <S.PaginationButton type="button" onClick={() => handleCurrentPage(currentPage + 1)}>
            <span>{currentPage + 1}</span>
          </S.PaginationButton>
        </li>
      )}

      {currentPage === 1 && (
        <li>
          <S.PaginationButton type="button" onClick={() => handleCurrentPage(currentPage + 2)}>
            <span>{currentPage + 2}</span>
          </S.PaginationButton>
        </li>
      )}

      {currentPage <= totalPages - 3 && (
        <li>
          <span>...</span>
        </li>
      )}

      {currentPage <= totalPages - 2 && (
        <li>
          <S.PaginationButton type="button" onClick={() => handleCurrentPage(totalPages)}>
            <span>{totalPages}</span>
          </S.PaginationButton>
        </li>
      )}
    </S.Pagination>
  );
}
