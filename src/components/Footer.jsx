import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl flex justify-between mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://storage.googleapis.com/varal-habot-vault-marketplace-10032022/images/updated%20trans-Habot-logo-png.png"
              alt="HABOT"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400">© R Singhania</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Data privacy</a></li>
              <li><a href="#" className="hover:text-white">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Terms</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Data privacy</a></li>
              <li><a  href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Related</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Find Buyer</a></li>
              <li><a href="#" className="hover:text-white">Feedback</a></li>
              <li><a href="#" className="hover:text-white">Are You a Supplier?</a></li>
            </ul>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center gap-4'>
            <Linkedin />
            <Twitter />
            <Facebook />
            <Instagram />
        </div>
      </div>
    </footer>
  )
}
