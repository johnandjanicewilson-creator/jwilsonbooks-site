import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-words">
          <p className="flag">A true story of the Second World War</p>
          <h1>He was twenty-three years old, newly married, with a baby on the way when he went into combat.</h1>
          <p className="lede">
            For nearly fifty years, Jack Wilson said almost nothing about the war. Then his son
            asked, and the letters came to light. This is the story they tell.
          </p>
          <div className="hero-actions">
            <Link href="/the-book" className="btn btn-red">Buy the Book</Link>
            <a href="/jacks-story-opening.pdf" target="_blank" rel="noopener" className="btn btn-ghost">Read the opening</a>
          </div>
          <p className="hero-tag"><span className="star">&#9733;</span> A son. A soldier. A story of courage.</p>
        </div>
        <div className="hero-cover">
          <img src="/cover.jpg" alt="Cover of Jack's Story: 7th Armored Division Tank Commander, World War II, by John H. Wilson" />
        </div>
      </section>

      <section className="home-quote">
        <div className="home-quote-inner">
          <p className="hq-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
          <blockquote className="hq-text">
            &ldquo;This is the first book I have read in its entirety in more than 20 years, and I
            finished it in less than a week.&rdquo;
          </blockquote>
          <p className="hq-attr">James M. Sievert, reader review</p>
          <Link href="/reviews" className="btn-line">Read all the reviews</Link>
        </div>
      </section>

      <section className="home-teaser">
        <div className="home-teaser-inner">
          <h2 className="home-h2">A tank commander, his letters, and a son who finally asked</h2>
          <p>
            From the desperate defense of St. Vith to the long road home, Jack&rsquo;s Story
            follows one young officer through the final months of the war, told through the letters
            he wrote to Jean and the memories he kept to himself for fifty years.
          </p>
          <div className="home-teaser-actions">
            <Link href="/the-book" className="btn btn-red">About the book</Link>
            <a href="/jacks-story-opening.pdf" target="_blank" rel="noopener" className="btn-line">Read the opening</a>
          </div>
        </div>
      </section>

      <section className="home-gallery">
        <div className="home-gallery-inner">
          <h2 className="home-h2">Photographs, letters, and maps</h2>
          <p className="home-sub">
            Jack&rsquo;s own photographs, his wartime letters, and the battle maps of where he
            fought, gathered chapter by chapter.
          </p>
          <div className="home-peek">
            <Link href="/gallery" className="peek" aria-label="See the gallery">
              <img src="/gallery/img-002.png" alt="Jack Wilson in uniform" />
            </Link>
            <Link href="/gallery" className="peek" aria-label="See the gallery">
              <img src="/gallery/img-004.jpg" alt="A caricature of Jack and Jean" />
            </Link>
            <Link href="/gallery" className="peek" aria-label="See the gallery">
              <img src="/gallery/img-009.jpg" alt="Siegfried Line dragon's teeth" />
            </Link>
            <Link href="/gallery" className="peek" aria-label="See the gallery">
              <img src="/gallery/img-027.png" alt="Battle map of the Ruhr Pocket" />
            </Link>
          </div>
          <Link href="/gallery" className="btn-line">See the gallery</Link>
        </div>
      </section>
    </main>
  );
}
