import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img"
            src="https://i.picsum.photos/id/353/1920/1080.jpg?hmac=n0nZKXMouKn3eIwf-dSCrClCTtBzRYXvutncrKJeIg8"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title display-3">Ecomm Demo</h5>
              <p className="card-text lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime alias perferendis repellat labore suscipit temporibus? Obcaecati doloremque, facere ab dolor ratione laudantium sapiente porro quos, praesentium repellendus voluptatibus autem assumenda.
                Laboriosam corrupti numquam nobis similique eaque accusamus enim eum asperiores reprehenderit? Suscipit fugit nam voluptas dignissimos nemo corporis dolores earum, mollitia assumenda sapiente modi, hic necessitatibus. Quas nulla consequatur laboriosam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
