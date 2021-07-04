export enum UserInputTypes
{
  BIO = 'bio',
  EMAIL = 'email',
  LOCATION = 'location',
  FULL_NAME = 'fullName',
}

export function setPlaceholderOnMultiline()
{
  const textAreas = document.getElementsByTagName('textarea');
  Array.prototype.forEach.call(textAreas, function (elem)
  {
    elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
  });
}

export const userTypeGetter = localStorage.getItem('userType') || '';
export const userNameGetter = localStorage.getItem('userName') || '';
