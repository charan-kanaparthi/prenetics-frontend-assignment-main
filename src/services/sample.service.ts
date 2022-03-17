
import apiClient from '../utils/api';
import { sampleResp, SearchInterface, OrgDetails } from '../types/LandingPage';
const getOrgData = async () => {
  const response = await apiClient().get<OrgDetails>('/org');
  return response.data;
};

const getSearchData = async (search:SearchInterface, orgId:string) => {
  const queryString = (Object.keys(search) as Array<keyof typeof search>).map(key => key + '=' + search[key])?.join('&');
  console.log(queryString);
  const response = await apiClient().get<sampleResp>(`/org/${orgId}/sample?${queryString}`);
  return response.data;
};

const SampleService = {
  getOrgData,
  getSearchData
};
export default SampleService;
