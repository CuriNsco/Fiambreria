import React from "react";

const productos = [
    {
        id: 13,
      name: "Azul",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_634116207754501341-4bdf86164736571d9a16208348666170-1024-1024.jpg",
      imageAlt: 'hola',
      price: "$5.50",
    },
    {
        id: 14,
      name: "Brie",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_631416207754501261-413744865d54fbe2e116208325018571-1024-1024.jpg",
      imageAlt: 'hola',
      price: "$3.00",
    },
    {
        id: 15,
      name: "Criollo",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_63031620775450123-11-f080cd318308f463b616289503650474-1024-1024.jpg",
      imageAlt: 'hola',
      price: "$10.00",
    },
    {
        id: 16,
      name: "Fontina",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_62771620775450086-11-0b987f6e90bf5a9f0816208266881946-1024-1024.jpg",
      imageAlt: 'hola',
      price: "$5.30",
    },
    {
        id: 17,
      name: "Holanda",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_631616207754501271-65e51e9aea34321c8a16208326772823-1024-1024.jpg",
      imageAlt: 'hola',
      price: "$15.70",
    },
    {
        id: 18,
      name: "Morbier",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_629816207754501221-e56642699e2809bf0116208301146107-1024-1024.jpg",
      imageAlt: 'hola',
      price: "$8.00",
    },
    {
        id: 19,
      name: "Parmesano",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_632616207754501311-50d4987efdc905f78116208333924239-1024-1024.jpg",
      imageAlt: 'hola',
      price: "$7.50",
    },
    {
        id: 20,
      name: "Provolone",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_633316207754501321-edbc8b167d2ce1200b16208337069110-1024-1024.jpg",
      imageAlt: 'hola',
      price: "$12.20",
    },
    {
        id: 21,
        name: 'Regianito',
        href: '#',
        imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_632416207754501301-111baefc6b9878e3fc16208332537256-1024-1024.jpg",
        price: '$200',
        imageAlt: 'hola',
    },
    {
      id: 22,
      name: 'Provoleta',
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_633516207754501331-82034bc9e386a9c7f016208347984988-1024-1024.jpg",
      price: '$200',
      imageAlt: 'hola',
    },
    {
      id: 23,
      name: 'Sardo',
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_631916207754501291-5b8633e01e28f71c5916208328880030-1024-1024.jpg",
      price: '$200',
      imageAlt: 'hola',
    },
    {
      id: 24,
      name: 'Fiambrin',
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_637716207754501441-a73bf8607a9adf248816208565708325-1024-1024.jpg",
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