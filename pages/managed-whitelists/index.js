import React from 'react';
import EmptyWhitelist from '../../components/whitelist/EmptyWhitelist';
import ManagedWhitelits from '../../components/whitelist/ManagedWhitelists';
import { useMoralisQuery, useMoralis } from 'react-moralis';
import { useEffect } from 'react';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

export default function Whitelist() {
  const { user } = useMoralis();

  const { data, error, isLoading } = useMoralisQuery('Whitelist');

  if (error) {
    return <div>Error!</div>;
  }

  if (isLoading) {
    return (
      <div className='py-16'>
        <LoadingSpinner size={'20'} />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <EmptyWhitelist
        title={'No whitelists found'}
        description={'Get started by creating a new whitelist.'}
        buttonLink={'/managed-whitelists/new'}
        buttonLabel={'Create a new Whitelist'}
      />
    )
  }

  return (
    <ManagedWhitelits isLoading={isLoading} whitelists={data} />
  );

  // return (
  //   <>
  //
  //   </>
  // )
}

// export async function getServerSideProps(context) {

//   // console.log(context);

//   await Moralis.start({
//     appId: process.env.NEXT_PUBLIC_MORALIS_APP_ID,
//     serverUrl: process.env.NEXT_PUBLIC_MORALIS_SERVER_URL,
//   });

//   const currentUser = Moralis.User.current();

//   console.log('Current User', currentUser);

//   const Whitelist = Moralis.Object.extend("Whitelist");
//   const query = new Moralis.Query(Whitelist);
//   // query.equalTo("createdBy.objectId", "MdmIUGWGw3e6SHqM7C9GXqG3");
//   let results = await query.find();

//   results = results.map(result => JSON.parse(JSON.stringify(result)));

//   // results.filter(result => result.get("createdBy").objectId === "MdmIUGWGw3e6SHqM7C9GXqG3");

//   console.log(results);

//   return {
//     props: {
//       whitelists: results
//     }
//   }
// }
