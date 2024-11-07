function NoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className='container relative pt-28 text-center'>
        <h3 className='text-3xl sm:text-4xl font-bold text-dark-text mb-4'>
            NO PAGE FOUND
        </h3>
        <p className='text-xl sm:text-2xl text-dark-text'>
            The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
    </div>
  );
}

export default NoPage;
