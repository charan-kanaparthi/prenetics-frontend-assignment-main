/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { useAppSelector } from '../../store/hooks';
import { setSelectedOrganization } from '../../store/landing/slice';
import { OrgDetails } from '../../types/LandingPage';
const Header = () => {
  const { data: orgData } = useAppSelector((state:any) => state.landing);
  const dispatch = useDispatch();

  const handleOrgSelection = (event: { target: { value: any; }; }) => {
    const selectedorg = orgData.data.filter((item: OrgDetails) => {
      return event.target.value === item.id;
    });
    dispatch(setSelectedOrganization(selectedorg[0]));
  };
  useEffect(() => {

  }, []);

  return <div className="header-container">
            <div>
              <p className='heading-text'> Patient Management</p>
            </div>
            <div>
            <Form.Select aria-label="Default select example" onChange={ handleOrgSelection}>
              <option>Select Your Organizantion</option>
              {orgData && orgData.data && orgData.data.length > 0 && orgData.data.map((col: { id: string ;type:string; attributes: { name:string }; }) =>
                <option key={col.id} value={col.id}>{col.attributes.name}</option>
              )}

            </Form.Select>

            </div>
  </div>;
};

export default Header;
