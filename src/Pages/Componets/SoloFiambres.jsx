import React from "react";
import Contador from "../../Componentes/Contador/Contador";



const productos = [
    {
        id: 1,
      name: "Jamon Cocido",
      href: '#',
      imageUrl: "https://fiumealmacengourmet.mitiendanube.com/productos/jamon-cocido-octava/",
      imageAlt: 'hola',
      price: '$250',
    },
    {
        id: 2,
      name: "Jamon Natural",
      href: '#',
      imageSrc: "../public/Fiambres/Jamonatural.PNG",
      imageAlt: 'hola',
      price: "$3.00",
    },
    {
        id: 3,
      name: "Jamon Crudo",
      href: '#',
      imageSrc: "../public/Fiambres/Jamoncrudo.PNG",
      imageAlt: 'hola',
      price: "$10.00",
    },
    {
        id: 4,
      name: "Bondiola",
      href: '#',
      imageSrc: "../public/Fiambres/Bondiola.PNG",
      imageAlt: 'hola',
      price: "$5.30",
    },
    {
        id: 5,
      name: "Lomito a las finas Hierbas",
      href: '#',
      imageSrc: "../public/Fiambres/Lomito.PNG",
      imageAlt: 'hola',
      price: "$15.70",
    },
    {
        id: 6,
      name: "Panceta ahumada",
      href: '#',
      imageSrc: "../public/Fiambres/Panceta.PNG",
      imageAlt: 'hola',
      price: "$8.00",
    },
    {
        id: 7,
      name: "Matambre",
      href: '#',
      imageSrc: "../public/Fiambres/Matambre.PNG",
      imageAlt: 'hola',
      price: "$7.50",
    },
    {
        id: 8,
      name: "Salame milan",
      href: '#',
      imageSrc: "../public/Fiambres/Salame.PNG",
      imageAlt: 'hola',
      price: "$12.20",
    },
    {
        id: 9,
        name: 'Mortadela con Pistacho',
        href: '#',
        imageSrc: '../public/Fiambres/Mortadela.PNG',
        price: '$200',
        imageAlt: 'hola',
    },
    {
      id: 10,
    name: "Lomo horneado",
    href: '#',
    imageSrc: "../public/Fiambres/Lomo horneado.PNG",
    imageAlt: 'hola',
    price: "$7.50",
  },
  {
      id: 11,
    name: "Mortadela bocha",
    href: '#',
    imageSrc: "../public/Fiambres/Mortadela bocha.PNG",
    imageAlt: 'hola',
    price: "$12.20",
  },
  {
      id: 12,
      name: 'Paleta especial',
      href: '#',
      imageSrc: '../public/Fiambres/Jamoncocido.PNG',
      price: '$200',
      imageAlt: 'hola',
  },
  ];

  export const SoloFiambres = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div className="grid sm:grid-cols-1 lg:grid-cols-1 text-center gap-4 bg-white py-4 px-4">
        <div className="pb-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {productos.map((product) => (
                <a href={product.href} key={product.id} className="group">
                    <div className="
                    my-2 card w-64 h-64 bg-[#ececec] shadow-xl shadow-gray-400 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-grey-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
            ))}

        </div>
    </div>
    </div>
  );
}
