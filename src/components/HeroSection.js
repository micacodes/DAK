import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    // Section container: relative position, full width, and full screen height
    <section className="relative w-full h-screen">
      {/* Background Image: This will be a real photo later. It covers the whole section. */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-placeholder.jpg')" }} // Placeholder image
      ></div>

      {/* Dark Overlay: This sits on top of the image to make text readable */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      {/* Content Container: Sits on top of the overlay, uses flexbox to center everything */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          Shaping Tomorrow's Voices
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8">
          Fostering intellectual discourse, empowering youth, and shaping transformative advocacy across Kenya.
        </p>
        <Link 
          href="/programs" 
          className="bg-dak-gold text-gray-900 font-bold text-xl py-4 px-10 rounded-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
        >
          Explore Our Programs
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;