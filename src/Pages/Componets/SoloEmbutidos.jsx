import React from "react";

const productos = [
    {
        id: 25,
      name: "Cantimpalo",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_643016207754501571-aa68d5e8c86b35323116208604780227-1024-1024.jpg",
      imageAlt: 'hola',
      price: "$5.50",
    },
    {
        id: 26,
      name: "Fuet",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_641716207754501541-9134efd20890cb863f16208613137266-1024-1024.jpg",
      imageAlt: 'hola',
      price: "$3.00",
    },
    {
        id: 27,
      name: "Longaniza calabresa",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_6412162077545015211-7e9262bb4a90b9252616250658809293-1024-1024.jpg",
      imageAlt: 'hola',
      price: "$10.00",
    },
    {
        id: 28,
      name: "Salame a las finas hierbas",
      href: '#',
      imageSrc: "https://latablita.com.ar/wp-content/uploads/2021/10/salame-con-hierbas.jpg",
      imageAlt: 'hola',
      price: "$5.30",
    },
    {
        id: 29,
      name: "Salamin picado fino",
      href: '#',
      imageSrc: "https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/273278152_950827782203641_3802318741032783751_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGGjBFFtKOlgYtDCqdegzpLyy8y-JlQg7DLLzL4mVCDsHmI3vPsPiqu7SPmfmTBWuSr2p0lr_9ydxU_dQ-jwb7_&_nc_ohc=wSDlcG2nZaAAX_4WzNp&_nc_ht=scontent.fcor10-3.fna&oh=00_AfBYFASiw2x9qnaI4LmLdqosjY9_LikrU4FIq60X7FrnIg&oe=6466024A",
      imageAlt: 'hola',
      price: "$15.70",
    },
    {
        id: 30,
      name: "Salamin picado grueso",
      href: '#',
      imageSrc: "https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/287718737_1036691656950586_2948409395421792440_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEF3SNvZdFWoWSyFeuPa_fetltB5aXGZZm2W0HlpcZlmXTyOH08PI-PxxqwuwA8tMVeyoK097wQ7TNM4iz7u3Q9&_nc_ohc=B0ZNqLVRG3IAX9vZMWu&_nc_ht=scontent.fcor10-3.fna&oh=00_AfDfm-ZLeQnXngII2o3TCcM58arVRfulf_0LFZFR7PLGSg&oe=646646C2",
      imageAlt: 'hola',
      price: "$8.00",
    },
    {
        id: 31,
      name: "Sorpresatta",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/whatsapp-image-2022-01-26-at-12-49-031-8c10c706a07cb3b0b516432121924036-1024-1024.jpeg",
      imageAlt: 'hola',
      price: "$7.50",
    },
    {
        id: 32,
      name: "Leberwust",
      href: '#',
      imageSrc: "https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/img_64371620775450159-121-4e0f901c12b472125816208521787451-1024-1024.jpg",
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