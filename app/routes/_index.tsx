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
    <main className="container m-auto">
      <ul className="m-4 space-y-2">
        {dataLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: link.colorForeground,
                  backgroundColor: link.colorBackground,
                }}
                className="block rounded p-4 font-bold hover:opacity-90"
              >
                <h2>{link.title}</h2>
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
