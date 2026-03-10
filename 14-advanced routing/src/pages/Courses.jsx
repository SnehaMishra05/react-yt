const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn the fundamentals of React.",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Deep dive into JavaScript concepts.",
    },
    {
      id: 3,
      title: "Web Development",
      description: "Full-stack web development course.",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{course.title}</h2>
            <p className="mb-4">{course.description}</p>
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
