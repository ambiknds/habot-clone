import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
const VIDEO_PATH = 'https://www.youtube.com/watch?v=IZLp-TZyDkQ';
import { Play, CheckCircle } from 'lucide-react'
import * as Tabs from '@radix-ui/react-tabs'

export default function VideoSection() {
  const playerRef = useRef(null);
  return (
    <div className="bg-blue-900 rounded-lg mb-16 max-w-7xl mx-auto">
      <Tabs.Root defaultValue="buyer" className="p-8">
        <Tabs.List className="flex gap-4 mb-8">
          <Tabs.Trigger
            value="buyer"
            className="px-6 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-900 text-white"
          >
            Buyer
          </Tabs.Trigger>
          <Tabs.Trigger
            value="supplier"
            className="px-6 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-900 text-white"
          >
            Supplier
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="buyer">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
              {/* <Play className="h-16 w-16 text-blue-900" /> */}
             <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
            </div>
            <div className="text-white space-y-4">
              <h3 className="text-xl font-semibold">Post your requirements.</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span>Sit back for multiple suppliers to contact you.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span>Choose among the suppliers based on the ratings and reviews.</span>
                </li>
              </ul>
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content value="supplier">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
              {/* <Play className="h-16 w-16 text-blue-900" /> */}
              <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
            </div>
            <div className="text-white space-y-4">
              <h3 className="text-xl font-semibold">Complete your profile.</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span>Get notified about relevant opportunities.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span>Connect with potential buyers and share your expertise.</span>
                </li>
              </ul>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}