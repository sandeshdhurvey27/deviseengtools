import React from 'react';

const About = () => {
  return (
    <section className="w-full min-h-screen py-16 c-space relative" id="about">
      <div className="max-w-7xl mx-center">
        {/* Section header */}
        <h2 className="head-text text-center"></h2>
        
        {/* Main content container with responsive layout */}
        <div className="mt-12 flex lg:flex-row flex-col-reverse gap-10 item-center justify-center">
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

          {/* Text content - right side on desktop, overlays video on mobile */}
          <div className="lg:w-1/2 w-full">
            <div className="lg:relative absolute w-full z-90" style={{ background: 'transparent' }}>
              {/* Text container with forced transparency */}
              <div className="p-20 lg:p-1 bg-transparent backdrop-blur-none">
                <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-10 bg-transparent">
                  WHAT WE DO!
                </h3>
                <p className="text-xl lg:text-1xl text-white mb-8 bg-transparent">
                  Our comprehensive tool room and machining shop is equipped with advanced CNC wire cut, spark erosion, surface grinding, center lathe, and DRO machines, supported by complete technical and design facilities. We are a dedicated team of over 4 employees, committed to achieving excellence for both individual growth and company success. Clients consistently prefer us for a wide range of precision press tools, including blanking, bending, progressive, trimming, compound, forming, piercing, shaving, and notching tools, as well as relation gauges, jigs/fixtures, pipe bending fixtures, SPMs, and welding fixtures. We deliver high-quality solutions for all your tooling needs.
                </p>
                <p className="text-xl lg:text-1xl text-white mb-8 bg-transparent">
                  "Clients consistently prefer us for a wide range of precision press tools, including blanking, bending, progressive, trimming, compound, forming, piercing, shaving, and notching tools, as well as relation gauges, jigs/fixtures, pipe bending fixtures, SPMs, and welding fixtures. We deliver high-quality solutions for all your tooling needs."
                </p>
                <div className="flex flex-wrap gap-4 bg-transparent">
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