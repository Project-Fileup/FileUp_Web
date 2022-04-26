import dotenv from '@/libs/dotenv';

const makeLocationURL = (location: string): string => {
  return `${dotenv.APP_URL}${location}`;
}

export default makeLocationURL;