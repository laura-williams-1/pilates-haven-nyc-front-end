import "./About.css";
const About = () => {
  return (
    <div>
      <header>
        <h1>Pilates Haven NYC</h1>
      </header>

      <div className="why">
        <h2>Why Pilates Haven?</h2>
        As a pilates enthusiast, with over 100 studios in NYC, it can be quite a
        "stretch" to find the perfect one. Pilates Haven is meant to fins
        studios near you that offer what you're looking for
      </div>

      <div className="offers">
        <h3>Offers</h3>

        <div className="Mat">
          <h4>Mat</h4>
          <div className="Mat-details">
            Mat Pilates refers to a form of Pilates exercises performed on a mat
            using body weight resistance and minimal props, focusing on core
            strength, flexibility, and overall body conditioning
          </div>
        </div>

        <div className="Reformer">
          <h4>Reformer</h4>
          <div className="Reformer-details">
            Pilates Reformer is a type of equipment used in Pilates that
            consists of a sliding carriage, adjustable springs, and various
            attachments. It allows for a wide range of exercises that focus on
            strength, flexibility, and alignment by utilizing the resistance and
            support provided by the reformer apparatus.
          </div>
        </div>
        <div className="Duets">
          <h4>Duets</h4>
          <div className="Duets-details">
            Duets in Pilates refer to sessions where two individuals share the
            same instructor and equipment. It provides an opportunity for
            partners to engage in synchronized exercises, receive personalized
            attention, and support each other's progress while benefiting from
            the equipment-based Pilates training.
          </div>
        </div>
        <div className="Privates">
          <h4>Privates</h4>
          <div className="Privates-details">
            Privates in Pilates refer to sessions where one individual has
            access to an instructor and equipment. It provides an opportunity
            for a person receive personalized attention, and support from an
            instuctor privately.
          </div>
        </div>

        <div className="Group">
          <h4>Group</h4>
          <div className="group-details">
            Group Pilates refer to sessions where a group of individuals share
            the same instructorin a session. This is usually the most
            cost-effective approach for those wanting to start pilates classes.
          </div>
        </div>

        <div className="membership">
          <h4>Membership</h4>
          <div className="membership-details">
            When a Pilates studio offers memberships, it typically means they
            provide recurring monthly or annual packages that grant members
            access to a certain number of classes or sessions per week. The
            benefits of Pilates memberships often include cost savings, priority
            scheduling, exclusive perks, and a more committed approach to
            achieving fitness goals through regular practice.
          </div>
        </div>
        <div className="new-client">
          <h4>New Client</h4>
          <div className="new-client-details">
            When a Pilates studio offers a new client deal, it typically means
            they have a special promotion or discounted package specifically
            designed for first-time clients to try out their services. The
            benefits of a new client deal include the opportunity to experience
            Pilates at a lower cost, explore the studio's offerings, and
            potentially commit to a long-term fitness routine with the studio.
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
