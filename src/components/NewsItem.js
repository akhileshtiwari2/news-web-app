import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://media.istockphoto.com/id/1158097410/vector/banner-breaking-news-important-news-headline-in-the-form-of-flashing-lights.jpg?s=2048x2048&w=is&k=20&c=4ZyvZWGN3XZJwJlvu7ZXO9626Y1anUH4BXqZi4JvuF0="
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {!description
                ? "We are still updating click on the read more button Thank you"
                : description}
              ...
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
