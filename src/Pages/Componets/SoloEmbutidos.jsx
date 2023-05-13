import React from "react";

const productos = [
    {
        id: 25,
      name: "Cantimpalo",
      href: '#',
      imageSrc: "../public/Embutidos/Cantimpalo.PNG",
      imageAlt: 'hola',
      price: "$5.50",
    },
    {
        id: 26,
      name: "Fuet",
      href: '#',
      imageSrc: "../public/Embutidos/Fuet.PNG",
      imageAlt: 'hola',
      price: "$3.00",
    },
    {
        id: 27,
      name: "Longaniza calabresa",
      href: '#',
      imageSrc: "../public/Embutidos/Longaniza calabresa.PNG",
      imageAlt: 'hola',
      price: "$10.00",
    },
    {
        id: 28,
      name: "Salame a las finas hierbas",
      href: '#',
      imageSrc: "../public/Embutidos/Salame a las finas hierbas.jpg",
      imageAlt: 'hola',
      price: "$5.30",
    },
    {
        id: 29,
      name: "Salamin picado fino",
      href: '#',
      imageSrc: "../public/Embutidos/Salamin picado fino.jpg",
      imageAlt: 'hola',
      price: "$15.70",
    },
    {
        id: 30,
      name: "Salamin picado grueso",
      href: '#',
      imageSrc: "../public/Embutidos/Salamin picado grueso.jpg",
      imageAlt: 'hola',
      price: "$8.00",
    },
    {
        id: 31,
      name: "Sorpresatta",
      href: '#',
      imageSrc: "../public/Embutidos/Sorpresatta.PNG",
      imageAlt: 'hola',
      price: "$7.50",
    },
    {
        id: 32,
      name: "Leberwust",
      href: '#',
      imageSrc: "../public/Embutidos/Leberwust.PNG",
      imageAlt: 'hola',
      price: "$12.20",
    },
  ];

  export const SoloEmbutidos = () => {
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