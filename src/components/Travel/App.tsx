import "./App.css";
import Item from "./Item";

function TravelGuide() {
  return (
    <>
      <div className="app">
        <div className="nav">
          <i className="bi-globe2"></i> My Travel Guide.
        </div>
        <div className="container">
          <Item
            name="Kyoto"
            time="Spring (March to May) & Autumn (September to November)"
            location="Japan"
            img="/TravelGuide/blob/main/public/img/kyoto.jpg"
            description="Kyoto is the heart of Japan’s traditional culture. It’s famous for its stunning temples,
                        beautiful cherry blossoms in spring, and peaceful bamboo forests. You can explore old tea houses, watch
                        geishas in Gion, and enjoy authentic Japanese cuisine like matcha and ramen."
          />
          <Item
            name="Santorini"
            time="Late Spring to Early Fall (April to October)"
            location="Greece"
            img="/TravelGuide/img/santorini.webp"
            description="Santorini is a dream destination known for its white-washed houses, blue-domed churches, and breathtaking sunsets over the Aegean Sea. You can relax on volcanic beaches, sail around the island, and enjoy fresh seafood while soaking in the spectacular views."
          />
          <Item
            name="Swiss Alps"
            time="Winter (December to February) & Summer (June to August)"
            location="Switzerland"
            img="/TravelGuide/img/swiss-alps.jpg"
            description="The Swiss Alps offer breathtaking scenery with snow-capped mountains, crystal-clear lakes, and picturesque villages. Whether you love skiing, hiking, or simply enjoying nature, this place has it all. Take a scenic train ride on the Glacier Express or try Swiss chocolate and cheese!"
          />
        </div>
      </div>
    </>
  );
}

export default TravelGuide;
