import * as yup from 'yup';

import client from './client';

yup.addMethod(yup.string, 'username', function (this) {
  return this.matches(/^[a-zA-Z][a-zA-Z0-9_]{1,31}$/);
});

yup.addMethod(yup.string, 'unique', function (
  this,
  collectionName: string,
  fieldName: string,
) {
  return this.test('unique', 'This field should be unique.', function (value) {
    return isUnique(value ?? '', collectionName, fieldName);
  });
});

async function isUnique(
  value: string,
  collectionName: string,
  fieldName: string,
): Promise<boolean> {
  return (await client.get<boolean>(
    `/${collectionName}/exists?${fieldName}=${value}`
  )).data;
}

export default yup;

declare module 'yup' {
  interface StringSchema {
    username: () => StringSchema;
    unique: (collectionName: string, fieldName: string) => StringSchema;
  }
}
