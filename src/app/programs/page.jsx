import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const programs = [
  {
    title: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    description: "A comprehensive program covering advanced topics in computer science and applications.",
  },
  {
    title: "Integrated MCA",
    duration: "5 Years",
    description: "An integrated program for students after 12th standard, combining BCA and MCA curriculum.",
  },
  {
    title: "Executive MCA",
    duration: "3 Years (Part-Time)",
    description: "A flexible program designed for working professionals to enhance their skills and knowledge.",
  },
]

export default function Programs() {
  return (
    (<div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Our Programs</h1>
      <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-8">MCA Department, Easwari Engineering College Chennai</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900 dark:to-indigo-900">
            <CardHeader>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>Duration: {program.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{program.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>)
  );
}

