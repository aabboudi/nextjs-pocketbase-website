import DefaultLayout from "@/layouts/default";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <DefaultLayout pageTitle="Contact">
      <div className="grid grid-cols-2 items-center gap-4 py-8">
        <section>
          lorem ipsum
        </section>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 w-full lg:w-2/3 gap-4"
        >
          <div>
            <Input
              isRequired
              type="text"
              label="Nom"
              variant="faded"
              {...register("name", {
                required: "Le nom est obligatoire",
                pattern: {
                  value: /^[\p{L}]+$/u,
                  message: "Le nom ne peut contenir que des lettres"
                }
              })}
            />
            {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
          </div>

          <div>
            <Input
              isRequired
              type="email"
              label="Email"
              variant="faded"
              {...register("email", {
                required: "L'email est obligatoire",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Veuillez présenter un email valide"
                }
              })}
            />
            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
          </div>

          <div>
            <Input
              type="text"
              label="Sujet"
              variant="faded"
              {...register("subject")}
            />
          </div>

          <div>
            <Textarea
              isRequired
              label="Message"
              labelPlacement="inside"
              size="lg"
              variant="faded"
              maxLength={3000}
              {...register("message", { required: "Le message est obligatoire" })}
            />
            {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="solid" type="button" onClick={contactAlert}>Envoyer</Button>
            <Button variant="bordered" type="reset">Réinitialiser</Button>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
}

const contactAlert = () => {
  alert("This is a test flight. Message is not sent.");
}
