"use client"

export function Footer() {
  return (
    (<footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">MCA Department</h3>
            <p className="text-gray-400">Easwari Engineering College Chennai</p>
            <p className="text-gray-400">Empowering future tech leaders</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-gray-400">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/programs" className="hover:text-white">Programs</a></li>
              <li><a href="/faculty" className="hover:text-white">Faculty</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-400">Ramapuram, Chennai - 600089</p>
            <p className="text-gray-400">Tamil Nadu, India</p>
            <p className="text-gray-400">Email: mca@eec.edu.in</p>
            <p className="text-gray-400">Phone: (044) 2249 0853</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MCA Department, Easwari Engineering College Chennai. All rights reserved.</p>
        </div>
      </div>
    </footer>)
  );
}

