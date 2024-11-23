import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const faculty = [
  {
    name: "Dr. Jane Smith",
    position: "Head of Department",
    specialization: "Artificial Intelligence",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Prof. John Doe",
    position: "Associate Professor",
    specialization: "Data Science",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Dr. Emily Brown",
    position: "Assistant Professor",
    specialization: "Cybersecurity",
    image: "/placeholder.svg?height=100&width=100",
  },
  // Add more faculty members as needed
]

export default function Faculty() {
  return (
    (<div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Our Faculty</h1>
      <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-8">MCA Department, Easwari Engineering College Chennai</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faculty.map((member, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900">
            <CardHeader className="flex flex-row items-center space-x-4">
              <Avatar>
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.position}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p><strong>Specialization:</strong> {member.specialization}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>)
  );
}

