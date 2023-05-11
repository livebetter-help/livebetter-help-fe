interface User {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  age: number;
  height: number;
  weight: number;
}

interface UserList {
  userArray: User[];
}
