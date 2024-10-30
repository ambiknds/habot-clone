import { Button } from './ui/button'

export default function SuppliersSection() {
  return (
    <section className="flex justify-between items-center mb-16">
      <h2 className="text-3xl font-bold">
        Let Suppliers <span className="border-b-2 border-emerald-600">Find You</span>
      </h2>
      <Button className="bg-emerald-100 text-emerald-600 hover:bg-emerald-200">
        Get Verified
      </Button>
    </section>
  )
}