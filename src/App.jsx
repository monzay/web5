import React, { useState } from "react";
import img1 from "./assets/img penteres/img1.jpg";
import img2 from "./assets/img penteres/img2.jpg";
import img3 from "./assets/img penteres/img3.jpg";
import img4 from "./assets/img penteres/img4.jpg";
import { useEffect, useRef } from "react";
import { state } from "./stateIdMostra";
import { Slider } from "./ComponenteSplider/Slider";
export const App = () => {
  const [posicionScrollY, setPosicionScrollY] = useState(0);
  const [idMostrar, setIdMostrar] = useState(state);

  const div = useRef(null);
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const div4 = useRef(null);
  const div5 = useRef(null);
  const div6 = useRef(null);
  const div7 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setPosicionScrollY(scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    [div, div1, div2, div3, div4, div5, div6, div7].forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const height = Math.floor(Math.abs(rect.top));

        setIdMostrar((prev) =>
          prev.map((item, i) =>
            i === index
              ? { ...item, height, mostrar: posicionScrollY > height - 130 }
              : item
          )
        );
      }
    });
  }, [posicionScrollY]);
  return (
    <div className="contenedor">
      <section className=" seccion  w-full py-12 md:py-2004 lg:py-32 xl:py-40">
        <div
          className={` container flex flex-col items-center justify-center space-y-10 px-4 md:px-6 `}
        >
          <div className="flex flex-col items-center space-y-5 text-center">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl">
                CodyHouse
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/none lg:text-base xl:text-xl dark:text-gray-400">
                te sentis solo y no tenes con quies esta estos ultimos dias
                entoces porque no compartir tu tiempo con un hermos felino
              </p>
            </div>
            <a
              className="inline-block rounded-lg bg-gray-900 px-6 py-2 text-sm text-gray-50 transition-colors hover:bg-gray-900/80"
              href="#"
            >
              contactar
            </a>
          </div>
        </div>
      </section>
      <section className="seccion   bg-black text-white w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div
            ref={div1}
            className={`  ${
              idMostrar[1].mostrar ? "mostrar" : ""
            } space-y-2 text-center opacity-0 `}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Arvertencia
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400">
              Si vemos que el animal que llevaste esta siendo matrado o que no
              cumple con las condicion el animal sera quitado por la institucion
              y usted tendra cargos si el animal fue maltrado{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="seccion  w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container grid items-center space-y-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <img
            src={img2}
            width="600"
            height="400"
            alt="ContraMate"
            className="imgs mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
          />
          <div
            ref={div2}
            className={` ${
              idMostrar[2].mostrar ? "mostrar" : ""
            } flex flex-col justify-center space-y-4 opacity-0 `}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                dady
              </h2>
              <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                fue el ultimo gato recatado en San salvador de Jujuy terminal
                vieja fue encontrado por un seños que tiro el gato en un seto de
                basura
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" seccion  w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container grid items-center space-y-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className={` flex flex-col justify-center space-y-4  `}>
            <div
              ref={div3}
              className={`${
                idMostrar[3].mostrar ? "mostrar" : ""
              } space-y-2 opacity-0`}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                tete
              </h2>
              <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Es un gato fue encontrado tirado en la en una bosala de basura
                en un monte de perico jujuy dondo hoy en dia fue rescatado y ya
                tiene una fammila que lo ama por si fuera un hijo para ellos
              </p>
            </div>
          </div>
          <img
            src={img3}
            width="600"
            height="400"
            alt="ContraMate"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
          />
        </div>
      </section>
      <section className="seccion w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container grid items-center space-y-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <img
            src={img1}
            width="600"
            height="400"
            alt="ContraMate"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div
              ref={div4}
              className={`${
                idMostrar[4].mostrar ? "mostrar" : ""
              } space-y-2 opacity-0 `}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                ceniza
              </h2>

              <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Esta gata fue encontrada por dos vecinos que escuchaban gritos
                de un gato en el duberia de una serca de su casa fue rescado y
                tambien hoy en dia encontro una familia que lo ama pucho{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="seccion-mostrar-gatos-que-ya-fueron-rescatados"> 
      <Slider/>
      </section>
      <section className=" seccion w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="contenedor-img">
          <div className="culumna">
            <img className="imgs" src={img1} alt="" />
            <img className="imgs" src={img2} alt="" />
            <img className="imgs" src={img3} alt="" />
          </div>
          <div className="culumna">
            <img className="imgs" src={img1} alt="" />
            <img className="imgs" src={img3} alt="" />
            <img className="imgs" src={img2} alt="" />
          </div>
          <div className="culumna">
            <img className="imgs" src={img4} alt="" />
            <img className="imgs" src={img3} alt="" />
            <img className="imgs" src={img2} alt="" />
          </div>
        </div>
      </section>
      <section className=" seccion w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div
            ref={div7}
            className={` ${
              idMostrar[7].mostrar ? "mostrar" : ""
            } space-y-2 text-center`}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              agradecimientos
            </h2>
            <p className="mx-auto max-w-prose text-gray-500/70 md:text-xl/relaxed dark:text-gray-400/70">
              acuerdece que noes solo adopar un animal es cambiarle la vida a
              ese animal que no corrio con la misma suerte que otros
            </p>
            <a className="btn inline-block w-full max-w-xs" href="#">
              Contactarnos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
