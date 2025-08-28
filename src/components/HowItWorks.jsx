// src/components/HowItWorks.jsx
export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Register",
      desc: "Sign up with your name and email address to start trading",
      color: "text-blue-500 border-blue-500",
    },
    {
      number: "2",
      title: "Fund",
      desc: "Start trading from $25",
      color: "text-teal-500 border-teal-500",
    },
    {
      number: "3",
      title: "Trade",
      desc: "Log in and start trading more than 500 instruments!",
      color: "text-green-500 border-green-500",
    },
  ];

  return (
    <section className="relative bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center md:text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How it works
        </h2>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex md:flex-col items-center md:items-center text-left md:text-center"
            >
              {/* Number circle */}
              <div
                className={`flex items-center justify-center w-12 h-12 md:w-20 md:h-20 border-2 rounded-full text-xl md:text-3xl font-bold ${step.color}`}
              >
                {step.number}
              </div>

              {/* Text */}
              <div className="ml-4 md:ml-0 md:mt-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="mt-12 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-md shadow transition">
          SIGN UP FOR FREE
        </button>
      </div>
    </section>
  );
}
