import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/maneesha.jpg", name: "Maneesha" },
    { id: 2, image: "/images/diana.jpg", name: "Diana" },
    { id: 3, image: "/images/sree.jpg", name: "Sree" },
    { id: 4, image: "/images/malu.jpg", name: "Malu" },
    { id: 5, image: "/images/jisha.jpg", name: "Jisha" },
    { id: 6, image: "/images/Paru.jpg", name: "Paru" },
    
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;