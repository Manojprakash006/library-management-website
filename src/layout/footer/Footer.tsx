import React from 'react'
import { FONT, COLORS } from '../../constant/Constant'

const Footer = () => {
  return (
<div className="w-full  text-white px-10 py-12" style={{ fontFamily: FONT.f1,
   background: "linear-gradient(90deg, " + COLORS.footer.primary + " 0%, " + COLORS.footer.secondry + " 50%, " + COLORS.footer.third + " 100%)"}}>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* Column 1 */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <img src="src\assets\footer\Container (2).png" alt="" />
          
        </div>
        <h3 className="font-semibold text-lg">City Central Library</h3>
      </div>

      <p className="text-sm text-gray-300 mb-4">
        Serving the community since 1995 with knowledge, learning,
        and growth opportunities for all.
      </p>

      <div className="flex gap-3">
        <div className="w-9 h-9 bg-white/10 rounded-full"> <img src="src\assets\footer\Link.png" alt="" /></div>
        <div className="w-9 h-9 bg-white/10 rounded-full"> <img src="src\assets\footer\Link (1).png" alt="" /></div>
        <div className="w-9 h-9 bg-white/10 rounded-full"> <img src="src\assets\footer\Link (2).png" alt="" /></div>
        <div className="w-9 h-9 bg-white/10 rounded-full"> <img src="src\assets\footer\Link (3).png" alt="" /></div>
      </div>
    </div>

    {/* Column 2 */}
    <div>
      <h4 className="font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>About Us</li>
        <li>Library Services</li>
        <li>Membership</li>
        <li>Events & Programs</li>
        <li>Digital Resources</li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h4 className="font-semibold mb-4">Contact Us</h4>

      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 bg-white/10 rounded-lg"><img src="src\assets\footer\Container (3).png" alt="" /></div>
        <p className="text-sm text-gray-300">
          Visit Us<br />
          123 Library Street<br />
          City Center, State - 600001
        </p>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 bg-white/10 rounded-lg"> <img src="src\assets\footer\Container (4).png" alt="" /></div>
        <p className="text-sm text-gray-300">
          Call Us<br />
          +91-444-1234-5678
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white/10 rounded-lg"> <img src="src\assets\footer\Container (5).png " alt="" /></div>
        <p className="text-sm text-gray-300">
          Email Us<br />
          info@citycentrallibrary.org
        </p>
      </div>
    </div>

    {/* Column 4 */}
    <div>
      <h4 className="font-semibold mb-4">Opening Hours</h4>

      <div className="bg-white/10 rounded-lg p-3 mb-3">

        <p className="text-sm" >
          <img src="src\assets\footer\Container (6).png" alt="" className="w-8 h-8 inline mr-2" />
          Monday - Friday<br />
          <span className="text-gray-300">9:00 AM - 8:00 PM</span>
        </p>
      </div>

      <div className="bg-white/10 rounded-lg p-3 mb-3">
        <p className="text-sm">
                    <img src="src\assets\footer\Container (6).png" alt="" className="w-8 h-8 inline mr-2" />

          Saturday - Sunday<br />
          <span className="text-gray-300">10:00 AM - 6:00 PM</span>
        </p>
      </div>

      <p className="text-xs text-gray-400">Closed on Public Holidays</p>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="max-w-7xl mx-auto mt-10 border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
    <p>© 2026 City Central Library. All rights reserved.</p>
    <div className="flex gap-4 mt-2 md:mt-0">
      <span>Privacy Policy</span>
      <span>Terms of Service</span>
      <span>Sitemap</span>
    </div>
  </div>

</div>
  )
}

export default Footer