import React from 'react';

const About = () => {
  return (
    <section className="w-full min-h-screen py-16 c-space relative" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <h2 className="head-text text-center"></h2>
        
        {/* Main content container with responsive layout */}
        <div className="mt-12 flex lg:flex-row flex-col-reverse gap-10 items-center justify-center">
          {/* Video container - left side on desktop */}
          <div className="lg:w-1/2 w-full relative lg:pt-90 lg:pl-60">
            <div className="aspect-[9/16] rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover opacity-20"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="assets/about.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          {/* Text content - right side on desktop, positioned lower on mobile */}
          <div className="lg:w-1/2 w-full">
            <div className="lg:relative absolute w-full z-90 flex lg:block justify-center" style={{ background: 'transparent' }}>
              {/* Text container with transparency - positioned lower on mobile with mt-32 */}
              <div className="p-6 lg:p-1 bg-transparent backdrop-blur-none lg:max-w-none max-w-[90%] mx-auto mt-32 lg:mt-0">
                <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-6 lg:mb-10 bg-transparent text-center lg:text-left">
                  WHAT WE DO!
                </h3>
                <p className="text-xl lg:text-xl text-white mb-6 lg:mb-8 bg-transparent leading-relaxed text-center lg:text-left">
                  Our comprehensive tool room and machining shop is equipped with advanced CNC wire cut, spark erosion, surface grinding, center lathe, and DRO machines, supported by complete technical and design facilities. We are a dedicated team of over 4 employees, committed to achieving excellence for both individual growth and company success.
                </p>
                <p className="text-xl lg:text-xl text-white mb-6 lg:mb-8 bg-transparent leading-relaxed text-center lg:text-left">
                  Clients consistently prefer us for a wide range of precision press tools, including blanking, bending, progressive, trimming, compound, forming, piercing, shaving, and notching tools, as well as relation gauges, jigs/fixtures, pipe bending fixtures, SPMs, and welding fixtures. We deliver high-quality solutions for all your tooling needs.
                </p>
                <div className="flex flex-wrap gap-4 bg-transparent justify-center lg:justify-start">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;