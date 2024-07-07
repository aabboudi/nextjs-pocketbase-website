import DefaultLayout from "@/layouts/default";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function Contact() {
  return (
    <DefaultLayout>
      <h1>Contact</h1>
      <div className="grid grid-cols-1 w-full items-center py-8">
        <form action="" method="post" className="grid grid-cols-1 w-full md:w-1/2 lg:w-1/3 gap-4">
          <Input type="email" label="Email" variant="faded" isRequired />
          <Input type="text" label="Name" variant="faded" isRequired />
          <Input type="text" label="Subject" variant="faded" />
          <Textarea
            isRequired
            label="Message"
            labelPlacement="inside"
            variant="faded"
            // className="max-w-xs"
          />
          <div className="grid grid-cols-2 gap-4">
            <Button className="" variant="solid" type="submit">Envoyer</Button>
            <Button className="" variant="bordered" type="reset">Réinitialiser</Button>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
}