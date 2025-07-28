// type UserShape = {
//   name : string;
//   age: number;
//   isStudent : boolean;
// }

interface UserShape {
  name : string;
  age : number;
  isStudent : boolean;
}



const User = ({name,age,isStudent} : UserShape ) => {
  return (<div>
    <div>{name}</div>
    <div>{age}</div>
    <div>{isStudent}</div>
  </div>
    
  )
}

export default User