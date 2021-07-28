import React from "react";
import InfoPost from "../InfoPost";

const CardPost = props => {
  return (
    <article>
      <div className="w-[340px] mt-8">
        <img src={props.imgCard} />
        <InfoPost
          link={props.link}
          imgCard={props.imgCard}
          tag={props.tag}
          date={props.date}
          title={props.title}
          description={props.description}
          imgProfile={props.imgProfile}
          name={props.name}
          job={props.job}
        />
      </div>
    </article>
  );
};

export default CardPost;
