/* eslint-disable array-callback-return */
import React from 'react';
import { finalSampleData } from '../../types/LandingPage';
export interface Props {
    data:finalSampleData[], columns:string[], headers:string[]
    searchString:string,
    handleSearch: (searchby: string) => void;
  }

const Table: React.FC<Props> = ({
  data,
  columns,
  headers,
  handleSearch,
  searchString
}) => {
  const serachbyPlaceHolder = `Search by ${headers.join(' , ')} Seperate Multiple Search Criteria With ';' `;
  return <div className="table-content">
     <div className="main">

  <div className="form-group has-search">
    <span className="form-control-feedback">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
    </span>
    <input type="text" className="form-control" onChange={(event) => handleSearch(event?.target.value)} value={searchString} placeholder={serachbyPlaceHolder}/>
  </div>

</div>{
    data && data.length > 0
      ? <table id="sampleTable">
    <thead>
      <tr>{
          headers.map((col, index) =>
              <th key={index}>{col}</th>)
          }
      </tr>
    </thead>
    <tbody>

          {
             data.map((item, index) => {
               return (
                  <tr key={index}>

                    {
                      columns.map(col => {
                        return (<td key={col}>{(item as any)[col]}</td>);
                      })
                    }
                  </tr>
               );
             })
            }

    </tbody>
  </table>
      : <p className='mt-3'> No records Available </p>
}

  </div>;
};

export default Table;
