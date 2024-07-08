import DefaultLayout from "@/layouts/default"

export default function Custom404() {
  return (
    <DefaultLayout>
      <div className="flex h-full justify-center items-center">
        <h1 className="text-center">Erreur 404 | Page introuvable</h1>
      </div>
    </DefaultLayout>
  );
}