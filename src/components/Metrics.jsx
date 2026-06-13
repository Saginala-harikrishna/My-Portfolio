export default function Metrics() {
  const metrics = [
    {
      value: "11+",
      label: "Projects",
    },
    {
      value: "3",
      label: "Internships",
    },
    {
      value: "2",
      label: "Leadership Roles",
    },
    {
      value: "1",
      label: "YouTube Channel",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {metrics.map((item, index) => (
            <div
              key={index}
              className="text-center border rounded-3xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <h2 className="text-4xl font-bold">
                {item.value}
              </h2>

              <p className="mt-2 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}