import dotenv from '@/libs/dotenv';
import isEmpty from './isEmpty';

const generateStaticPath = (path: string): string => {
  if (dotenv.DEV_MODE || isEmpty(dotenv.CDN_SERVER)) {
    return path;
  }

  return `${dotenv.CDN_SERVER}${path}`;
}

export default generateStaticPath;