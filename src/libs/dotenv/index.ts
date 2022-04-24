const dotenv = {
  SERVER: process.env.NEXT_PUBLIC_SERVER as string,
  DEV_MODE: process.env.NODE_ENV === 'development',
} as const;

export default dotenv;