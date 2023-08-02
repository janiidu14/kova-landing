import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        {/* Add any meta tags specific to the layout here */}
      </Head>
      {/* Common layout elements like header */}
      <header>
        {/* Header content */}
      </header>
      
      {/* Content of individual pages */}
      <main>{children}</main>
      
      {/* Common layout elements like footer */}
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Layout;

// import React from 'react';
// import Layout from '../components/Layout';

// const HomePage = () => {
//   return (
//     <Layout>
//       <h1>Welcome to My Website</h1>
//       <p>This is the homepage content.</p>
//     </Layout>
//   );
// };

// export default HomePage;
