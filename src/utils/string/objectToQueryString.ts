import queryString from 'qs';
import isEmpty from '../is-package/isEmpty';

const objectToQueryString = <T extends {}>(value: T): string => {
  const parsed = queryString.stringify(value);

  if (isEmpty(Object.keys(value))) {
    return '';
  }

  return !isEmpty(parsed) ? `?${parsed}` : '';
}

export default objectToQueryString;