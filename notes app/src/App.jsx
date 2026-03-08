import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !details.trim()) return; // no empty notes
    setTask((prev) => [...prev, { title, details }]);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1); // remove the note at the specified index
    setTask(copyTask);
  };

  return (
    <div className="h-screen from-gray-900 to-black text-white p-4">
      <div className="max-w-7xl flex flex-col lg:flex-row gap-8">
        {/* Form Section */}
        <div className="flex-1">
          <form onSubmit={submitHandler} className="bg-gray-800 p-6 rounded">
            <h1 className="text-3xl mb-6 font-bold text-center">Add Notes</h1>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter Notes Heading"
                className="w-full px-4 py-3 border-2 border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <textarea
                placeholder="Enter Details"
                className="w-full px-4 py-3 border-2 border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium"
              >
                Add Note
              </button>
            </div>
          </form>
        </div>

        {/* Notes Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6 text-center">Recent Notes</h1>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto">
            {task.length === 0 ? (
              <p className="text-gray-400 text-center col-span-full">
                No notes yet. Add your first note!
              </p>
            ) : (
              task.map((elem, index) => (
                <div
                  key={index}
                  className="bg-aqua text-black p-4 rounded relative flex flex-col justify-between"
                >
                  <div className="flex-1">
                    <h3 className="font-bold">{elem.title}</h3>
                    <p className="text-sm text-gray-700">{elem.details}</p>
                  </div>
                  <button
                    onClick={() => deleteNote(index)}
                    className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded font-bold text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
