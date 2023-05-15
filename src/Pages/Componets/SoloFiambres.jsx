import React from "react";




const productos = [
    {
        id: 1,
      name: "Jamon Cocido",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_636716207754501391-47c8f8b3571fdbcb1816208559884975-240-0.jpg",
      imageAlt: 'hola',
      price: '$250',
    },
    {
        id: 2,
      name: "Jamon Natural",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_6356162077545013711-6728e159cb1ddc2e7716208550444937-640-0.jpg",
      imageAlt: 'hola',
      price: "$3.00",
    },
    {
        id: 3,
      name: "Jamon Crudo",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_6351162077545013621-d8e127141e2d2996f416208544432427-640-0.jpg",
      imageAlt: 'hola',
      price: "$10.00",
    },
    {
        id: 4,
      name: "Bondiola",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_637316207754501431-0954d77eab3777a7ca16208564651116-640-0.jpg",
      imageAlt: 'hola',
      price: "$5.30",
    },
    {
        id: 5,
      name: "Lomito a las finas Hierbas",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_638216207754501451-1c918b81b67828829c16208571993838-640-0.jpg",
      imageAlt: 'hola',
      price: "$15.70",
    },
    {
        id: 6,
      name: "Panceta ahumada",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_639816207754501491-b9f05565d61d2a11d916208578459648-640-0.jpg",
      imageAlt: 'hola',
      price: "$8.00",
    },
    {
        id: 7,
      name: "Matambre",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_640416207754501511-bd4f7eac109b5d73e816208581104558-1024-1024.jpg",
      imageAlt: 'hola',
      price: "$7.50",
    },
    {
        id: 8,
      name: "Salame milan",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_639416207754501481-0e6d11ef461ddccf2d16208576522353-640-0.jpg",
      imageAlt: 'hola',
      price: "$12.20",
    },
    {
        id: 9,
        name: 'Mortadela con Pistacho',
        href: '#',
        imageSrc: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_639016207754501471-cda70afcf978f69abd16208574667220-640-0.jpg',
        price: '$200',
        imageAlt: 'hola',
    },
    {
      id: 10,
    name: "Lomo horneado",
    href: '#',
    imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_638516207754501461-5103b3eef5e71a742516208570147741-640-0.jpg",
    imageAlt: 'hola',
    price: "$7.50",
  },
  {
      id: 11,
    name: "Mortadela bocha",
    href: '#',
    imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_638916207754501471-ea238d4fe2ee944ca716208572966943-640-0.jpg",
    imageAlt: 'hola',
    price: "$12.20",
  },
  {
      id: 12,
      name: 'Paleta especial',
      href: '#',
      imageSrc: '.https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_636716207754501391-47c8f8b3571fdbcb1816208559884975-240-0.jpg',
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
