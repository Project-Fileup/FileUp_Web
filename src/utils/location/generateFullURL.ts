import dotenv from '@/libs/dotenv';

const generateFullURL = (location: string): string => {
  return `${dotenv.WEB_URL}${location}`;
}

export default generateFullURL;