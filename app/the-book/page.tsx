import Link from "next/link";

export default function TheBook() {
  return (
    <main>
      <section className="book-top">
        <div className="book-cover">
          <img src="/cover.jpg" alt="Cover of Jack's Story: 7th Armored Division Tank Commander, World War II" />
        </div>
        <div className="book-info">
          <h1 className="book-title">Jack&rsquo;s Story</h1>
          <p className="book-sub">7th Armored Division Tank Commander, World War II</p>
          <p className="book-byline">by John H. Wilson</p>
          <blockquote className="pullquote">
            &ldquo;A terrific contribution to the literature of World War II.&rdquo;
            Steven Smith, author of 2nd Armored Division: Hell on Wheels
          </blockquote>
          <div className="book-actions">
            <a href="/jacks-story-opening.pdf" target="_blank" rel="noopener" className="btn btn-red">Read the opening</a>
            <a href="#buy" className="btn-line">Where to buy</a>
          </div>
        </div>
      </section>

      <div className="wrap page-wrap">
        <div className="desc">
          <p>
            Jack Wilson arrived in Europe as a tank officer with Company A of the 17th Tank
            Battalion, 7th Armored Division. Within weeks, he and his men were fighting for their
            lives at St. Vith during the Battle of the Bulge.
          </p>
          <p>
            From the desperate defense of St. Vith through the fighting that carried the 7th
            Armored across Germany and into the Ruhr Pocket, Jack&rsquo;s Story follows one young
            tank commander through the final months of World War II.
          </p>
          <p>
            For nearly fifty years, Jack said little about what he had experienced. Then he began
            to tell his family. His wartime letters reveal the young man inside the tank: his
            humor, his love for Jean, his hopes of coming home, and the things he could not tell
            her. His later recollections reveal what the letters could not: the fear, the loss,
            and the decisions of combat.
          </p>
          <p>
            Military records and original after-action reports place his experiences within the
            larger battles unfolding around him. Together they tell the story Jack left behind.
          </p>
        </div>
      </div>

      <section id="buy" className="buy">
        <div className="wrap">
          <h2 className="buy-head">Where to buy</h2>
          <p className="buy-note">
            Available in hardcover, paperback, ebook, and audiobook. A signed copy is available
            directly from John and Janice.
          </p>
          <div className="formats">
            <div className="format">
              <h3>Hardcover</h3>
              <a href="https://www.amazon.com/dp/B0DM5J9Z85" target="_blank" rel="noopener">Amazon</a>
              <a href="https://www.barnesandnoble.com/w/jacks-story-john-h-wilson/1146523263?ean=9798991808026" target="_blank" rel="noopener">Barnes &amp; Noble</a>
            </div>
            <div className="format">
              <h3>Paperback</h3>
              <a href="https://www.amazon.com/dp/B0DJT31T4X" target="_blank" rel="noopener">Amazon</a>
            </div>
            <div className="format">
              <h3>eBook</h3>
              <a href="https://www.amazon.com/dp/B0DJMSM38W" target="_blank" rel="noopener">Amazon Kindle</a>
              <a href="https://www.barnesandnoble.com/w/jacks-story-john-h-wilson/1146523263?ean=9798991808019" target="_blank" rel="noopener">Barnes &amp; Noble Nook</a>
              <a href="https://play.google.com/store/books/details/John_H_Wilson_Jack_s_Story?id=hts9EQAAQBAJ" target="_blank" rel="noopener">Google Play</a>
              <a href="https://www.kobo.com/us/en/ebook/jack-s-story-3" target="_blank" rel="noopener">Kobo</a>
            </div>
            <div className="format">
              <h3>Audiobook</h3>
              <a href="https://www.amazon.com/dp/B0DX2LJJ4T" target="_blank" rel="noopener">Audible</a>
              <a href="https://www.audiobooks.com/audiobook/jacks-story-7th-armored-divisoin-tank-commander-world-war-ii/892925" target="_blank" rel="noopener">Audiobooks.com</a>
              <a href="https://open.spotify.com/show/2oDyGf4jyyMGAFwHcpvctj" target="_blank" rel="noopener">Spotify</a>
            </div>
          </div>
          <p className="signed">
            Want a signed copy? <Link href="/contact">Get in touch</Link> and we&rsquo;ll arrange it.
          </p>
        </div>
      </section>
    </main>
  );
}
