import { useState } from 'react'
import { FiShare2, FiX } from 'react-icons/fi'
import { FaWhatsapp, FaTelegram, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import CONFIG from '../lib/config'

export default function SocialMediaFloatButton() {
  const [isOpen, setIsOpen] = useState(false)

  const socialMedias = [
    {
      name: 'WhatsApp Channel',
      icon: <FaWhatsapp className="w-5 h-5" />,
      color: 'bg-green-500 hover:bg-green-600',
      url: CONFIG.floatButtonSocialLinks.whatsappChannel,
    },
    {
      name: 'Telegram Channel',
      icon: <FaTelegram className="w-5 h-5" />,
      color: 'bg-blue-500 hover:bg-blue-600',
      url: CONFIG.floatButtonSocialLinks.telegram,
    },
    {
      name: 'YouTube Channel',
      icon: <FaYoutube className="w-5 h-5" />,
      color: 'bg-red-500 hover:bg-red-600',
      url: CONFIG.floatButtonSocialLinks.youtube,
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-5 h-5" />,
      color: 'bg-pink-500 hover:bg-pink-600',
      url: CONFIG.floatButtonSocialLinks.instagram,
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="w-5 h-5" />,
      color: 'bg-blue-600 hover:bg-blue-700',
      url: CONFIG.floatButtonSocialLinks.facebook,
    },
    {
      name: 'X (Twitter)',
      icon: <FaTwitter className="w-5 h-5" />,
      color: 'bg-sky-500 hover:bg-sky-600',
      url: CONFIG.floatButtonSocialLinks.twitter,
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Social Media Buttons - Smooth staggered animation */}
      <div className={`mb-4 space-y-3 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {socialMedias.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center w-12 h-12 ${social.color} 
              text-white rounded-full shadow-lg 
              transform transition-all duration-500 ease-out
              hover:scale-110 hover:shadow-xl group relative
              ${isOpen 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-10 opacity-0 scale-90'
              }
            `}
            style={{
              transitionDelay: isOpen ? `${index * 75}ms` : '0ms'
            }}
            aria-label={social.name}
          >
            {social.icon}
            {/* Tooltip for each social media button */}
            <div className="absolute right-14 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                  {social.name}
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center justify-center w-14 h-14 
          bg-gradient-to-r from-purple-600 to-pink-600 
          text-white rounded-full shadow-lg 
          hover:shadow-xl transform transition-all duration-300 
          hover:scale-105 focus:outline-none focus:ring-2 
          focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white
          group relative
        "
        aria-label={isOpen ? 'Close social media' : 'Open social media'}
      >
        {/* Animated icon rotation */}
        <div className={`transform transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? (
            <FiX className="w-6 h-6 transition-opacity duration-300" />
          ) : (
            <FiShare2 className="w-6 h-6 transition-opacity duration-300" />
          )}
        </div>
        
        {/* Ripple effect on click */}
        <span className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-30 transition-opacity duration-300"></span>
      </button>

      {/* Tooltip - Shows on hover when closed */}
      {!isOpen && (
        <div className="absolute right-16 bottom-1/2 transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="relative">
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs py-1 px-3 rounded-lg whitespace-nowrap">
              Follow Us
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
