import React, { useState } from 'react';

const machines = [
  {
    image: '/assets/drillmachine.png',
    name: 'Drill Machine',
    dimensions: 'BED : 300MM',
    description: 'This drill machine has a center height of 500mm, a distance between centers of 500mm, and a bed width of 300mm. It features a bearing-supported head and a drill capacity of 32mm.'
  },
  {
    image: '/assets/lathem1.png',
    name: 'Lathe Machine ',
    dimensions: 'SWING BED : 375MM',
    description: 'This lathe machine has a height of center of 250mm and a distance between centers of 1800mm. It offers a swing over bed of 375mm, a headstock with bearing construction, and a spindle bore of 105mm.'
  },
  {
    image: '/assets/lathem2.png',
    name: 'Lathe Machine ',
    dimensions: 'SWING BED : 275MM',
    description: 'This lathe machine has a center height of 200mm, a distance between centers of 1000mm, and a swing over bed of 275mm. It features a bearing-supported headstock and a spindle bore of 45mm.'
  },
  {
    image: '/assets/surfacegrinder.png',
    name: 'Surface Grinder BMT',
    dimensions: '200x19x31.75 mm',
    description: 'This machine features an automatic grade and is the AH-500 model from the BMT brand. It offers an auto cross feed increment of 0.3 to 5.0 mm, a table speed of 5 to 25 m/min, and a vertical down feed of 0.01mm via the hand wheel. The grinding wheel dimensions are 200x19x31.75 mm, operating at a wheel speed of 2800 RPM, and the tables working surface measures 500 x 225 mm.'
  },
  {
    image: '/assets/dro.jpg',
    name: 'M1TR DRO MICROMILL',
    dimensions: ' 254x1270 mm',
    description: 'Automation grade : Manual, motor Power : 3HP,  cross travel : 406mm, longitudinal travel : 900 mm, model no : 4S'

  },
  {
    image: '/assets/wirecut.png',
    name: 'CNC WIRE CUT MACHINE BERLIN',
    dimensions: 'Table Travel X 550 Table Travel Y 450 Table Travel Z 450',
    description: "CNC WIRE CUT MACHINE Lowest Running Cost Closed loop X,Y with linear scales With servo control Molywire Max.cutting speed 60mm/min on (Steel/WPS)"
  }
    ];

  const ScrollingRow = ({ machines, reverse = false, onSelect }) => (
    <div 
      className="flex gap-8 animate-perspective relative"
      style={{
        animationDuration: '40s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationDirection: reverse ? 'reverse' : 'normal'
      }}
    >
      {[...machines, ...machines, ...machines].map((machine, index) => (
        <div
          key={index}
          className="relative flex-none w-80 h-56 perspective-element cursor-pointer"
          onClick={() => onSelect(machine)}
        >
          <img
            src={machine.image}
            alt={machine.name}
            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
  
  const MachineGrid = () => {
    const [selectedMachine, setSelectedMachine] = useState(null);
  
    // Split machines into three pairs
    const row1 = machines.slice(0, 2);
    const row2 = machines.slice(2, 4);
    const row3 = machines.slice(4, 6);
  
    return (
      <div className="relative min-h-screen bg-black-200 py-16 overflow-x-hidden" id="machine">
        {/* Added heading */}
        <h2 className="text-center text-6xl font-bold text-white mb-16">MACHINE</h2>
  
        <style jsx>{`
          @keyframes perspective {
            0% { transform: translateX(0) translateZ(0); }
            50% { transform: translateX(-16.66%) translateZ(100px); }
            100% { transform: translateX(-33.33%) translateZ(0); }
          }
          .animate-perspective {
            animation: perspective 40s linear infinite;
          }
          .perspective-element {
            transform-style: preserve-3d;
            transition: transform 0.5s;
          }
          .perspective-element:hover {
            transform: translateZ(50px);
          }
        `}</style>
  
        <div className="relative w-full">
          {/* Scrolling Rows */}
          <div className="relative space-y-16 w-full overflow-hidden">
            <ScrollingRow machines={row1} onSelect={setSelectedMachine} />
            <ScrollingRow machines={row2} reverse={true} onSelect={setSelectedMachine} />
            <ScrollingRow machines={row3} onSelect={setSelectedMachine} />
          </div>
  
          {/* Selected Machine Details Modal */}
          {selectedMachine && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
              <div className="bg-black-300 rounded-lg p-8 max-w-5xl w-full">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-96">
                    <img
                      src={selectedMachine.image}
                      alt={selectedMachine.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white mb-4">{selectedMachine.name}</h2>
                    <p className="text-gray-300 mb-2">Dimensions: {selectedMachine.dimensions}</p>
                    <p className="text-gray-400">{selectedMachine.description}</p>
                    <button 
                      onClick={() => setSelectedMachine(null)}
                      className="mt-6 bg-black-500 text-white px-6 py-2 rounded-lg hover:bg-black-600 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default MachineGrid;