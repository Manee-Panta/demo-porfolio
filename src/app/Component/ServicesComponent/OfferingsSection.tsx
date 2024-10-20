/* eslint-disable @next/next/no-img-element */
export default function OfferingsSection() {
  const offerings = [
    {
      title: "Logo Design",
      description:
        "Transforming Concepts Into Iconic Symbols That Define Your Brand's Identity and Captivate Your Audience",
      icon: "logo.png", // Replace with actual image path
    },
    {
      title: "Brand Identity",
      description:
        "Crafting Cohesive Visual Identities That Reflect Your Brand's Essence and Resonate With Your Target Audience",
      icon: "identify.png", // Replace with actual image path
    },
    {
      title: "Illustration",
      description:
        "Transforming Ideas Into Vibrant Visual Narratives That Captivate and Inspire Your Audience",
      icon: "illustration.png", // Replace with actual image path
    },
    {
      title: "Mobile App",
      description:
        "Creating Seamless, Intuitive Mobile Experiences That Engage Users and Elevate Your Brand's Presence",
      icon: "user-interface.png", // Replace with actual image path
    },
    {
      title: "Landing Page",
      description:
        "Crafting Compelling First Impressions to Convert Visitors Into Customers and Achieve Your Business Goals",
      icon: "landing-page.png", // Replace with actual image path
    },
    {
      title: "Web Design",
      description:
        "Crafting User-Centric Websites That Tell Your Story and Connect With Your Audience Effectively",
      icon: "web-design.png", // Replace with actual image path
    },
    {
      title: "Social Design",
      description:
        "Compelling Visual Content That Engages Audiences and Sparks Meaningful Connections Across Social Platforms",
      icon: "blog.png", // Replace with actual image path
    },
    {
      title: "Print Design",
      description:
        "Transforming Concepts Into Eye-Catching Collateral That Leaves a Lasting Impression On Your Audience",
      icon: "inkjet.png", // Replace with actual image path
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-black font-bold mb-8">
          My Offerings for You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={offering.icon}
                alt={offering.title}
                className="mx-auto w-16 h-16 mb-4"
              />
              <h3 className="text-xl text-black font-semibold mb-2">
                {offering.title}
              </h3>
              <p className="text-gray-600 text-sm">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
