import React from 'react'

export const Footer = () => {
  return (
    <footer class="bg-white text-black py-12 md:py-16">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div class="flex items-center">
        
          </div>
          <nav class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div class="space-y-2">
              <h5 class=" font-semibold">Product</h5>
              <ul class="space-y-1">
                <li>
                  <a class="hover:text-gray-300" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-300" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-300" href="#">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div class="space-y-2">
              <h5 class=" font-semibold">Company</h5>
              <ul class="space-y-1">
                <li>
                  <a class="hover:text-gray-300" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-300" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-300" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div class="space-y-2">
              <h5 class=" font-semibold">Support</h5>
              <ul class="space-y-1">
                <li>
                  <a class="hover:text-gray-300" href="#">
                    Help Center
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-300" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-300" href="#">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="flex items-center justify-end space-x-4">
            <a class="text-black " href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span class="sr-only">Twitter</span>
            </a>
            <a class="text-black " href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span class="sr-only">Facebook</span>
            </a>
            <a class="text-black " href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span class="sr-only">Instagram</span>
            </a>
            <a class="text-black " href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span class="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        <div class="mt-8 md:mt-12 text-center text-sm">
          <p>© 2024 Acme Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
