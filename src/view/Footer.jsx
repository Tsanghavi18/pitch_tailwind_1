import React from 'react'

function Footer() {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 py-1 px-4 sm:px-8 md:px-16 lg:px-32">

        <ul className="text-gray-700 text-[16px]">
            <li className="hover:underline py-3 text-black font-bold">Product</li>
            <li className="hover:underline py-1 ">Product Overview</li>
            <li className="hover:underline py-1">What's New</li>
            <li className="hover:underline py-1">Pricing</li>
            <li className="hover:underline py-1">Integrations</li>
            <li className="hover:underline py-1">Pitch Decks</li>
            <li className="hover:underline py-1">Sales Decks</li>
            <li className="hover:underline py-1">Team Meetings</li>
            <li className="hover:underline py-1">Board Decks</li>
            <li className="hover:underline py-1">Presentation Maker</li>
            <li className="hover:underline py-1">AI Presentation Maker</li>
            <li className="hover:underline py-1">Video Presentation Maker</li>
            <li className="hover:underline py-1">Pitch vs PowerPoint</li>
            <li className="hover:underline py-1">Pitch vs Keynote</li>
            <li className="hover:underline py-1">Pitch vs Google Slides</li>
            <li className="hover:underline py-1">Pitch vs Figma Slides</li>
            <li className="hover:underline py-1">Academy</li>
            <li className="hover:underline py-1">Help Center</li>
            <li className="hover:underline py-1">Download</li>
            <li className="hover:underline py-1">Status</li>
        </ul>

        <ul className="text-gray-700 text-[16px]">
            <li className="hover:underline py-3 text-black font-bold">Templates</li>
            <li className="hover:underline py-1">Pitch deck</li>
            <li className="hover:underline py-1">Marketing</li>
            <li className="hover:underline py-1">Startups</li>
            <li className="hover:underline py-1">Design</li>
            <li className="hover:underline py-1">Sales</li>
            <li className="hover:underline py-1">Business</li>
            <li className="hover:underline py-1">UX</li>
            <li className="hover:underline py-1">Proposal</li>
            <li className="hover:underline py-1">Report</li>
            <li className="hover:underline py-1">Simple</li>
            <li className="hover:underline py-1">Creative</li>
            <li className="hover:underline py-1">Professional</li>
            <li className="hover:underline py-1">Modern</li>
            <li className="hover:underline py-1">Project plan</li>
            <li className="hover:underline py-1">Project proposal</li>
            <li className="hover:underline py-1">Portfolio</li>
            <li className="hover:underline py-1">Brand</li>
            <li className="hover:underline py-1">Product</li>
            <li className="hover:underline py-1">Agency</li>
        </ul>

        <ul className="text-gray-700 text-[16px]">
            <li className="hover:underline py-3 text-black font-bold">Legal</li>
            <li className="hover:underline py-1">Terms of Use</li>
            <li className="hover:underline py-1">Privacy Policy</li>
            <li className="hover:underline py-1">Legal Notice</li>
            <li className="hover:underline py-1">DPA</li>
            <li className="hover:underline py-1">DMCA Policy</li>
            <li className="hover:underline py-1">ERDF Support</li>
            <li className="hover:underline py-1">GDPR</li>
            <li className="hover:underline py-1">Security Policy</li>
            <li className="hover:underline py-1">Cookie Settings</li>
        </ul>

        <ul className="text-gray-700 text-[16px]">
            <li className="hover:underline py-3 text-black font-bold">Company</li>
            <li className="hover:underline py-1">About</li>
            <li className="hover:underline py-1">Press Room</li>
            <li className="hover:underline py-1">Careers</li>
            <li className="hover:underline py-1">Blog</li>
        </ul>

        

      </div>


      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-4">
          <div className="border-t border-gray-300 rounded-md ">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 py-6">
        {/* Logo */}
                  <div className="flex -mx-8 justify-start text-left">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 677 185" className="w-40 h-6 sm:h-7 text-gray-900">
                    <defs>
                      <linearGradient id="a">
                        <stop offset="0" style={{ stopColor: "#000", stopOpacity: 1 }} />
                        <stop offset="0.143" style={{ stopColor: "#fff", stopOpacity: 1 }} />
                      </linearGradient>
                      <linearGradient xlinkHref="#a" id="b" x1="163.778" x2="677" y1="92.5" y2="92.5" gradientUnits="userSpaceOnUse" />
                      <mask id="c" maskUnits="userSpaceOnUse">
                        <path d="M163.778 0H677v185H163.778z" style={{ opacity: 1, fill: "url(#b)" }} />
                      </mask>
                    </defs>
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M163.585 78.34c-1.833 24.729-21.492 47.093-46.753 48.113V107.74c0-17.132-12.21-31.942-29.031-35.21L25.158 60.352v-42.26C25.158 6.724 35.534-1.834 46.694.34l64.432 12.52c35.653 7.76 54.721 35.09 52.474 65.48zM47.374 137.42l-37.071-7.199C4.967 129.188 0 133.267 0 138.707v25.66a13.377 13.377 0 0 0 10.82 13.126l37.071 7.199c5.336 1.034 10.303-3.06 10.303-8.485v-25.66a13.378 13.378 0 0 0-10.82-13.126zM84.83 86.425 28.292 75.443c-8.145-1.582-15.698 4.656-15.698 12.948v27.863c.133.03.28.044.413.074l37.072 7.199c12.904 2.512 22.276 13.864 22.276 27.02v5.824l14.353 2.793c8.144 1.582 15.697-4.656 15.697-12.948v-38.461c0-10.391-7.375-19.334-17.575-21.315z"
                      clipRule="evenodd"
                    />
                    <g mask="url(#c)">
                      <path
                        fill="currentColor"
                        d="M238.438 24.729v147.546h24.595v-28.69h22.543c32.785 0 59.42-26.636 59.42-59.42 0-32.786-26.635-59.423-59.42-59.423v-.013zm331.99 0v147.546h24.595v-49.177c0-15.846 12.846-28.692 28.692-28.692 15.845 0 28.69 12.846 28.69 28.692v49.177H677V118.31c0-26.784-21.727-48.498-48.496-48.498h-.016c-12.978 0-24.73 5.055-33.465 13.392V24.73Zm-200.82.013c-7.544 0-13.659 6.115-13.659 13.658 0 7.543 6.115 13.659 13.658 13.659 7.543 0 13.659-6.116 13.659-13.659 0-7.543-6.116-13.658-13.659-13.658zm28.69 0v114.764c0 20.354 16.526 36.879 36.88 36.879 9.282 0 17.766-3.416 24.314-9.15l-11.885-20.221c-2.187 2.868-5.734 4.64-9.695 4.64v-.013h-2.734c-.813 0-1.64-.133-2.453-.266-5.602-1.094-9.83-6.15-9.83-12.018V98.516h24.595V73.92h-24.595V24.742ZM263.034 49.31h22.543c19.26 0 34.838 15.58 34.838 34.84 0 19.26-15.578 34.84-34.838 34.84h-22.543Zm250.012 20.517c-29.37 0-53.285 23.902-53.285 53.287 0 29.385 23.9 53.285 53.285 53.285 18.847 0 35.387-9.828 44.951-24.595l-21.447-12.297c-5.188 7.376-13.792 12.297-23.504 12.297-15.845 0-28.69-12.845-28.69-28.69 0-15.846 12.845-28.691 28.69-28.691v-.016c9.978 0 18.714 5.057 23.77 12.713l21.181-12.564c-9.43-14.885-25.957-24.729-44.951-24.729ZM357.309 73.92v98.37h24.597V73.92Z"
                      />
                    </g>
                  </svg>
                </div>


  {/* Text */}
                <div className="text-left  sm:text-center flex-grow text-gray-700 text-[16px]">
                  © Copyright 2025 Pitch Software GmbH. All rights reserved.
                </div>

                {/* Social Icons */}
                <div className="flex text-left md:justify-end space-x-4 text-gray-800">
                  <a href="#"> 
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
                  </svg>

                  </a>

                  <a href="#">
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                  </svg>

                  </a>
                  <a href="#">  
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                  </svg>
                  </a>

                  <a href="#">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
                    </svg>
                  </a>

                  <a href="#">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                    </svg>
                  </a>
                </div>
            </div>
      </div>
</div>


    </div>
  )
}

export default Footer
