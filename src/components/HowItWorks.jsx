import { User, FileText, MessageSquare } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: User,
      title: 'Select Your Role and Sign Up'
    },
    {
      icon: FileText,
      title: 'Buyers Post Your Requirements'
    },
    {
      icon: MessageSquare,
      title: 'Review, Select, and Contact the Best Suppliers'
    }
  ]

  return (
    <section className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">How it works?</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with 
        potential buyers, and build successful business relationships, sharing valuable feedback.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
              <step.icon className="h-8 w-8 text-blue-900" />
            </div>
            <h3 className="font-semibold">{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}