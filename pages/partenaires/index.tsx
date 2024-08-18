import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import { getImages } from '../api/getImages';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";

interface PartenairesProps {
  images: string[];
}

export async function getStaticProps() {
  const images = await getImages();
  return {
    props: {
      images,
    },
  };
}

export default function Partenaires({ images }: PartenairesProps) {
  return (
    <DefaultLayout pageTitle="Partenaires">
      <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 items-center md:px-12 lg:px-36">
        {images.map((src, index) => (
          <div key={index} className="grid h-full bg-white items-center col-span-1 border rounded-large text-white overflow-hidden">
            <Image
              alt={`Image ${index}`}
              className="w-full object-cover filter grayscale hover:grayscale-0 transition duration-120 cursor-pointer"
              height={200}
              src={src}
              width={200}
            />
          </div>
        ))}
      </section>
      <section className="w-full grid grid-cols-1 justify-center md:px-12 lg:px-36">
        <div className="col-span-1 text-center md:px-12 lg:px-40">
          <h1>COMITÉ D'HONNEUR ET DE SOUTIEN</h1>
          <p>Nous tenons également à remercier les membres de notre <span className="font-bold">Comité d'Honneur et de Soutien</span> pour la qualité de leur engagement en faveur de la musique et de la culture. Leur aide participe au rayonnement de l'orchestre au quotidien.</p>
        </div>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn className="text-end">NOM</TableColumn>
            <TableColumn>STATUT</TableColumn>
          </TableHeader>
          <TableBody>

            {[
              { name: "Hassan ABOUYOUB", position: "Ambassadeur du Maroc en Roumanie" },
              { name: "Jacques ATTALI", position: "Economiste et écrivain" },
              { name: "André AZOULAY", position: "Conseiller de Sa Majesté le Roi" },
              { name: "Othman BENJELLOUN", position: "Président Directeur Général de Bank Of Africa" },
              { name: "Amina BENKHADRA", position: "Directrice Générale de l'ONHYM" },
              { name: "Jean-Claude CASADESUS", position: "Chef fondateur de l'Orchestre National de Lille" },
              { name: "Abdel Rahman EL BACHA", position: "Pianiste concertiste" },
              { name: "Ahmed ESSYAD", position: "Compositeur de musique classique contemporaine" },
              { name: "Jean-René FOURTOU", position: "Président d'honneur du Conseil de surveillance de Vivendi" },
              { name: "Thami GHORFI", position: "Président de l'ESCA et de radio ASWAT" },
              { name: "Jawad HAMRI", position: "Président du Conseil de surveillance de la BMCI" },
              { name: "Saâd HASSAR", position: "Ancien Secrétaire d'Etat au Ministère de l'Intérieur" },
              { name: "Saïd IBRAHIMI", position: "Directeur Général de Casablanca Finance City" },
              { name: "Fayçal LARAICHI", position: "Président Directeur Général de la SNRT" },
              { name: "Li CHANGLIN", position: "Ambassadeur de la République de Chine au Maroc" },
              { name: "Frédéric MITTERAND", position: "Ancien Ministre de la Culture en France" },
              { name: "Patricia LLOMBART CUSSAC", position: "Ambassadrice de l'Union Européenne au Maroc" },
            ].map((member, index) => (
              <TableRow key={index}>
                <TableCell className="font-bold text-end">{member.name}</TableCell>
                <TableCell>{member.position}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </section>
    </DefaultLayout>
  );
}
