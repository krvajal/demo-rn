const fetchProducts = () => {
  return fetch("http://165.227.208.17/api/v1/products?branch=1")
    .then(response => response.json())
    .then(responseJson => responseJson.additionals);
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve([
  //         {
  //           id: 1,
  //           title: "Appointments",
  //           icon: "av-timer"
  //         },
  //         {
  //           id: 2,
  //           title: "Trips",
  //           icon: "flight-takeoff"
  //         }
  //       ]);
  //     }, 1500);
  //   });
};

export { fetchProducts };
