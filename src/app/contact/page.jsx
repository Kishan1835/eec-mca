import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    (<div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
      <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-8">MCA Department, Easwari Engineering College Chennai</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">We&apos;d love to hear from you. Please fill out the form or use our contact information to reach us.</p>
          <div className="space-y-2">
            <p><strong>Address:</strong> Ramapuram, Chennai - 600089, Tamil Nadu, India</p>
            <p><strong>Email:</strong> mca@eec.edu.in</p>
            <p><strong>Phone:</strong> (044) 2249 0853</p>
          </div>
        </div>
        <div
          className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 p-8 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <Textarea id="message" placeholder="Your message here..." />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </div>)
  );
}

