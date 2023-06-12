import { NextPage } from "next";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface PrivatePageProps {
  name: string;
  payload: any;
}

const PrivatePage: NextPage<PrivatePageProps> = ({name}) => {
  const router = useRouter();
  useEffect(() => {
    // window.localStorage.removeItem('token')
    // setTimeout(() => {
    //   window.localStorage.removeItem('token')
    // }, 5000);
    const ex = window.localStorage.getItem('token') ? true : false;
    if(!ex) router.push('/login')
  }, [])

  return <div>Pagina {name}</div>;
};

export default PrivatePage;

export const getServerSideProps = async ({}) => {
    return {
      props: {
        name: "Beatriz",
        payload: "algo"
      },
    };
};

