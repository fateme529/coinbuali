const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <img
        src="/pic/Frame2.jpg"  
        alt="Loading..."
        className="w-32 h-32 animate-pulse" 
      />
    </div>
  );
};

export default Loader;
