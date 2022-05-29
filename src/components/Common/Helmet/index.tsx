import { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import dotenv from '@/libs/dotenv';
import makeLocationURL from '@/utils/location/makeLocationURL';
import isEmpty from '@/utils/is-package/isEmpty';

type HelmetProps = {
  title?: string;
  description?: string;
  thumbnail?: string;
  createdAt?: string | Date | null;
  noIndex?: boolean;
  children?: ReactNode;
}

const Helmet = ({
  title = 'FileUp',
  description = 'FileUp',
  thumbnail,
  createdAt = null,
  noIndex = false,
  children,
}: HelmetProps): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <Head>
      <link
        rel='canonical'
        href={makeLocationURL(asPath)}
      />

      <meta
        name='title'
        content={title}
      />

      <meta
        name='description'
        content={description}
      />

      <meta
        property='og:title'
        content={title}
      />

      <meta
        property='og:description'
        content={description}
      />

			<meta
        property='og:image'
        content={thumbnail}
      />

      <meta
        property='og:url'
        content={makeLocationURL(asPath)}
      />

      {
        noIndex &&
        <meta
          name='robots'
          content='noindex'
        />
      }

			<meta
        name='twitter:title'
        content={title}
      />

      <meta
        name='twitter:description'
        content={description}
      />

      <meta
        property='twitter:url'
        content={makeLocationURL(asPath)}
      />

			<meta
        name='twitter:image'
        content={thumbnail}
      />

      <meta
        name='twitter:card'
        content='summary_large_image'
      />

      {
        !isEmpty(createdAt) &&
        <>
          <meta
            property='article:published_time'
            content={dayjs(createdAt).format('YYYY-MM-DDTHH:mm:ss')}
          />

          <meta
            property='og:regDate'
            content={dayjs(createdAt).format('YYYYMMDDHHmmss')}
          />
        </>
      }

      <meta
        property='article:pc_url'
        content={makeLocationURL(asPath)}
      />

      <meta
        property='article:pc_view_url'
        content={makeLocationURL(asPath)}
      />

      <meta
        property='article:pc_service_home'
        content={dotenv.APP_URL}
      />

      <meta
        property='article:mobile_url'
        content={makeLocationURL(asPath)}
      />

      <meta
        property='article:mobile_view_url'
        content={makeLocationURL(asPath)}
      />

      <meta
        property='article:mobile_service_home'
        content={dotenv.APP_URL}
      />

      {children}

      <title>{title}</title>
    </Head>
  );
}

export default Helmet;