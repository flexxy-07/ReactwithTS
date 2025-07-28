type Info = {
  name : string;
  email : string;
  id : number;
}
type AdminInfoList = Info & {
  role : string;
  lastLogin: Date;
}

export {type Info, type AdminInfoList}