export interface OrgDetails {
    id: string
    type: string,
    attributes: {
        name: string
    }
}

export interface sampleResp {
data:SampleDetails[],
included:includedDetails[],
meta:{
  total: string
}

}

export interface SearchInterface{
   offset?: number | undefined
  , limit?: number | undefined, barCode?: string | undefined, patientName?: string | undefined,
   activateTime?:Date|undefined, resultTime?:Date|undefined, patientId?:number|undefined
}
export interface SampleDetails {
  id:string,
  type:string,
  attributes:DataAttributes,
  relationships:Relationships
}
export interface includedDetails{
  type: string,
  id: string,
  attributes:{
    name:string
  }
}

export interface finalSampleData{
  name?: string | undefined;
  barCode?: string | undefined;
  result?: string | undefined;
  activateTime?: Date;
  resultTime?: Date;
}

interface DataAttributes{
  barCode: string,
  result: string,
  activateTime: Date,
  resultTime: Date,
  patientId?:string;
  resultType?:string;
}
interface Relationships{
    [profile: string]: {
      [data: string]: {
        type:string,
        id:string
      }
    }
}
