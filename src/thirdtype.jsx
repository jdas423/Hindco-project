export default function Third({article}) {
    return (
      <div className="third-wrapper wrap">
        <div className="third">
          <div className="topic">{article.topic}</div>
          <div className="heading">{article.heading}</div>
          <div className="content">
            <div className="sub-topic-1">
              <div className="sub-heading">{article.content.topic1.heading} </div>
              <div className="sub-content">
               {article.content.topic1.content}
              </div>
            </div>
            <div className="sub-topic-2">
              <div className="sub-heading">{article.content.topic2.heading} </div>
              <div className="sub-content">
               {article.content.topic2.content}
              </div>
            </div>
            <div className="sub-topic-3">
              <div className="sub-heading">{article.content.topic3.heading} </div>
              <div className="sub-content">
                {article.content.topic3.content}
              </div>
            </div>
            <div className="sub-topic-4">
              <div className="sub-heading">{article.content.topic4.heading} </div>
              <div className="sub-content">
                {article.content.topic4.content}
              </div>
            </div>
          </div>
          <div className="btn-1">{article.buttons.button1}</div>
        </div>
      </div>
    );
  }