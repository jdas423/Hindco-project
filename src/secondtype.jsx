export default function Second({article}) {
    return (
      <div className="second-wrapper wrap">
        <div className="second">
          <div className="topic">{article.topic}</div>
          <div className="heading">{article.heading}</div>
          <div className="content">
            <p>
              {article.content.p1}
            </p>
            <p>
              {article.content.p2}
            </p>
          </div>
          <div className="btn-1-wrapper">
            <button className="btn-1">{article.buttons.button1}</button>
          </div>
        </div>
      </div>
    );
  }