import * as yup from 'yup';
import { AxiosInstance } from 'axios';

import useClient from './hooks/useClient';

yup.addMethod(yup.string, 'username', function (this) {
  return this.test(
    'username',
    'Invalid username format: the username must start with a latin letter, '
      + 'can contain letters, numbers, and underscores, and '
      + 'be between 2 and 32 characters long',
    function (value) {
      return !value
        || /^[a-zA-Z][a-zA-Z0-9_]{1,31}$/.test(value);
    }
  )
});

yup.addMethod(yup.string, 'unique', function (
  this,
  collectionName: string,
  fieldName: string,
) {
  const client = useClient();

  return this.test('unique', 'This field should be unique.', function (value) {
    return isUnique(value ?? '', collectionName, fieldName, client);
  });
});

async function isUnique(
  value: string,
  collectionName: string,
  fieldName: string,
  client: AxiosInstance,
): Promise<boolean> {
  return !(await client.get<boolean>(
    `/${collectionName}/exists?${fieldName}=${value}`
  )).data;
}

yup.addMethod(yup.string, 'password', function (this) {
  return this.test('password', 'Invalid password format: the password must '
    + 'contain uppercase and lowercase letters, numbers and be at least 8 '
    + 'characters long.',
    function (value) {
      return !value || (
        /[A-ZА-Я]/.test(value)
          && /[a-zа-я]/.test(value)
          && /[0-9]/.test(value)
          && value.length >= 8
      );
    }
  )
});

export default yup;

declare module 'yup' {
  interface StringSchema {
    username: () => StringSchema;
    unique: (collectionName: string, fieldName: string) => StringSchema;
    password: () => StringSchema;
  }
}
