export default function About() {
  return (
    (<div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">About Our MCA Department</h1>
      <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-8">Easwari Engineering College Chennai</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            The MCA Department at Easwari Engineering College Chennai is committed to providing high-quality education in computer applications, 
            fostering innovation, and preparing students for successful careers in the ever-evolving tech industry.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-6">
            We aim to be a leading center of excellence in computer applications education and research, 
            producing skilled professionals who can tackle complex technological challenges and drive innovation on a global scale.
          </p>
        </div>
        <div
          className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>State-of-the-art computer labs and research facilities</li>
            <li>Industry-aligned curriculum with regular updates</li>
            <li>Experienced faculty with industry and research backgrounds</li>
            <li>Strong industry partnerships for internships and placements</li>
            <li>Regular workshops, seminars, and tech events</li>
            <li>Focus on practical, hands-on learning and project-based education</li>
            <li>Research opportunities in emerging technologies</li>
            <li>Collaborative projects with other departments and institutions</li>
          </ul>
        </div>
      </div>
    </div>)
  );
}

