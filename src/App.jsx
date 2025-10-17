import { useState } from "react";

function App() {
	const [input, setInput] = useState("");
	const [todo, setTodo] = useState([]);

	const handlesave = () => {
		if(input.trim() === "") return;
		setTodo([...todo, input]);
		setInput("");
    
	};

	const handleDelete = (indexToDelete) =>{
		const updatedTodo = todo.filter((_, index) => index !== indexToDelete)
		setTodo(updatedTodo);
	}
  console.log({todo});

	return (
		<div className=" h-screen w-screen flex flex-col justify-center items-center gap-10 text-black ">
			<h1 className="text-6xl font-semibold">Todo</h1>
			<div className="bg-white shadow-2xl p-5 rounded-md flex gap-3 justify-between ">
				<input
					type="text"
					value={input}
					placeholder="Add a new task"
					className="rounded-md text-black outline-none p-3 w-[40vw]"
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					className="px-6 py-1 bg-blue-600 rounded-md hover:bg-blue-700 text-white font-medium"
					onClick={handlesave}>
					Add
				</button>
			</div>

			<div className="mt-4 w-[40vw] text-center">
				{todo.length > 0 ?(
					<ul className="bg-white shadow-md rounded-md p-4">
						{todo.map((task, index) => (
							<li
							key={index}
							className="p-2 border-b border-gray-300 last:border-none flex gap-5 justify-between items-center overflow-hidden">
								{task}
								<div className="flex gap-2">
									<button className="px-4 py-1 bg-red-600 rounded-md hover:bg-red-700 text-white font-medium"
									 onClick={() => handleDelete(index)}>
										remove
									</button>
								</div>
							</li>
						))}
					</ul>
				) : (
					<p className="text-gray-500 italic">No tasks added yet.</p>
				)}
				
			</div>
		</div>
	);
}

export default App;
