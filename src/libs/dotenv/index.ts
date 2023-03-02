const dotenv = {
  ASSET_PREFIX: process.env.NEXT_PUBLIC_ASSET_PREFIX as string,
  CDN_SERVER: process.env.NEXT_PUBLIC_CDN_SERVER as string,
  SERVER: process.env.NEXT_PUBLIC_SERVER as string,
  WEB_URL: process.env.NEXT_PUBLIC_WEB_URL as string,

  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,

  DEV_MODE: process.env.NODE_ENV === 'development',
} as const;

export default dotenv;