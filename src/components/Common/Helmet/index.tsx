import { useRouter } from 'next/router';
import Head from 'next/head';
import dayjs from 'dayjs';
import isEmpty from '@/utils/is-package/isEmpty';
import makeLocationURL from '@/utils/location/makeLocationURL';

type HelmetProps = {
  title?: string;
  description?: string;
  image?: string;
  createdAt?: string | Date;
}

const Helmet = ({
  title = 'FileUp',
  description = 'FileUp',
  image,
  createdAt,
}: HelmetProps): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <Head>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
			<meta property='og:image' content={image} />
      <meta property='og:url' content={makeLocationURL(asPath)} />
      <meta property='og:type' content='website' />

			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />
      <meta property='twitter:url' content={makeLocationURL(asPath)} />
      <meta property='twitter:card' content='summary_large_image' />

      {
        !isEmpty(createdAt) &&
        <meta
          property='article:published_time'
          content={dayjs(createdAt).format('YYYY-MM-DD')}
        />
      }

      <meta
        property='article:pc_service_home'
        content={makeLocationURL(asPath)}
      />
      <meta
        property='article:mobile_service_home'
        content={makeLocationURL(asPath)}
      />

      <title>{title}</title>
    </Head>
  );
}

export default Helmet;