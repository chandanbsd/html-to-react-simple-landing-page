import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <Card
            title="Tom and Jerry"
            imageUrl="https://upload.wikimedia.org/wikipedia/en/5/5f/TomandJerryTitleCardc.jpg"
            cardBody="Tom and Jerry is perhaps the most popular cartoon of the 21st century"
            cardBtn="Meet Tom and Jerry"
          />
          <Card
            title="Dragon Booster"
            imageUrl="https://upload.wikimedia.org/wikipedia/en/e/ef/Dragon_booster_titles.jpg"
            cardBody="If you haven't watched dragon booster, then you should definitely take a look at this cool cartoon"
            cardBtn="Watch Dragon Booster"
          />
          <Card
            title="Pokemon"
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            cardBody="One of the biggest franchise in Cartoon Entertainment"
            cardBtn="Play Pokemon Go"
          />
        </div>
      </div>
    </section>
  );
};

export default Cards;
