import Link from 'next/link';
import { useRouter } from 'next/router';
import { getText } from '../locales/lang';

export default function IndexPage(props) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const t = getText('common', locale);

  return (
    <div>
      <h1>Index page</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>

      <h1>{t('Title Text')} </h1>
      <Link href='/gsp'>
        <a>To getStaticProps page</a>
      </Link>
      <br />

      <Link href='/gsp/first'>
        <a>To dynamic getStaticProps page</a>
      </Link>
      <br />

      <Link href='/gssp'>
        <a>To getServerSideProps page</a>
      </Link>
      <br />
    </div>
  );
}
