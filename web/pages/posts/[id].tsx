// import Layout from '@layouts/NextLayout/layout';
// import {getData} from '@lib/posts';
// import Head from 'next/head';
// import {GetStaticProps, GetStaticPaths} from 'next';

// const title = 'sample data load';
// export default function Post({
//   postData,
// }: {
//   postData: {
//     title: string;
//     date: string;
//     contentHtml: string;
//   };
// }) {
//   return (
//     <Layout>
//       <Head>
//         <title>{title}</title>
//       </Head>
//       <div>{JSON.stringify(postData)}</div>
//     </Layout>
//   );
// }

// export const getStaticProps: GetStaticProps = async ({params}) => {
//   const postData = await getData();
//   return {
//     props: {
//       postData,
//     },
//   };
// };

export {};
