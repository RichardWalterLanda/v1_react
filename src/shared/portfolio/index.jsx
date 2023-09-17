
export default function portfolio() {
  return (
    <div className="w-3/4 h-3/4 flex">
      <div className="h-full w-full space-y-12"> 
        <section className=" tracking-wider ">Curriculum vitae en.</section>
        <section className=" tracking-wider ">Curriculum vitae de.</section>
        <section className=" tracking-wider ">Abschluss</section>
        <section className=" tracking-wider ">Immatrikulation</section>
      </div>
      <div className="h-full space-y-10 text-right w-full">
        <section className="pr-4">
          <a href="/files/Bewerbung_en.pdf" download className="tracking-wider inline-block bg-violet-500 px-2 py-1 rounded-xl hover:bg-violet-950 hover:shadow-lg hover:shadow-indigo-500/50 duration-300">
            download
          </a>
        </section>
        <section className="pr-4">
          <a href="/files/Bewerbung_de.pdf" download className="tracking-wider inline-block bg-violet-500 px-2 py-1 rounded-xl hover:bg-violet-950 hover:shadow-lg hover:shadow-indigo-500/50 duration-300">
            download
          </a>
        </section>
        <section className="pr-4">
          <a href="#" className="tracking-wider inline-block bg-violet-700 px-2 py-1 rounded-xl cursor-not-allowed">
            on request
          </a>
        </section>
        <section className="pr-4">
          <a href="#" className="tracking-wider inline-block bg-violet-700 px-2 py-1 rounded-xl cursor-not-allowed">
            on request
          </a>
        </section>
      </div>
    </div>
  )
}
