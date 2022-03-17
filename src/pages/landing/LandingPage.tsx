/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../components/header/Header';
import Loader from '../../components/loader/Loader';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/Table/Table';
import Helpers from '../../utils/helpers';
import { useAppSelector } from '../../store/hooks';
import { setOrganizations } from '../../store/landing/slice';
import PaginationComponent from '../../components/pagination/Pagination';
import service from '../../services/sample.service';
import { finalSampleData } from '../../types/LandingPage';
import './landing.scss';
function LandingPage () {
  const dispatch = useDispatch();

  const [sampleData, setSampleData] = useState<finalSampleData[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [colHeaders, setcolHeaders] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [searchString, setSearchString] = useState<string>('');
  const [searchData, setSearchData] = useState<finalSampleData[]>([]);
  const limit = 8;
  const { selectedOrg } = useAppSelector((state:any) => state.landing);
  useEffect(() => {
    service.getOrgData().then((resp) => {
      console.log(resp);
      dispatch(setOrganizations(resp));
    });
  }, []);

  const fields = selectedOrg && selectedOrg.attributes.name === 'Prenetics'
    ? ['name',
        'barCode',
        'result',
        'activateTime',
        'resultTime']
    : ['name',
        'patientId',
        'barCode',
        'result',
        'activateTime',
        'resultTime',
        'resultType'
      ];
  useEffect(() => {
    if (selectedOrg) {
      setCurrentPage(1);
      service.getSearchData({ offset: (currentPage * limit - limit), limit: limit }, selectedOrg.id).then((resp) => {
        const merged = [];
        for (let i = 0; i < resp.data.length; i++) {
          const obj:finalSampleData = {
            ...resp.data[i].attributes,
            ...(resp.included.find((itmInner) => itmInner.id === resp.data[i].relationships.profile.data.id))?.attributes
          };
          const object = Helpers.destruct(obj, fields);
          merged.push(
            object
          );
        };
        const cols = Object.keys(merged[0]);
        setColumns(cols);
        setcolHeaders(cols.map(Helpers.capitalizeHeaders));
        setSampleData(merged);
        setSearchData(merged);
      });
    }
  }, [selectedOrg]);

  const searchHandeler = (searchBy:string) => {
    setSearchString(searchBy);
    const filterBy = searchBy.split(';');
    setSearchData(Helpers.serachByMultipleConditions(filterBy, sampleData));
  };

  return (
    <div className='landing'>
        <div className='landing-container'>
          <div className='sidebar-content'>
          <Sidebar/>
          </div>
          <div className='main-content'>
          <Header/>
          <Table data={searchData.slice((currentPage - 1) * limit, currentPage * limit)} columns={columns} headers={colHeaders}
          handleSearch={searchHandeler} searchString={searchString} />
          <div className='pagination-container'>
               <PaginationComponent page={currentPage} totalPages={Math.max(Math.floor((searchData.length || 1) / limit), 1)} totalRecords={searchData.length} handlePagination={(id) => { setCurrentPage(id); }}/>
          </div>
          </div>
         </div>
    </div>
  );
}

export default LandingPage;
