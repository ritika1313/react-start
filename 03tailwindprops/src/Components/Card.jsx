import React from 'react'

function Card({username, btnText}) {
    console.log(props.username);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="w-80 rounded-md shadow-md bg-black text-gray-100 overflow-hidden">
        <img
          src="https://picsum.photos/301"
          alt="Card"
          className="w-full h-72 object-cover"
        />

        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-3">Lorem</h2>

          <h1>{username}</h1>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio tempora ipsum soluta amet corporis accusantium aliquid
            consectetur eaque!
          </p>

          <button className="w-full bg-gray-800 rounded-md py-3 font-semibold hover:bg-gray-700">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
