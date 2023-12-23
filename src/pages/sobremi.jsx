import React from "react";


const SobreMi = () => {

  const handleButtonClick = () => {
    window.location.href = 'mailto:juanpabloruz25@gmail.com';
  };


  const handleDownload = () => {

    const curriculumUrl = "https://1drv.ms/b/s!Aq0jQFXCVROh4DCAY4Sd2Vdb0gfW?e=x4FSR8";

    

    
    const downloadLink = document.createElement("a");
    downloadLink.href = curriculumUrl;
    downloadLink.click(curriculumUrl);
    
  };
  return (
    <>
      
      <main className="profile-page">
        <section className="relative block h-96">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")',
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            />
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
        <section className="relative py-8 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="https://i.imgur.com/np0Nm4m.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20  max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4   lg:order-3 lg:text-right lg:self-center   ">
                    <div className="py-6 px-3 text-center  lg:mt-0 md:mt-32 sm:mt-32 mt-36 xl:mt-0  ">
                    <button
        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150 sm:items-center sm:justify-center  hover:scale-105  cursor-pointer  "
        type="button"
        onClick={handleDownload}
      >
        Descargar CV
      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="lg:mr-4 p-3 text-center">
                      <a href="https://www.linkedin.com/in/juanpabloruz/">
                        <img src="https://i.imgur.com/xEdJvjk.png" className="w-14 h-12 object-cover duration-150 hover:scale-105 hover:shadow-md cursor-pointer shadow" />
                        </a>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                      <a href="https://github.com/gameloker">
                        <img src="https://i.imgur.com/4MUgVj2.png" className="w-14 h-12 object-cover duration-150 hover:scale-105  hover:shadow-md cursor-pointer shadow" />
                        </a>
                      </div>
                      
                      <div className="lg:mr-4 p-3 text-center">
                      <a onClick={handleButtonClick}>
                        <img src="https://i.imgur.com/JUFxsUa.png" className="w-12 h-12 object-cover duration-150 hover:scale-105 hover:shadow-md cursor-pointer shadow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    Juan Pablo Ruz
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                    Santiago, Chile
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                    Graduado y titulado en Ingeniería Informática
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                    Universidad Tecnológica de Chile INACAP
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Desarrollador Full Stack en constante aprendizaje con experiencia en tecnologías como Next.js, Node.js, JavaScript, Tailwind CSS, Express, PostgreSQL, Git y GitHub. Mi enfoque se centra en proyectos personales donde aplico activamente estos conocimientos para crear soluciones web efectivas. Estoy emocionado por seguir ampliando mi experiencia y contribuir a proyectos desafiantes en un entorno profesional
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SobreMi;
