import dotenv from '@/libs/dotenv';
import isEmpty from '@/utils/is-package/isEmpty';

const generateStaticPath = (path: string): string => {
  if (dotenv.DEV_MODE || isEmpty(dotenv.ASSET_PREFIX)) {
    return path;
  }

  return `${dotenv.APP_URL}${path}`;
}

export default generateStaticPath;