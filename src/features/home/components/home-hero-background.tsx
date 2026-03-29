const HomeHeroBackground = () => {
  return (
    <div className="h-svh w-full -z-50 absolute top-0 left-0">
      <div className="absolute inset-0 z-10 bg-linear-170 from-black via-black/50 to-transparent" />
      <video
        className="h-svh w-full object-cover object-[35%_50%]"
        autoPlay
        loop
        muted
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HomeHeroBackground;
