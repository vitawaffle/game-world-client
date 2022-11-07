import Entity from './Entity';
import Role from './Role';

interface User extends Entity {
  username: string;
  email: string;
  emailVerifiedAt?: Date;
  roles: Role[];
}

export default Entity;
