
const Section2 = ({ users }) => {
  return (
    <div className='h-screen w-full from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-8'>
      <h2 className='text-4xl font-bold mb-4'>Customer Segmentation Insights</h2>
      <p className='max-w-2xl text-center text-lg mb-6'>
        To serve your audience better, we group customers into three key segments and tailor solutions accordingly.
      </p>
      <div className='grid gap-6 md:grid-cols-3 w-full max-w-5xl'>
        {users.map((u) => (
          <div key={u.tag} className='bg-white text-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer'>
            <div className='h-24 w-24 rounded-full mb-4' style={{ backgroundColor: u.color }}></div>
            <h3 className='text-2xl font-semibold mb-2'>{u.tag}</h3>
            <p className='text-center text-sm'>{u.description}</p>
          </div>
        ))}
      </div>
      <button className='mt-10 bg-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-700 cursor-pointer transition-colors'>
        Learn More
      </button>
    </div>
  )
}

export default Section2