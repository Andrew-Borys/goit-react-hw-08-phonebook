import notFound from './not-found-img.png';
const NotFoundPage = () => {
  return (
    <>
      <img
        src={notFound}
        alt=""
        style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
      />
    </>
  );
};

export default NotFoundPage;
