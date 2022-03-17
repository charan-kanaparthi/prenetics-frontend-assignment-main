import React from 'react';
export interface Props {
  page: number;
  totalPages: number;
  totalRecords:number;
  handlePagination: (page: number) => void;
}
const PaginationComponent: React.FC<Props> = ({
  page,
  totalPages,
  totalRecords,
  handlePagination
}) => {
  return (
    <div className='pagination'>
      { totalRecords > 0 && <>
       <div className='paginationRecordContent'>  <p>{`${totalRecords} records in total`}</p></div>
      <div className='paginationWrapper'>

        {page !== 1 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className='pageItem sides'
          >
            &lt;
          </button>
        )}
        <button
          onClick={() => handlePagination(1)}
          type="button"
          className= {`pageItem ${page === 1 && 'active'}`}
        >
          {1}
        </button>
        {page > 3 && <div className='separator'>...</div>}
        {page === totalPages && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page - 2)}
            type="button"
            className='pageItem'
          >
            {page - 2}
          </button>
        )}
        {page > 2 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
           className='pageItem'
          >
            {page - 1}
          </button>
        )}
        {page !== 1 && page !== totalPages && (
          <button
            onClick={() => handlePagination(page)}
            type="button"
            className='pageItem active'
          >
            {page}
          </button>
        )}
        {page < totalPages - 1 && (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
           className='pageItem'
          >
            {page + 1}
          </button>
        )}
        {page === 1 && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page + 2)}
            type="button"
           className='pageItem'
          >
            {page + 2}
          </button>
        )}
        {page < totalPages - 2 && <div className='separator'>...</div>}
        {page !== totalPages && (
         <button
         onClick={() => handlePagination(totalPages)}
         type="button"
         className={`pageItem ${page === totalPages && 'active'}`}
       >
         {totalPages}
       </button>
        )}
        {page !== totalPages && (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
            className='pageItem sides'
          >
            &gt;
          </button>
        )}
      </div> </>

      }
    </div>
  );
};
export default PaginationComponent;
