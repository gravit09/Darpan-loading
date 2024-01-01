import React from "react";
import image1 from "./images/category-1.svg";
import image2 from "./images/category-2.svg";
import image3 from "./images/category-3.svg";
import image4 from "./images/category-4.svg";

function Category() {
  return (
    <section class="section category" aria-label="category">
      <div class="container">
        <p class="section-subtitle">Categories</p>

        <h2 class="h2 section-title">
          Online <span class="span">Classes</span> For Remote Learning.
        </h2>

        <p class="section-text">
          Consectetur adipiscing elit sed do eiusmod tempor.
        </p>

        <ul class="grid-list">
          <li>
            <div class="category-card" style={{ "--color": " 170, 75%, 41%" }}>
              <div class="card-icon">
                <img
                  src={image1}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Online Degree Programs"
                  class="img"
                />
              </div>

              <h3 class="h3">
                <a href="#" class="card-title">
                  Online Degree Programs
                </a>
              </h3>

              <p class="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>

              <span class="card-badge">7 Courses</span>
            </div>
          </li>

          <li>
            <div class="category-card" style={{ "--color": "351, 83%, 61%" }}>
              <div class="card-icon">
                <img
                  src={image2}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Non-Degree Programs"
                  class="img"
                />
              </div>

              <h3 class="h3">
                <a href="#" class="card-title">
                  Non-Degree Programs
                </a>
              </h3>

              <p class="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>

              <span class="card-badge">4 Courses</span>
            </div>
          </li>

          <li>
            <div class="category-card" style={{ "--color": "42, 94%, 55%" }}>
              <div class="card-icon">
                <img
                  src={image3}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Off-Campus Programs"
                  class="img"
                />
              </div>

              <h3 class="h3">
                <a href="#" class="card-title">
                  Off-Campus Programs
                </a>
              </h3>
              <p class="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>
              <span class="card-badge">8 Courses</span>
            </div>
          </li>
          <li>
            <div class="category-card" style={{ "--color": " 42, 94%, 55%" }}>
              <div class="card-icon">
                <img
                  src={image4}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Hybrid Distance Programs"
                  class="img"
                />
              </div>
              <h3 class="h3">
                <a href="#" class="card-title">
                  Hybrid Distance Programs
                </a>
              </h3>
              <p class="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>
              <span class="card-badge">8 Courses</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Category;
