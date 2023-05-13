export default function Marcas() {
    return (
      <div className="bg-white mb-10 py-2 sm:pt-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Marcas que confian en nosotros
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://doncandidosrl.com/recursos/home._1.png?61"
              alt="Don Candido"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://www.elbierzo.com.ar/images/logo.png"
              alt="El Bierzo"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="http://www.lapiamontesa.com/wp-content/uploads/2015/06/logo.png"
              alt="Piamontesa"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://www.tremblay.com.ar/images/logo.png"
              alt="Tremblay"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://laserenisimaclasico.com.ar/wp-content/uploads/2022/04/Logo-LSC-01.svg"
              alt="La Serenisima"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }