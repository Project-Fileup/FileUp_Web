const queryStringToObject = (query: string): Record<string, unknown> => {
  const replaceQuestionMark = query.replace('?', '');

  const records = replaceQuestionMark.split('&');

  let object: Record<string, unknown> = {};

  for (const record of records) {
    const [key, value] = record.split('=');

    if (value === undefined) {
      continue;
    }

    object = {
      ...object,
      [key]: value,
    };
  }

  return object;
}

export default queryStringToObject;