import Link from "next/link";

export default function Reviews() {
  return (
    <main>
      <div className="reviews-intro">
        <p className="stars-line"><span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span> Five stars from readers on Amazon</p>
        <h1 className="page-title">What readers say</h1>
        <p className="page-lede">
          Early readers, historians, and the children of veterans on Jack&rsquo;s Story, a memoir
          of WWII combat, resilience, and love.
        </p>
      </div>

      <section className="featured">
        <div className="feat-review">
          <p className="feat-quote">
            &ldquo;As far as giving overdue credit to the gallantry and sacrifice of the 7th
            Armored Division, well overdue.&rdquo;
          </p>
          <p className="feat-body">
            New combat memoirs of the European Theater are very welcome, and this one especially,
            since it concerns a tank commander in the 7th Armored Division, perhaps the most
            neglected major combat formation in the US Army in World War II. It is in the Bulge
            itself, during the defense of St. Vith, that Wilson&rsquo;s account becomes both
            thrilling and rare. This is a terrific contribution to the literature of World War II.
          </p>
          <p className="feat-attr">
            Steven Smith
            <span className="cred">Author of 2nd Armored Division: Hell on Wheels</span>
          </p>
        </div>

        <div className="feat-review">
          <p className="feat-quote">
            &ldquo;This is the first book I have read in its entirety in more than 20 years, and I
            finished it in less than a week.&rdquo;
          </p>
          <p className="feat-body">
            The book draws from letters written at the time, after-action reports, and the
            author&rsquo;s conversations with his father, offering a perspective distinct from
            traditional memoirs. The narrative follows Jack&rsquo;s journey across Europe, from
            training through VE Day and beyond.
          </p>
          <p className="feat-attr">James M. Sievert<span className="cred">&ldquo;A Real View of War&rdquo;</span></p>
        </div>

        <div className="feat-review">
          <p className="feat-quote">
            &ldquo;Essential reading for anyone seeking to understand the true experience of those
            who fought to preserve freedom.&rdquo;
          </p>
          <p className="feat-body">
            This memoir shines in its unflinching portrayal of the Battle of the Bulge. The
            pivotal moment when Jack draws his pistol on his commanding officer to prevent
            surrender stands among the most powerful scenes of battlefield leadership I&rsquo;ve
            encountered. What truly elevates the book is its balance of intense combat with the
            letters between Jack and his wife Jean back home.
          </p>
          <p className="feat-attr">Courtney W<span className="cred">&ldquo;Raw, Riveting WWII Tank Commander&rsquo;s Journey&rdquo;</span></p>
        </div>
      </section>

      <div className="reviews-grid-wrap">
        <div className="reviews-grid">
          <div className="rev-card">
            <p className="rev-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className="rev-title">Not a hero but a Patriot</p>
            <p className="rev-text">
              He was forced to face what many of us never are, the inhumanity and horror we are
              capable of when called upon to defend our way of life. One of the quiet heroes of
              that generation who have made us proud to be Americans.
            </p>
            <p className="rev-name">Michael J. Monteith</p>
            <p className="rev-date">May 25, 2025 &middot; Verified Purchase</p>
          </div>

          <div className="rev-card">
            <p className="rev-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className="rev-title">A tank commander at St. Vith in WW2? Good Lord!</p>
            <p className="rev-text">
              An entire German army spearheading right toward him, driving pitch-dark single-lane
              roads at night in a forest, trying to find a way out from being surrounded. Read the
              book to find out how Jack handled this.
            </p>
            <p className="rev-name">TallTexsun</p>
            <p className="rev-date">September 10, 2025</p>
          </div>

          <div className="rev-card">
            <p className="rev-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className="rev-title">An Intimate Window into a Tank Commander&rsquo;s Experience</p>
            <p className="rev-text">
              His letters reveal both the horrific choices he faced as a young commander and his
              tenderness and longing to return to his loving wife. As the daughter of a WWII
              pilot, I deeply admire the bravery of these young soldiers. It&rsquo;s a compelling
              read.
            </p>
            <p className="rev-name">Danna Beal</p>
            <p className="rev-date">February 21, 2025</p>
          </div>

          <div className="rev-card">
            <p className="rev-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className="rev-title">A treasure for descendants of WWII veterans</p>
            <p className="rev-text">
              John&rsquo;s parents left him a treasure trove, and he has done a masterful job of
              weaving their story into the battle timeline of his father&rsquo;s service. KUDOS! A
              great read.
            </p>
            <p className="rev-name">Baby Boomer</p>
            <p className="rev-date">December 12, 2024</p>
          </div>

          <div className="rev-card">
            <p className="rev-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className="rev-title">A must read</p>
            <p className="rev-text">
              This was an eye opener for me. My father fought in WW2, but he never spoke of the
              war. The book gave me a view of how hard our military fought for our freedom, and
              what they saw.
            </p>
            <p className="rev-name">Maureen B.</p>
            <p className="rev-date">Amazon review</p>
          </div>

          <div className="rev-card">
            <p className="rev-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className="rev-title">A must read for history and romance alike</p>
            <p className="rev-text">
              Jack&rsquo;s Story gives the reader a personal insight into what it was like to be in
              the Battle of the Bulge and the tough but victorious march into 1945 Germany. A great
              history lesson with a very personal touch.
            </p>
            <p className="rev-name">Cindy Zammett</p>
            <p className="rev-date">November 23, 2024</p>
          </div>

          <div className="rev-card">
            <p className="rev-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className="rev-title">Great story!</p>
            <p className="rev-text">
              I enjoyed reading this account of an American boy leaving home to fight for his
              country against the Nazi regime in WW2.
            </p>
            <p className="rev-name">John Schlusser</p>
            <p className="rev-date">September 26, 2025</p>
          </div>
        </div>
      </div>

      <div className="reviews-cta">
        <p className="muted" style={{ margin: "0 auto 18px", maxWidth: "50ch" }}>
          Read the opening for yourself, or find the book in every format.
        </p>
        <Link href="/the-book" className="btn btn-red">Get the book</Link>
      </div>
    </main>
  );
}
