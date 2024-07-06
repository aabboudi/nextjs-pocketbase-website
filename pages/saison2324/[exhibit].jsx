import { useRouter } from 'next/router';
import DefaultLayout from "@/layouts/default";

const exhibits = {
  "carnets-de-vie": {
    name: "Carnets de Vie",
    cat: "Concerts d'Ouverture",
    date: "16 - 20 octobre 2023",
    src: "carnets_de_vie.webp",
  },
  "exulte": {
    name: "Exulte",
    cat: "Symphonique avec chœur",
    date: "17 - 20 décembre 2023",
    src: "exulte.webp",
  },
  "titan": {
    name: "TITAN",
    cat: "Concerts du nouvel an",
    date: "16 - 20 octobre",
    src: "titan.webp",
  },
  "opm-competition": {
    name: "OPM COMPETITION",
    cat: "Concours international",
    date: "16 - 20 octobre",
    src: "opm_competition.webp",
  },
  "folk-songs": {
    name: "FOLK SONGS",
    cat: "Ensemble vocal",
    date: "16 - 20 octobre",
    src: "folk_songs.webp",
  },
  "printemps-musical": {
    name: "PRINTEMPS MUSICAL DES AIZÉS",
    cat: "FESTIVAL",
    date: "18 - 21 avril 2024",
    src: "aizes.webp",
  },
};

export default function Exhibit() {
  const router = useRouter();
  const { exhibit } = router.query;

  const exhibitData = exhibits[exhibit];

  if (!exhibitData) {
    return (
      <DefaultLayout>
        <h1>Exhibit Not Found</h1>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <p>{exhibitData.cat}</p>
      <h1>{exhibitData.name}</h1>
      <p>{exhibitData.date}</p>
      <img src={`/${exhibitData.src}`} alt={exhibitData.name} />
    </DefaultLayout>
  );
}
