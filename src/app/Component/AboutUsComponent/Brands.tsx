/* eslint-disable react/no-unescaped-entities */
export default function BrandsPartnered() {
  const partners = [
    {
      brand: "teamwork.",
      role: "UI/UX & Branding",
      years: "2020 - Now",
    },
    {
      brand: "teamwork.",
      role: "UI/UX Designer",
      years: "2017 - 2020",
    },
    {
      brand: "teamwork.",
      role: "Logo & Branding",
      years: "2014 - 2017",
    },
    {
      brand: "teamwork.",
      role: "Graphic Designer",
      years: "2013 - 2014",
    },
  ];

  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Brands I've Partnered With
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                {partner.brand}
              </h3>
              <p className="text-lg font-medium text-gray-800">
                {partner.role}
              </p>
              <p className="text-sm text-gray-600">{partner.years}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
