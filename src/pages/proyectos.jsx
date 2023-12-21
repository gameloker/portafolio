import React from "react";
const Proyectos = () => {


  return (
    <div className="container flex flex-wrap justify-around">
      <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md mt-5 ">
        <img
          className=" rounded-lg object-cover object-center"
          src="https://i.imgur.com/ngnBBbn.png"
          alt="product"
        />
        <div>
          <div className="mt-4 flex items-center justify-between px-4">
            <p className="font-bold text-gray-500">STRIKE MENU</p>
           
          </div>
          <div className="my-1 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">Strike, un menú digital vanguardista creado con Next.js, Tailwind, Prisma, PostgreSQL y Node.js. Descubre sabores únicos en la convergencia de la alta cocina y la innovación tecnológica. Experiencia culinaria y digital en cada bocado.</p>
           
          </div>
         
          <div className="my-4 flex items-center justify-center px-4  ">
            <a href="https://strike-menu.vercel.app/" className="bg-blue-500 w-60 text-white px-4 py-2 rounded text-sm font-semibold hover:scale-105 no-underline text-center">Explorar</a>
          </div>
        </div>
      </div>

      
      </div>
  

  );
};

export default Proyectos;