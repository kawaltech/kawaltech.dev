import { json, type V2_MetaFunction } from "@remix-run/node";

import { dataLinks } from "~/data";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Kawal Tech" },
    { name: "description", content: "Welcome to Kawal Tech website." },
  ];
};

export async function loader() {
  return json(dataLinks);
}

export default function Route() {
  return (
    <main>
      <ul>
        {dataLinks.map((link) => {
          return (
            <li key={link.id}>
              <h2>{link.title}</h2>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
