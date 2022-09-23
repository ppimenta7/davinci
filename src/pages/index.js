const Home = () => {
  return <div />
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: '/404',
    }
  }
}

export default Home;
