import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function Contactanos() {
    return (
        <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2">
      <Card color="transparent" shadow={false} className="justify-center items-center">
        <Typography variant="h4" color="blue-gray" className='mt-16'>
          Contáctanos
        </Typography>
        <Typography color="gray" className="mt-1 font-normal ">
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1713.8746388905759!2d-71.53758582213239!3d-41.96072744083495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961bbfc5fe5f09b3%3A0x114ab9e5c80b660e!2sMARADONA!5e0!3m2!1ses!2sar!4v1684291046831!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=" mb-16 ml-12 w-80 h-80 sm:mt-12 sm:ml-12 border border-black"></iframe>
      </div>
    );
  }