import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/20/solid';
   
  export default function Contactanos() {
    return (
        <div className="grid grid-cols-1 justify-items-center items-center sm:grid-cols-3 sm:justify-items-center sm:items-center sm:mt-20 mb-24">
      <Card color="transparent" shadow={false} className="justify-center items-center">
        <Typography variant="h4" color="blue-gray" className='mt-16'>
          Contáctanos
        </Typography>
        <Typography color="gray" className="mt-1 font-normal px-6">
          Ingresa tu pregunta y nosotros te responderemos en la brevedad
        </Typography>
        <form className=" mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Nombre" />
            <Input size="lg" label="Email" />
            <Input type="text" size="lg" label="Deja tu mesaje aqui" />
          </div>
          <Checkbox
            label={
              (
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terminos y condiciones
                  </a>
                </Typography>
              )
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 mb-16 bg-red-700" fullWidth type="submit">
           Enviar
          </Button>
        </form>
      </Card>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1713.8746388905759!2d-71.53758582213239!3d-41.96072744083495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961bbfc5fe5f09b3%3A0x114ab9e5c80b660e!2sMARADONA!5e0!3m2!1ses!2sar!4v1684291046831!5m2!1ses!2sar" width="600" height="450" loading="lazy" className=" mb-16  w-80 h-80 sm:mt-12 border border-black sm:w-96 sm:h-96"></iframe>

            <div className="grid grid-cols-3 grid-rows-3 justify-items-center">
              <PhoneIcon className="w-8 mt-2 text-gray-900 sm:w-12 sm:py-10"></PhoneIcon>
              <h1 className=" col-start-2 col-span-2 font-bold text-xl text-gray-900 mt-3 sm:text-3xl sm:mt-14">123456789</h1>
              <EnvelopeIcon className="w-8 float-right mt-2 text-gray-900 sm:w-12 sm:py-10"></EnvelopeIcon>
              <h1 className=" col-start-2 col-span-2 font-bold text-xl text-gray-900 mt-3 sm:text-3xl sm:mt-14">hola@gmail.com</h1>
              <MapPinIcon className="w-8 mb-2 float-right mt-2 text-gray-900 sm:w-12 sm:py-10"></MapPinIcon>
              <h1 className=" col-start-2 col-span-2 font-bold text-xl text-gray-900 mt-3 sm:text-3xl sm:mt-14">Sarmiento y Larrea</h1>
            </div>

      </div>
    );
  }