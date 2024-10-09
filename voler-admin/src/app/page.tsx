import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white w-full py-4 px-6 fixed top-0 z-50">
        <div className="flex items-center">
          <div className="flex items-center">
            {/* Logo */}
            <Image
              src="/logo.png" // Replace with your logo path in the "public" folder
              alt="Logo"
              width={100}
              height={90} // Adjust height according to your logo's natural size
              layout="intrinsic" // Use intrinsic to maintain the logo's aspect ratio
              className="object-contain" // Ensures the image scales properly
            />
          </div>
        </div>
      </nav>

      {/* Image Banner with Transparent Join Us Button */}
      <div className="relative w-full h-96 mt-7 overflow-hidden">
        {" "}
        {/* Add overflow-hidden */}
        <Image
          src="/volunteer.jpg" // Replace with your image path
          alt="Banner Image"
          layout="fill"
          objectFit="cover" // Ensure the full image is displayed without cropping
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="border border-white text-white px-6 py-3 rounded-md bg-transparent hover:bg-white hover:text-black transition">
            Join Us
          </button>
        </div>
      </div>

      {/* Section with Three Cards */}
      <div className="flex flex-wrap justify-around items-start py-12 gap-6">
        {/* Card 1 */}
        <div className="bg-gray-100 shadow-md rounded-lg relative overflow-hidden max-w-sm transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
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
              objectFit="cover" // Use cover to fill the entire space
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white text-lg font-bold text-center">
              We are dedicated to fostering a spirit of community and compassion
              through volunteerism. Our mission is to connect individuals with
              meaningful opportunities that inspire action and create lasting
              change. Together, we aim to empower our volunteers, uplift those
              in need, and build a brighter future for all.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 shadow-md rounded-lg relative overflow-hidden max-w-sm transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Team</h2>
          <div className="h-56">
            <Image
              src="/card2.jpg"
              alt="Our Team"
              width={700}
              height={200}
              layout="responsive"
              objectFit="cover" // Use cover to fill the entire space
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white text-lg font-bold text-center">
              Our team is a diverse group of passionate individuals committed to
              making a difference in our community. Each member brings unique
              skills and experiences, united by a shared dedication to service.
              Together, we foster an inclusive environment that encourages
              collaboration and innovation, ensuring that every voice is heard.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 shadow-md rounded-lg relative overflow-hidden max-w-sm transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
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
              objectFit="cover" // Use cover to fill the entire space
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white text-lg font-bold text-center">
              We envision a world where everyone can contribute their time and
              talents to uplift their communities. Our goal is to inspire
              action, foster connections among diverse groups, and empower
              communities to thrive together. Together, we create a culture of
              active citizenship, embracing volunteerism as a vital part of
              life.
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
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              width={100}
              height={90}
              layout="intrinsic"
            />
            <p className="mt-2">Connecting communities through volunteerism.</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/volunteer"
                  className="text-gray-400 hover:text-white"
                >
                  Volunteer
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <ul>
              <li className="mb-2">
                <Link
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-white"
                >
                  Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-white"
                >
                  Twitter
                </Link>
              </li>
              <li className="mb-2">
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
            <p className="text-gray-400 mb-2">Email: voluntrust@gmail.com</p>
            <p className="text-gray-400">Phone: +91 8850585249</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p>© 2024 Your Volunteer Website. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
