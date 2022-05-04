import React from "react";

import shoes from "../../public/assets/images/image-product-1.jpg";

import "../styles/App.scss";

const App = () => {
	return (
		<>
			<header>
      <div>
				<img src={shoes} alt="shoes" />
      </div>
        <h1>hola mundo</h1>
			</header>
		</>
	);
};

export default App;
