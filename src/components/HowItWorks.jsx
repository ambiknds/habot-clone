import { User, FileText, FilePenLine , FileSearch, NotebookPen, Handshake  } from 'lucide-react'

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
      icon: FileSearch ,
      title: 'Review, Select, and Contact the Best Suppliers'
    },
    {
      icon: NotebookPen ,
      title: 'Suppliers Complete your profile and get notified for opportunities'
    },
    {
      icon: FilePenLine,
      title: 'Contact to Buyers and Share your Quote for the Service'
    },
    {
      icon: Handshake ,
      title: 'Both the Parties can Connect and Make Business Leave a Feedback'
    }
  ]

  return (
    <section className="text-center mb-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">How it works?</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with 
        potential buyers, and build successful business relationships, sharing valuable feedback.
      </p>

      <div className="grid md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className={`text-center space-y-4 p-12 ${
            index % 2 === 0 ? 'bg-blue-100' : 'bg-white'
          }`}>
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