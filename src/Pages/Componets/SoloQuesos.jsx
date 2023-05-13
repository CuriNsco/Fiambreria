import React from "react";

const productos = [
    {
        id: 13,
      name: "Azul",
      href: '#',
      imageSrc: "../public/Quesos/Azul.PNG",
      imageAlt: 'hola',
      price: "$5.50",
    },
    {
        id: 14,
      name: "Brie",
      href: '#',
      imageSrc: "../public/Quesos/Brie.PNG",
      imageAlt: 'hola',
      price: "$3.00",
    },
    {
        id: 15,
      name: "Criollo",
      href: '#',
      imageSrc: "../public/Quesos/Criollo.PNG",
      imageAlt: 'hola',
      price: "$10.00",
    },
    {
        id: 16,
      name: "Fontina",
      href: '#',
      imageSrc: "../public/Quesos/Fontina.PNG",
      imageAlt: 'hola',
      price: "$5.30",
    },
    {
        id: 17,
      name: "Holanda",
      href: '#',
      imageSrc: "../public/Quesos/Holanda.PNG",
      imageAlt: 'hola',
      price: "$15.70",
    },
    {
        id: 18,
      name: "Morbier",
      href: '#',
      imageSrc: "../public/Quesos/Morbier.PNG",
      imageAlt: 'hola',
      price: "$8.00",
    },
    {
        id: 19,
      name: "Parmesano",
      href: '#',
      imageSrc: "../public/Quesos/Parmesano.PNG",
      imageAlt: 'hola',
      price: "$7.50",
    },
    {
        id: 20,
      name: "Provolone",
      href: '#',
      imageSrc: "../public/Quesos/Provolone.PNG",
      imageAlt: 'hola',
      price: "$12.20",
    },
    {
        id: 21,
        name: 'Regianito',
        href: '#',
        imageSrc: "../public/Quesos/Regianito.PNG",
        price: '$200',
        imageAlt: 'hola',
    },
    {
      id: 22,
      name: 'Provoleta',
      href: '#',
      imageSrc: "../public/Quesos/Provoleta.PNG",
      price: '$200',
      imageAlt: 'hola',
    },
    {
      id: 23,
      name: 'Sardo',
      href: '#',
      imageSrc: "../public/Quesos/Sardo.PNG",
      price: '$200',
      imageAlt: 'hola',
    },
    {
      id: 24,
      name: 'Fiambrin',
      href: '#',
      imageSrc: "../public/Quesos/Fiambrin.PNG",
      price: '$200',
      imageAlt: 'hola',
    },
  ];

  export const SoloQuesos = () => {
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