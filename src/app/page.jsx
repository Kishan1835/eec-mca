import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    (<div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to the MCA Department</h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-4">Easwari Engineering College Chennai</h2>
        <p className="text-xl mb-8">Empowering future tech leaders with cutting-edge education and research</p>
        <Button asChild>
          <Link href="/programs">Explore Our Programs</Link>
        </Button>
      </section>
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div
          className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Innovative Curriculum</h2>
          <p>Our program is designed to keep pace with the rapidly evolving tech industry, ensuring our students are always at the forefront of technological advancements.</p>
        </div>
        <div
          className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Expert Faculty</h2>
          <p>Learn from industry professionals and renowned researchers in computer applications, benefiting from their vast experience and knowledge.</p>
        </div>
        <div
          className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Career Opportunities</h2>
          <p>Our graduates are sought after by top tech companies and research institutions, with a track record of successful placements and career growth.</p>
        </div>
      </section>
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Shape the Future of Technology</h2>
        <p className="text-xl mb-8">Join our MCA program at Easwari Engineering College Chennai and embark on an exciting journey in the world of computer applications.</p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>)
  );
}

