import { Button } from './ui/button'
import { MoveRight } from 'lucide-react';

export default function ReadySection() {
  const locations = [
    'Abu Dhabi',
    'Dubai',
    'Sharjah & Ajman',
    'Fujairah',
    'Ras Al Khaimah',
    'Umm Al Quwain'
  ]

  return (
    <section className="mb-16 flex max-w-7xl mx-auto">
      <div className='w-1/2 pr-8 mr-4'>
      <h2 className="text-3xl font-bold mb-4">
        Ready to dive into <span className="text-blue-900">HABOT</span>?
      </h2>
      <p className="text-gray-600 max-w-2xl mb-8">
        Signing up with HABOT opens the door to a world of new opportunities
        and potential for business growth. Gain access to a vibrant community
        of like-minded individuals, unlock valuable resources, and take the first
        step towards realizing your entrepreneurial dreams.
      </p>
      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2">
      Sign up Today ! 
      <span className='ml-8'><MoveRight /></span> 
      </Button>
      </div>

      <div className="w-1/2 grid grid-cols-2 md:grid-cols-2 gap-2 mt-4">
        {locations.map((location) => (
          <Button
            key={location}
            className="p-4 h-auto border border-orange-400 hover:border-emerald-600 hover:text-emerald-600"
          >
            {location}
          </Button>
        ))}
      </div>
    </section>
  )
}