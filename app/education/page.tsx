'use client';

import { useState } from 'react';
import AppLayout from '@/components/AppLayout';

export default function EducationPage() {
  const [activeCategory, setActiveCategory] = useState('All Topics');

  const categories = [
    { name: 'All Topics', icon: 'auto_awesome' },
    { name: 'First Period', icon: 'favorite' },
    { name: 'Nutrition', icon: 'restaurant' },
    { name: 'Mental Health', icon: 'psychology' },
    { name: 'Self-Care', icon: 'self_care' }
  ];

  return (
    <AppLayout>
      <div className="max-w-[1200px] mx-auto">
        {/* Hero Search & Welcome */}
        <div className="mb-10 text-center max-w-2xl mx-auto pt-4">
          <h2 className="text-3xl font-bold mb-4 text-[#181113]">Learn with LUNIVA</h2>
          <p className="text-[#88636f] mb-8 leading-relaxed">
            Everything you need to know about your cycle, nutrition, and mental well-being in one friendly place.
          </p>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-[#eb477e]">search</span>
            </div>
            <input
              className="w-full bg-white border-none rounded-xl py-4 pl-12 pr-4 shadow-xl shadow-[#eb477e]/5 focus:ring-2 focus:ring-[#eb477e] text-[#181113] placeholder:text-[#88636f]/60 outline-none"
              placeholder="Search topics like 'cramps', 'mood', or 'iron'..."
              type="text"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-colors shadow-sm ${activeCategory === category.name
                  ? 'bg-[#eb477e] text-white shadow-[#eb477e]/20'
                  : 'bg-white text-[#88636f] hover:bg-[#eb477e]/5'
                }`}
            >
              <span className="material-symbols-outlined text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#181113]">Featured Topic of the Month</h3>
            <a className="text-[#eb477e] text-sm font-semibold flex items-center gap-1 hover:underline" href="#">
              See all articles <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row h-auto md:h-[350px] border border-[#eb477e]/5 group">
            <div className="md:w-1/2 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Young woman doing yoga in morning light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoF48QzykvG7M1064IZuSofWDEo6MjY6OdddkaJADpRluuPz11e7NlDz91v-vMW730puFCgI8TVeHv2u3SMU_zyx-Z4A2_ddopfDtRVOiJLZAbybcX-kU_V5LZAj-aC4RlQt-FB1RFMsfNlXBBnBekD9pQOVXgny-CVM90ia2tapxjspcYt3bnKs59MSaiqmoQLzXeDOMqa62UNZaigYs7-oVJ7lvePnQ3JIrNRoDCY5gUvnno_0U18g0bi9JC1AkZWz6DnzhaHis"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[#eb477e] text-xs font-bold uppercase tracking-widest shadow-sm">
                New Release
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[#eb477e] mb-3">
                <span className="material-symbols-outlined text-lg">favorite</span>
                <span className="text-sm font-medium">First Period</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-[#181113] group-hover:text-[#eb477e] transition-colors leading-tight">Your New Journey: Understanding Your First Period</h4>
              <p className="text-[#88636f] mb-6 leading-relaxed">
                A gentle, supportive guide to everything you need to know as you start this new chapter of your life. No medical jargon, just sisters-style advice.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4 text-xs text-[#88636f]">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 8 min read</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">article</span> Article</span>
                </div>
                <button className="bg-[#eb477e] hover:bg-[#eb477e]/90 text-white px-6 py-2.5 rounded-lg font-bold transition-all transform hover:scale-[1.02]">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Education Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#181113]">Latest Guides & Videos</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#eb477e]/5 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Nutritious vegetables and fruits"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZG6k2WMFfzt5Eufl6EqVTyDWbRb-nWKGRdDmZYdlD1EZ8tO2HsAWltBh_v4_woChbrikXg2K4bau3pp9_38c3NXVvOWkPBmq8uEO7EphB533CSnc5yhSIym0G0XoWo2i6Uvhw2y-CoM1A2C9vyO5sI7Rw1_mKOquOilg_Wg70As3NBCj8vQyu5QJd4UCc_XrJ421ThgUQmN-pgVEu_OV8Fr5TRATZb1jjRyx9OoJTo_tz7DG0xHQcG4GR-qqEpViQQeESVD5PYUw"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">play_circle</span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-md backdrop-blur">
                  4:20
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#eb477e] text-xs font-bold uppercase tracking-wider">Nutrition</span>
                  <button className="material-symbols-outlined text-zinc-400 hover:text-[#eb477e] transition-colors text-xl">favorite</button>
                </div>
                <h5 className="text-lg font-bold mb-3 leading-snug text-[#181113] group-hover:text-[#eb477e] transition-colors">Fueling Your Body: What to Eat When</h5>
                <p className="text-sm text-[#88636f] mb-4 line-clamp-2">How healthy fats and leafy greens can help you feel like your best self during your cycle.</p>
                <div className="mt-auto flex items-center gap-3 text-xs text-[#88636f]">
                  <span className="material-symbols-outlined text-sm">movie</span>
                  <span>Video Guide</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#eb477e]/5 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Journal and pen on cozy blanket"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPNamO4VGU2Rkowzt3xTagr9C1yztS9_FRy5xjStgQcBLFfKuxrPrQysyMGA_LFhfp1jd-X67tyQBxecqATK965uDZeF80rWKc7IC88-P1KXosAmLLfV3NsXuWkHfi6b0Lv-xrkKmbaXDWzNPJnZ50iBNqhtncvc51NLn-3tYRefGoxrTAzIbXQL5vGTlfSVEAmwzXNi-1ody6ew4wE_ObjdCZTe7aPEpCrJ-6vkEGZEMoHHIW_1L2lzMlSEpT7MRuRl1899Mo4VA"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#eb477e] text-xs font-bold uppercase tracking-wider">Mental Health</span>
                  <button className="material-symbols-outlined text-[#88636f] hover:text-[#eb477e] transition-colors text-xl">favorite</button>
                </div>
                <h5 className="text-lg font-bold mb-3 leading-snug text-[#181113] group-hover:text-[#eb477e] transition-colors">Embracing Your Moods & Cycles</h5>
                <p className="text-sm text-[#88636f] mb-4 line-clamp-2">Learning to listen to what your emotions are telling you during different phases.</p>
                <div className="mt-auto flex items-center gap-3 text-xs text-[#88636f]">
                  <span className="material-symbols-outlined text-sm">article</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#eb477e]/5 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Illustration of woman hugging heart"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByFcWiXNnrcvAiqompbEBDMX4OHVD8cL6KfkIZ73x3_VsPks1tqnmL69fytIdIzhbVLc5M70RceiQq0GUfEK0sa4Zci-1r65fleBC_iLximybF_TGPUWpgfrOwkm2RJWfmXgQGgDzYXNGMtinWuyTTpEOEOaY9N27BzjqT3fkRkE1BdGo7W4hja_P7b3Ux77cStdXozptJUVT09yNHwr-7rVhppymSjwr29EkuwzYOu8V71XWbXJzvsI2FoBJ8N-T9KxGn-GQRjiM"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#eb477e] text-xs font-bold uppercase tracking-wider">Self-Care</span>
                  <button className="material-symbols-outlined text-[#eb477e] transition-colors text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</button>
                </div>
                <h5 className="text-lg font-bold mb-3 leading-snug text-[#181113] group-hover:text-[#eb477e] transition-colors">Comfort First: Cozy Rituals for You</h5>
                <p className="text-sm text-[#88636f] mb-4 line-clamp-2">From warm baths to the perfect tea blends, here are our favorite comfort hacks.</p>
                <div className="mt-auto flex items-center gap-3 text-xs text-[#88636f]">
                  <span className="material-symbols-outlined text-sm">article</span>
                  <span>4 min read</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#eb477e]/5 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Iron-rich berry smoothie"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5u0h3O0vGDQbOtaaB4jPnjYv-lO6LnbbUkKSldeh4_TdIeLNBu9xeKqXYwRiOkA9k1WPb4FNj71dJlygZraA-QSrk8h4-gKrc80_ergk605aegm6-lTKJ1kEASL5lcH9WDkU5NTDPrvhcssLK5aEe8hZO2mGmSDUw7j00Y9qrkBSzhfCKGg3F2zfYjDJPl9wJChHYDxx4-UTUwzO8CFkhONLFkQ2OzxVHhzPGajBxbspMPXWm5NENKApXm9anGly5v44tCttsRkM"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#eb477e] text-xs font-bold uppercase tracking-wider">Nutrition</span>
                  <button className="material-symbols-outlined text-[#88636f] hover:text-[#eb477e] transition-colors text-xl">favorite</button>
                </div>
                <h5 className="text-lg font-bold mb-3 leading-snug text-[#181113] group-hover:text-[#eb477e] transition-colors">Iron-Rich Recipes You'll Actually Love</h5>
                <p className="text-sm text-[#88636f] mb-4 line-clamp-2">Boosting your energy doesn't have to be boring. Discover these tasty snacks.</p>
                <div className="mt-auto flex items-center gap-3 text-xs text-[#88636f]">
                  <span className="material-symbols-outlined text-sm">article</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#eb477e]/5 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Two girls laughing"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNc-C1HG9txjBFRHxexLzscGQWOT_OJHtlH8SvH0hm6FMS767WROmGP_GMRd6qRL1T24YMXKQnDxYjgf-rx5VEpmMSDnbVMMsIWsWkjU3hSH4l8vC9OIsc3YQjECNBRuRrU2kjpFVJctL7mRMhdpafnvknUF-2CELZRwlMLgH2XWBuS_OOXDwvAzQ5W65huk5H0KwTAk5eyoVf_k39HOBzX0acDwzw4Lw4b3UmbP1Al_tvV1GufmgEDY9fJp94bS8oufZdzbZ8jk4"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">play_circle</span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-md backdrop-blur">
                  12:45
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#eb477e] text-xs font-bold uppercase tracking-wider">Community Q&A</span>
                  <button className="material-symbols-outlined text-[#88636f] hover:text-[#eb477e] transition-colors text-xl">favorite</button>
                </div>
                <h5 className="text-lg font-bold mb-3 leading-snug text-[#181113] group-hover:text-[#eb477e] transition-colors">Questions You're Too Shy to Ask</h5>
                <p className="text-sm text-[#88636f] mb-4 line-clamp-2">Our health experts answer common community questions with kindness and clarity.</p>
                <div className="mt-auto flex items-center gap-3 text-xs text-[#88636f]">
                  <span className="material-symbols-outlined text-sm">movie</span>
                  <span>Video Series</span>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#eb477e]/5 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Woman meditating in garden"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpQYq3zTVVSbFbNvNYX8FH0nsOwFXlWOM4CokWKHWulaXhVM4dM7ePgBez_VsGo7V2HkfzmFjC7ysrAzTQseps5a0uA7ZsvgU3VhSPkr1B-e5XBvp2QzkmV077L4-VlXY7kWLLGpEzahotwL_ER9sb4oJiFGo5R-0x7U0YX3JwKXJ_OJPAQ67Rk1kKVwBMndx3QUdcUNCGM3QTA-DpyN7oHrxRQuWURuA0flqHRyU9F8982NZ9ENLyJ59dm0uxy7waBrgG4MOkedM"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#eb477e] text-xs font-bold uppercase tracking-wider">Self-Care</span>
                  <button className="material-symbols-outlined text-[#88636f] hover:text-[#eb477e] transition-colors text-xl">favorite</button>
                </div>
                <h5 className="text-lg font-bold mb-3 leading-snug text-[#181113] group-hover:text-[#eb477e] transition-colors">Quiet Moments: 5 Min Meditations</h5>
                <p className="text-sm text-[#88636f] mb-4 line-clamp-2">Quick ways to center yourself when your hormones are feeling a little loud.</p>
                <div className="mt-auto flex items-center gap-3 text-xs text-[#88636f]">
                  <span className="material-symbols-outlined text-sm">article</span>
                  <span>3 min read</span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-2 bg-white border-2 border-[#eb477e]/20 text-[#eb477e] px-8 py-3 rounded-xl font-bold hover:bg-[#eb477e]/5 transition-all">
              Load More Content
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
