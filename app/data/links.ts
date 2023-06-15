import { nanoid } from "nanoid";

export type Link = {
  id: string;
  title: string;
  slug: string;
  url: string;
  colorForeground: string;
  colorBackground: string;
  description?: string;
};

export type Links = Link[];

export const dataLinks: Links = [
  {
    id: nanoid(),
    title: "Kawal Tech",
    slug: "kawaltech.dev",
    url: "https://kawaltech.dev",
    colorForeground: "#FFFFFF",
    colorBackground: "#0A2263",
    description: "The umbrella team for Kawal projects.",
  },
  {
    id: nanoid(),
    title: "KawalCOVID19",
    slug: "kawalcovid19",
    url: "https://kawalcovid19.id",
    colorForeground: "#C63734",
    colorBackground: "#23272C",
    description:
      "Kawal informasi seputar COVID-19 secara tepat dan akurat. Situs ini merupakan sumber informasi inisiatif sukarela warganet Indonesia pro-data, terdiri dari praktisi kesehatan, akademisi & profesional.",
  },
  {
    id: nanoid(),
    title: "Kawal Jodoh",
    slug: "kawaljodoh",
    url: "https://kawaljodoh.id",
    colorForeground: "#FFFFFF",
    colorBackground: "#6A2B29",
    description: "Mengawal jodoh hingga ke pelaminan.",
  },
  {
    id: nanoid(),
    title: "Kawal Masjid",
    slug: "kawalmasjid",
    url: "https://kawalmasj.id",
    colorForeground: "#FFFFFF",
    colorBackground: "#212E29",
    description: "",
  },
  {
    id: nanoid(),
    title: "WargaBantuWarga",
    slug: "wargabantuwarga",
    url: "https://wargabantuwarga.com",
    colorForeground: "#FFFFFF",
    colorBackground: "#3166BC",
    description:
      "Inisiatif warga untuk berbagi informasi dan membantu warga yang terdampak Covid-19.",
  },
];
