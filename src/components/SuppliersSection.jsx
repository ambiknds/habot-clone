import { Button } from './ui/button'

export default function SuppliersSection() {
  return (
    <section className="w-full h-40 bg-blue-100 flex justify-between items-center mb-16 px-32">
      <h2 className="text-3xl font-bold">
        Let Suppliers <span className="border-b-2 border-emerald-600">Find You</span>
      </h2>
      <Button className="bg-orange-500 text-white hover:text-black px-12 py-2">
        Get Verified
      </Button>
    </section>
  )
}