import React from "react";
import InfoPost from "../InfoPost";

const FeaturedPost = props => {
  return (
    <article>
      <div className="lg:flex lg:space-x-10">
        <div className="lg:w-8/12">
          <img className="h-full w-full" src="/featuredpost.png" />
        </div>
        <div className="lg:w-4/12 py-4">
          <InfoPost
            link="/blogs"
            imgCard="/featuredpost.png"
            tag="UI DESIGN"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            imgProfile="/featuredprofile.png"
            name="Leslie Alexander"
            job="UI Designer"
          />
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
