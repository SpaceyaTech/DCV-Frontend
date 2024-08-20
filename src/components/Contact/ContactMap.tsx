import React from "react";

const ContactMap = () => {
  return (
    <section>
      <div className="mt-4 md:mt-8">
        <iframe
          width={"1036"}
          height={"380"}
          loading="lazy"
          // allowfullscreen
          // referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDcw7i5NPQBgRU-0ZZz3rmG8&key=AIzaSyDB2ZqfJDDyugo2Lefzt7JQtJoLX_M7KI0"
          className="mx-auto max-w-md rounded-lg lg:max-w-6xl"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;

//
