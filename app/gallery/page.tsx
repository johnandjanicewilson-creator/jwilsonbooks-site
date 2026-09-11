"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type Item = { id: string; caption: string; credit: string; alt: string; img: string; chapter: string };

const DATA: Item[] = [
  {
    "id": "IMG-001",
    "caption": "Jack's Story — 7th Armored Division Tank Commander, World War II.",
    "credit": "Cover design © John H. Wilson",
    "alt": "Cover of Jack's Story: the title in bold red over a faint handwritten wartime letter and a censor's “Passed by Army Examiner” stamp, with a young American tank commander in a field jacket standing before a tank marked “Americana III.”",
    "img": "/gallery/img-001.jpg",
    "chapter": "Front Matter"
  },
  {
    "id": "IMG-002",
    "caption": "Second Lieutenant John C. “Jack” Wilson Jr.",
    "credit": "Wilson family collection",
    "alt": "Portrait of Second Lieutenant John C. “Jack” Wilson Jr. in U.S. Army uniform and officer's service cap — the young tank commander whose story the book tells.",
    "img": "/gallery/img-002.png",
    "chapter": "Front Matter"
  },
  {
    "id": "IMG-003",
    "caption": "Seattle from Queen Anne Hill in the 1930s, where Jack grew up overlooking Lake Union and the growing city.",
    "credit": "Wilson family collection",
    "alt": "Black-and-white view from Queen Anne Hill across Lake Union toward Seattle, with houses, roads, docks, and ships along the waterfront — the neighborhood where Jack grew up.",
    "img": "/gallery/img-003.png",
    "chapter": "Chapter 1 · Let's Meet Jack Wilson"
  },
  {
    "id": "IMG-004",
    "caption": "“Apart but together.” Jack sent this caricature to Jean from Fort Knox when he proposed to her in the summer of 1943.",
    "credit": "Wilson family collection",
    "alt": "Caricature of Jack riding a tank near a Fort Knox sign and reaching toward Jean by a Spokane sign, their photographic portraits worked into the drawing — sent when he proposed in 1943.",
    "img": "/gallery/img-004.jpg",
    "chapter": "Chapter 1 · Let's Meet Jack Wilson"
  },
  {
    "id": "IMG-005",
    "caption": "Jack and Jean on their wedding day, January 12, 1944, at St. John's Episcopal Cathedral in Spokane.",
    "credit": "Wilson family collection",
    "alt": "Black-and-white wedding portrait of Jack in uniform beside Jean in her gown and veil, surrounded by floral arrangements, on their wedding day in January 1944.",
    "img": "/gallery/img-005.jpg",
    "chapter": "Chapter 1 · Let's Meet Jack Wilson"
  },
  {
    "id": "IMG-006",
    "caption": "The famous caricature wall at Sardi's, where Jack, Jean, and Nell had dinner before seeing Oklahoma! on Broadway.",
    "credit": "Photo © Luigi Novi / Wikimedia Commons (CC BY-SA 3.0)",
    "alt": "Black-and-white photograph of the dining room at Sardi's in New York City, its walls covered with rows of framed celebrity caricatures above the tables.",
    "img": "/gallery/img-006.jpg",
    "chapter": "Chapter 2 · Waiting for European Deployment"
  },
  {
    "id": "IMG-007",
    "caption": "Sammy's Bowery Follies, a favorite New York nightspot for servicemen. Jack spent an evening here with three fellow lieutenants while awaiting shipment overseas.",
    "credit": "Public domain",
    "alt": "Black-and-white photograph of performers and staff at Sammy's Bowery Follies in New York City, posed beneath the club's large sign.",
    "img": "/gallery/img-007.png",
    "chapter": "Chapter 3 · Transfer to England"
  },
  {
    "id": "IMG-008",
    "caption": "Inside an M4 Sherman. Five men—commander, gunner, loader, driver, and assistant driver—worked together in the confined space of the tank.",
    "credit": "U.S. Army (technical manual)",
    "alt": "Cutaway drawing of an M4 Sherman medium tank showing the turret, crew positions, main gun, ammunition storage, and driving compartment.",
    "img": "/gallery/img-008.png",
    "chapter": "Chapter 5 · Joining the 7th Armored Division"
  },
  {
    "id": "IMG-009",
    "caption": "Rows of concrete “dragon's teeth,” antitank obstacles used by the Germans to block or channel advancing armor.",
    "credit": "U.S. Army Signal Corps",
    "alt": "Black-and-white photograph of long rows of concrete pyramidal antitank obstacles, known as dragon's teeth, extending across open ground.",
    "img": "/gallery/img-009.jpg",
    "chapter": "Chapter 6 · Jack's First Combat Experience"
  },
  {
    "id": "IMG-010",
    "caption": "The “27 Mile Line” east of St. Vith, showing the extended American defensive positions and the towns along the front.",
    "credit": "Map by John H. Wilson, after the 106th Infantry Division",
    "alt": "Map of the “27 Mile Line” defensive area around St. Vith, Belgium, showing the town of St. Vith and the surrounding villages along the American defensive front, with unit positions marked.",
    "img": "/gallery/img-010.png",
    "chapter": "Chapter 7 · What's Next?"
  },
  {
    "id": "IMG-011",
    "caption": "The German offensive at noon on December 16, 1944. American positions stretched along the front as German divisions began pushing west toward St. Vith and the surrounding road network.",
    "credit": "Map by John H. Wilson, after a U.S. Army situation map",
    "alt": "Military situation map for noon on December 16, 1944, showing American and German positions from Monschau south to Echternach, with St. Vith near the center and arrows marking developing German advances.",
    "img": "/gallery/img-011.png",
    "chapter": "Chapter 8 · German Attack"
  },
  {
    "id": "IMG-012",
    "caption": "The 7th Armored Division's two routes south to St. Vith, December 1944. Jack's 17th Tank Battalion took the eastern route through Malmedy and Ligneuville to Recht.",
    "credit": "Map by John H. Wilson, after 7th Armored Division after-action report",
    "alt": "Map of the 7th Armored Division's two routes south to the St. Vith area in December 1944; the 17th Tank Battalion followed the eastern route through Aachen, Eupen, Malmedy, and Ligneuville to Recht.",
    "img": "/gallery/img-012.png",
    "chapter": "Chapter 9 · The Battle of the Bulge"
  },
  {
    "id": "IMG-013",
    "caption": "The field near Malmedy after the massacre, where captured American soldiers were killed during the German offensive.",
    "credit": "U.S. Army Signal Corps",
    "alt": "Snow-covered field near Malmedy after the massacre, with the bodies of American soldiers in the snow and damaged buildings behind.",
    "img": "/gallery/img-013.png",
    "chapter": "Chapter 9 · The Battle of the Bulge"
  },
  {
    "id": "IMG-014",
    "caption": "The St. Vith “Goose Egg.” German forces were pushed south and west around the American defensive perimeter. Jack's platoon fought at Recht from December 17–20 and above Rodt from December 20–23.",
    "credit": "Map by John H. Wilson, after a 7th Armored Division map",
    "alt": "Map of the St. Vith defensive perimeter, the “Goose Egg,” showing German advances around the American positions, with Jack's platoon marked at Recht (Dec 17–20) and near Rodt (Dec 20–23).",
    "img": "/gallery/img-014.png",
    "chapter": "Chapter 10 · Defending St. Vith"
  },
  {
    "id": "IMG-015",
    "caption": "American vehicles crowd a snow-covered road in the St. Vith area during the Battle of the Bulge. The congestion on the narrow winter roads complicated the movement of men, armor, and supplies.",
    "credit": "U.S. Army Signal Corps",
    "alt": "Black-and-white photograph of American military vehicles backed up along a narrow, snow-covered road near St. Vith, more vehicles visible across the countryside.",
    "img": "/gallery/img-015.png",
    "chapter": "Chapter 11 · The Führer Escort Brigade Takes St. Vith"
  },
  {
    "id": "IMG-016",
    "caption": "Task Force Stine positions near Rodt, December 20, 1944. The map shows the A/17 and 48th AT roadblock controlling the approaches toward Hünningen, St. Vith, and Ober-Emmels.",
    "credit": "Map by John H. Wilson, after the 87th Cavalry Rcn Sqdn AAR",
    "alt": "Hand-drawn tactical map dated December 20, 1944, showing the A/17 and 48th AT roadblock near Rodt and roads toward Hünningen, St. Vith, and Ober-Emmels.",
    "img": "/gallery/img-016.png",
    "chapter": "Chapter 11 · The Führer Escort Brigade Takes St. Vith"
  },
  {
    "id": "IMG-017",
    "caption": "Company A surrounded northeast of Rodt, morning of December 22, 1944. With St. Vith and Rodt in German hands, Jack's unit found itself behind the German lines with its route west threatened.",
    "credit": "Map by John H. Wilson, after 87th Cavalry and 17th Tank Battalion after-action interviews",
    "alt": "Tactical map dated December 22, 1944, showing Company A surrounded northeast of Rodt, between the roads to Ober-Emmels and St. Vith near Hünningen.",
    "img": "/gallery/img-017.png",
    "chapter": "Chapter 12 · \"Fight Your Way Out\""
  },
  {
    "id": "IMG-018",
    "caption": "Company A's withdrawal from behind the German lines, December 22, 1944. From its position northeast of Rodt, the force fought its way west toward the new defensive line and the 7th Armored Division headquarters at Vielsalm.",
    "credit": "Map by John H. Wilson, after Lt. Boylan's sketch",
    "alt": "Map of the St. Vith–Rodt–Vielsalm area showing German advances from St. Vith, Task Force Stine positions near Rodt, and Company A's withdrawal route west through Commanster toward Vielsalm.",
    "img": "/gallery/img-018.png",
    "chapter": "Chapter 12 · \"Fight Your Way Out\""
  },
  {
    "id": "IMG-019",
    "caption": "Map of the fighting north of St. Vith, showing Am Stein, Born, Deidenberg, Hunningen, and the surrounding villages during Task Force Wilson's final operations in the Battle of the Bulge.",
    "credit": "7th Armored Division after-action report",
    "alt": "Map of the area north of St. Vith showing Am Stein, Born, Deidenberg, Hunningen, and surrounding roads, with labels marking Task Force Wilson's January 22 assembly area at Hunningen and where a tank was hit by artillery near Born.",
    "img": "/gallery/img-019.png",
    "chapter": "Chapter 13 · The Retaking of St. Vith"
  },
  {
    "id": "IMG-020",
    "caption": "Stars and Stripes told the story of Company A's capture of seven German 88mm guns north of St. Vith. Jack enclosed the clipping in his January 25 letter to Jean, noting that “the circumstances differ slightly from the story.”",
    "credit": "Stars and Stripes",
    "alt": "Newspaper clipping from Stars and Stripes headlined “Subject: 88s — To: Chaplain,” reporting how a force of American tanks and infantry captured seven brand-new German 88mm guns north of St. Vith, with a wry exchange about what to do with the captured guns.",
    "img": "/gallery/img-020.png",
    "chapter": "Chapter 14 · Recovery and Return to Service"
  },
  {
    "id": "IMG-021",
    "caption": "The division celebrated its return to St. Vith after retaking the city in January 1945. Contemporary newspaper coverage proclaimed the 7th Armored Division “Last Out, First In 7th at St. Vith.”",
    "credit": "Stars and Stripes",
    "alt": "Newspaper page headlined “7th Armored Takes St. Vith — Tanks, Joes Win Vital Road Hub,” with a small map of the St. Vith area marking Malmédy, Vielsalm, and Bastogne, and a boxed feature titled “Last Out, First In — 7th at St. Vith.”",
    "img": "/gallery/img-021.png",
    "chapter": "Chapter 14 · Recovery and Return to Service"
  },
  {
    "id": "IMG-022",
    "caption": "Jack's Silver Star award, dated February 23, 1945, recognizing his gallantry in action near Deidenberg, Belgium.",
    "credit": "Wilson family collection",
    "alt": "Official U.S. Army Silver Star award document dated February 23, 1945, for Second Lieutenant John C. Wilson Jr., citing his gallantry on January 23 near Deidenberg, Belgium — wounded, he remained in command and led his company to its objectives.",
    "img": "/gallery/img-022.png",
    "chapter": "Chapter 14 · Recovery and Return to Service"
  },
  {
    "id": "IMG-023",
    "caption": "American Sherman tanks on a wartime production line. From Europe, Jack worried that strikes and production delays at home were keeping badly needed tanks, equipment, and replacement parts from the men at the front.",
    "credit": "U.S. Army Signal Corps",
    "alt": "Black-and-white photograph of a wartime factory assembly line filled with rows of Sherman tanks in various stages of production, workers on and around the vehicles.",
    "img": "/gallery/img-023.jpg",
    "chapter": "Chapter 15 · Crossing the Rhine River"
  },
  {
    "id": "IMG-024",
    "caption": "7th Armored Division after-action map of the area west of the Rhine between Bonn and Remagen. The 17th Tank Battalion operated southwest of Bonn as the division helped clear German resistance before crossing the Rhine.",
    "credit": "Map by John H. Wilson, after 7th Armored Division after-action report",
    "alt": "After-action map of the Rhine west bank from Bonn south to Remagen, with towns and roads including Meckenheim, Bad Godesberg, and Remagen; labels mark the 17th Tank Battalion area southwest of Bonn.",
    "img": "/gallery/img-024.png",
    "chapter": "Chapter 15 · Crossing the Rhine River"
  },
  {
    "id": "IMG-025",
    "caption": "Arado Ar 234, the world's first operational jet bomber. German Ar 234s were among the aircraft sent against the Allied bridges at Remagen in an effort to destroy the Rhine crossings.",
    "credit": "National Air & Space Museum",
    "alt": "Black-and-white photograph of an Arado Ar 234 twin-engine jet bomber displayed indoors, viewed from the front, showing its long wings, two jet engines, and glazed cockpit nose.",
    "img": "/gallery/img-025.png",
    "chapter": "Chapter 15 · Crossing the Rhine River"
  },
  {
    "id": "IMG-026",
    "caption": "The University of Paris, where Jack attended Information and Education classes in March 1945 before returning to the 17th Tank Battalion.",
    "credit": "Illustration © John H. Wilson",
    "alt": "Black-and-white architectural illustration of the University of Paris: a symmetrical courtyard and classical academic buildings around a large domed central structure.",
    "img": "/gallery/img-026.png",
    "chapter": "Chapter 15 · Crossing the Rhine River"
  },
  {
    "id": "IMG-027",
    "caption": "Reduction of the Ruhr Pocket, April 4–14, 1945. The 7th Armored Division advanced into the Pocket in the center of III Corps, with the 9th Infantry Division on its right and the 99th Infantry Division on its left.",
    "credit": "U.S. Army Center of Military History (annotated by the author)",
    "alt": "U.S. Army map of the Ruhr Pocket, April 4–14, 1945, showing the German-held pocket and surrounding American forces; added labels mark the 7th Armored Division in the center of III Corps, between the 9th and 99th Infantry Divisions.",
    "img": "/gallery/img-027.png",
    "chapter": "Chapter 17 · 7th Armored at the Rim of the Ruhr"
  },
  {
    "id": "IMG-028",
    "caption": "German Hummel self-propelled howitzer. Mounting a powerful 150mm howitzer on a tracked chassis, the Hummel combined heavy firepower with mobility.",
    "credit": "Bundesarchiv, Bild 101I-219-0583A-07 / Harschneck / CC BY-SA 3.0 DE",
    "alt": "Black-and-white wartime photograph of a German Hummel self-propelled howitzer moving across open terrain with soldiers riding on it, its large 150mm howitzer in an open-topped fighting compartment.",
    "img": "/gallery/img-028.png",
    "chapter": "Chapter 17 · 7th Armored at the Rim of the Ruhr"
  },
  {
    "id": "IMG-030",
    "caption": "Combat Command A's route through the Ruhr Pocket to Hemer, April 1945.",
    "credit": "Map by John H. Wilson, after 7th Armored Division records",
    "alt": "Map of the 7th Armored Division's Combat Command A route through the Ruhr Pocket from the Sundern area west through Amecke, then north through Balve and Hönnetal to Hemer.",
    "img": "/gallery/img-030.png",
    "chapter": "Chapter 18 · The 7th Moves through Germany"
  },
  {
    "id": "IMG-031",
    "caption": "Closing on Hemer. The 7th Armored Division advanced from the east as the 99th Infantry Division approached from the west and the 5th Infantry Division from the northeast.",
    "credit": "Map by John H. Wilson, after U.S. Army Center of Military History",
    "alt": "Map showing Hemer surrounded by the converging 7th Armored, 99th Infantry, and 5th Infantry Divisions during the closing of the Ruhr Pocket.",
    "img": "/gallery/img-031.png",
    "chapter": "Chapter 19 · Closing the Pocket"
  },
  {
    "id": "IMG-032",
    "caption": "The final encirclement of Hemer. Elements of the 7th Armored Division closed from the east while the 99th Infantry Division approached from the west. The airfield east of Hemer became the position from which Jack's tanks and tank destroyers were prepared to support the final assault.",
    "credit": "Map by John H. Wilson, after U.S. Army Center of Military History",
    "alt": "Detailed map of Hemer and surrounding towns showing the 7th Armored Division east of the city, the 99th Infantry Division to the west, and the route around Hemer during the final assault.",
    "img": "/gallery/img-032.png",
    "chapter": "Chapter 19 · Closing the Pocket"
  }
];

function splitChapter(c: string): [string, string] {
  const parts = c.split(" \u00b7 ");
  if (parts.length === 2) return [parts[0], parts[1]];
  return ["", c];
}

export default function Gallery() {
  const [idx, setIdx] = useState(-1);
  const open = idx >= 0;
  const close = useCallback(() => setIdx(-1), []);
  const step = useCallback((n: number) => setIdx((i) => (i + n + DATA.length) % DATA.length), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const groups: { chapter: string; items: (Item & { i: number })[] }[] = [];
  DATA.forEach((item, i) => {
    const last = groups[groups.length - 1];
    if (last && last.chapter === item.chapter) last.items.push({ ...item, i });
    else groups.push({ chapter: item.chapter, items: [{ ...item, i }] });
  });

  const cur = open ? DATA[idx] : null;

  return (
    <main>
      <div className="gallery">
        <div className="g-intro">
          <p className="g-eyebrow">Companion to the book and audiobook</p>
          <h1 className="g-title">Photographs, letters, and maps</h1>
          <p className="g-lede">
            Every image from Jack&rsquo;s Story, gathered in the order the story tells them. The
            photographs, wartime documents, and battle maps an audiobook cannot show you.
          </p>
          <p className="g-note">Heard a scene and want to see it? Find it by chapter below.</p>
        </div>

        {groups.map((g, gi) => {
          const [num, title] = splitChapter(g.chapter);
          return (
            <section className="g-chapter" key={gi}>
              <div className="g-chapter-head">
                {num ? <span className="g-ch-num">{num}</span> : <span className="g-ch-mark">&#10022;</span>}
                <h2 className="g-ch-title">{title}</h2>
              </div>
              <div className="g-grid">
                {g.items.map((it) => (
                  <figure
                    className="g-tile"
                    key={it.id}
                    tabIndex={0}
                    role="button"
                    aria-label={it.caption}
                    onClick={() => setIdx(it.i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setIdx(it.i);
                      }
                    }}
                  >
                    <div className="g-mat">
                      <img loading="lazy" src={it.img} alt={it.alt} />
                    </div>
                    <figcaption>{it.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          );
        })}

        <div className="g-cta">
          <p>These are the images from the book. To read the whole story, Jack&rsquo;s Story is available in every format.</p>
          <Link href="/the-book" className="btn btn-red">Get the book</Link>
        </div>
      </div>

      {open && cur && (
        <div
          className="g-lightbox open"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button className="g-lb-close" onClick={close} aria-label="Close">
            &times;
          </button>
          <button className="g-lb-nav g-lb-prev" onClick={() => step(-1)} aria-label="Previous image">
            &#8249;
          </button>
          <figure className="g-lb-figure">
            <img src={cur.img} alt={cur.alt} />
            <figcaption className="g-lb-meta">
              <span className="g-lb-chapter">{cur.chapter}</span>
              <span className="g-lb-caption">{cur.caption}</span>
              {cur.credit ? <span className="g-lb-credit">{cur.credit}</span> : null}
            </figcaption>
          </figure>
          <button className="g-lb-nav g-lb-next" onClick={() => step(1)} aria-label="Next image">
            &#8250;
          </button>
        </div>
      )}
    </main>
  );
}
