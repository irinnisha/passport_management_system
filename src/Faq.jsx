import React from 'react';
import './faq.css'; 

const Faq = () => {
  return (
    <div id="partial-view-container">
      <div className="ui menu faq-tabs">
        <a className="item">FAQ 1</a>
        <a className="item">FAQ 2</a>
        <a className="item">FAQ 3</a>
        <a className="item">FAQ 4</a>
      </div>

      <div className="ui grid faq-tab-segment">
        <div className="sixteen wide column">
          <div className="ui accordion">
            <div className="title">FAQ 1</div>
            <div className="content">Content for FAQ 1</div>

            <div className="title">FAQ 2</div>
            <div className="content">Content for FAQ 2</div>

            <div className="title">FAQ 3</div>
            <div className="content">Content for FAQ 3</div>

            <div className="title">FAQ 4</div>
            <div className="content">Content for FAQ 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
