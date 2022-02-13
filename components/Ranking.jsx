/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Ranking() {
  const classement = [
    {
      participant: "Damien Da Silva Bregieiro",
      dateDepart: 1643724000,
      dateArrivee: 1643725713,
      picture: "/damien.jpg",
    },
    {
      participant: "Thomas Ponthoreau",
      dateDepart: 1643724000,
      dateArrivee: 1643725429,
      picture: "/thomas.jpg",
    },
    {
      participant: "Guillem Dardill",
      dateDepart: 1643724000,
      dateArrivee: 1643726269,
      picture: "/guillem.jpg",
    },
    {
      participant: "Amadou NDIAYE",
      dateDepart: 1643724000,
      dateArrivee: 1643724564,
      picture: "/amadou.jpg",
    },
    {
      participant: "Pierre Bague",
      dateDepart: 1643732114,
      dateArrivee: 1643733782,
      picture: "/pierre.jpg",
    },
    {
      participant: "Hugo Prea",
      dateDepart: 1643724000,
      dateArrivee: 1643730981,
      picture: "/hugo.jpg",
    },
    {
      participant: "Jean-Luc Roux",
      dateDepart: 1643724000,
      dateArrivee: 1643726134,
      picture: "/jean-luc.png",
    },
    {
      participant: "Tony Bernard",
      dateDepart: 1643724000,
      dateArrivee: 1643725967,
      picture: "/tony.jpg",
    },
    {
      participant: "Serge Munnia-Vincent",
      dateDepart: 1643724000,
      dateArrivee: 1643867841,
      picture: "/serge.png",
    },
    {
      participant: "Camille Constant",
      dateDepart: 1643724000,
      dateArrivee: 1643725429,
      picture: "/camille.jpg",
    },
  ];

  console.log("Ranking:", classement);

  function timeConverter(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60);

    return minutes + "min " + seconds + "." + milliseconds + "s";
  }

  return (
    <div>
      <h1 className="font-extrabold text-2xl mb-3">Race Rank:</h1>

      <ul className="px-5 border-2 border-dagOrange rounded-md">
        {classement
          .sort((a, b) => {
            return (
              a.dateArrivee - b.dateArrivee - (a.dateDepart - b.dateDepart)
            );
          })
          .map((runner, position) => {
            let rankingPosition = position + 1;
            return (
              <li
                key={runner.participant}
                className="flex flex-row items-center p-2 gap-3 my-4 shadow-inner rounded-md hover:scale-110 duration-200"
              >
                <span className="w-20 font-bold">
                  Position: {rankingPosition}
                </span>
                <span>
                  <img
                    src={runner.picture}
                    alt="Runner Picture"
                    className="h-20 rounded-full border-2 border-dagOrange"
                  />
                </span>
                <span className="ml-4 w-[180px]">{runner.participant}</span>
                <span>
                  Time:{" "}
                  <span className="italic font-light">
                    {timeConverter(runner.dateArrivee - runner.dateDepart)}
                  </span>
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
