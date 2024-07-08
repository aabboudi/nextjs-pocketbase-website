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
    <DefaultLayout>
      <h1>Contact</h1>
      <div className="grid grid-cols-1 w-full items-center py-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 w-full md:w-1/2 lg:w-1/3 gap-4"
        >
          <div>
            <Input
              isRequired
              type="text"
              label="Name"
              variant="faded"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Name can only contain letters"
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
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>

          <div>
            <Input
              type="text"
              label="Subject"
              variant="faded"
              {...register("subject")}
            />
          </div>

          <div>
            <Textarea
              isRequired
              label="Message"
              labelPlacement="inside"
              variant="faded"
              maxLength={3000}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="solid" type="submit">Envoyer</Button>
            <Button variant="bordered" type="reset">Réinitialiser</Button>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
}
