import { useState } from 'react'
import { Button } from './ui/button'
import { Search, MapPin } from 'lucide-react'

export default function HeroSection() {
  const [searchService, setSearchService] = useState('')
  const [searchLocation, setSearchLocation] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching:', { searchService, searchLocation })
  }

  return (
    <section className="relative pt-16">
      <div className="absolute inset-0">
        <img
          src="/dubai-skyline.jpg"
          alt="Dubai Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Are You a Supplier?</h1>
        <p className="text-2xl mb-8">Explore Matching Opportunities.</p>
        
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto space-y-4">
          <div className="flex gap-2">
            <div className="flex-1 bg-white rounded-md overflow-hidden flex items-center">
              <Search className="h-5 w-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search your required service here"
                className="w-full p-3 focus:outline-none"
                value={searchService}
                onChange={(e) => setSearchService(e.target.value)}
              />
            </div>
            <div className="flex-1 bg-white rounded-md overflow-hidden flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search your desired location here"
                className="w-full p-3 focus:outline-none"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
              Search
            </Button>
          </div>
          <p className="text-sm">
            Are you a buyer?{' '}
            <a href="#" className="underline hover:text-emerald-200">
              Click here if you are looking to post a requirements
            </a>
          </p>
        </form>
      </div>
    </section>
  )
}