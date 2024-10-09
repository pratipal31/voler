import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white w-full py-4 px-6 fixed top-0 z-50 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <Image
              src="/logo.png"
              alt="Logo"
              layout="intrinsic" // Use intrinsic layout
              className="w-32 h-32 mr-4" // Tailwind classes for width and height
              width={100} // Original size for optimization
              height={100} // Original size for optimization
            />
          </div>
        </div>
      </nav>

      {/* Image Banner with Transparent Join Us Button */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/volunteer.jpg"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center flex-col">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 text-center">
            Unite for a Cause, Serve with Heart
          </h1>
          <h3 className="text-white text-2xl mb-4 text-center">
            Join our community of passionate volunteers making a difference
          </h3>
          <Link href="./components/login">
            <button className="border border-white text-white px-6 py-3 rounded-md bg-transparent hover:bg-white hover:text-black transition duration-300 transform hover:scale-105">
              Join Us
            </button>
          </Link>
        </div>
      </div>

      {/* Section with Three Cards */}
      <div className="flex flex-wrap cursor-pointer justify-around items-start py-12 gap-6">
        {/* Card 1 */}
        <div className="bg-gray-100 shadow-lg rounded-lg relative overflow-hidden max-w-sm transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Our Mission
          </h2>
          <div className="h-56">
            <Image
              src="/card1.jpg"
              alt="Our Mission"
              width={700}
              height={200}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white text-lg font-bold text-center p-4">
              We are dedicated to fostering a spirit of community and compassion
              through volunteerism. Our mission is to connect individuals with
              meaningful opportunities that inspire action and create lasting
              change.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 cursor-pointer shadow-lg rounded-lg relative overflow-hidden max-w-sm transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Team</h2>
          <div className="h-56">
            <Image
              src="/card2.jpg"
              alt="Our Team"
              width={700}
              height={200}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white text-lg font-bold text-center p-4">
              Our team is a diverse group of passionate individuals committed to
              making a difference in our community. Each member brings unique
              skills and experiences, united by a shared dedication to service.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 cursor-pointer shadow-lg rounded-lg relative overflow-hidden max-w-sm transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Our Vision
          </h2>
          <div className="h-56">
            <Image
              src="/card3.jpg"
              alt="Our Vision"
              width={700}
              height={200}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white text-lg font-bold text-center p-4">
              We envision a world where everyone can contribute their time and
              talents to uplift their communities. Our goal is to inspire
              action, foster connections among diverse groups, and empower
              communities to thrive together.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 mb-6">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={90}
              layout="intrinsic"
            />
            <p className="mt-2">Connecting communities through volunteerism.</p>
          </div>

          {/* Follow Us Section */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-white"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-white"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  className="text-gray-400 hover:text-white"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-400">Email: info@volunteer.org</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="text-center mt-6 text-gray-400">
          &copy; {new Date().getFullYear()} Volunteer Network. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
