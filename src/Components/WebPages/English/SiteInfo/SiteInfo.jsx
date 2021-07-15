const SiteInfo = (props) => {
  return (
    <main>
      <section className="bg-light">
        <div className="container">
          <h1 className="fs-1 lead">Site Developers</h1>
          <ul>
            <li>Larina Fu</li>
            <li>Katherine Hu</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="fs-1 lead">Site Moderators</h1>
          <ul>
            <li>Larina Fu</li>
            <li>Katherine Hu</li>
            <li>Person 2</li>
            <li>Person 3</li>
            <li>Person 4</li>
          </ul>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <h1 className="fs-1 lead">Tools used to create site</h1>
          <ul>
            <li>React</li>
            <li>Firebase</li>
            <li>Bootstrap</li>
            <li>GitHub</li>
            <li>VSCode</li>
          </ul>
          <p>
            Please look at the public <a href="#">GitHub repository</a> for this site
            for a full outline of the coding process.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SiteInfo;
