import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
			<section className={utilStyles.headingMd}>
				<p>
					Oh dear Coffee! Nothing has ever awakened my senses more than your
					sweet aroma. Who can resist your cocoa flavor, your nutty texture,
					and the happy feeling at every sip?
				</p>
				<p>
					Sadly, you cause me heartburn 😔
				</p>
			</section>
		</Layout>
	);
}
