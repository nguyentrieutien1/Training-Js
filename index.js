// var -> cho gán lại, cho khai khai báo lại (Không có scope block)
// let -> cho gán lại, nhưng không cho khai báo lại ( có scope block)
// const -> không cho gán lại, không cho khai báo lại ( có scope block)

// const promise = new Promise(function (res, rej) {
//   const dulieu = [10, 30, 20];
//   setTimeout(() => {
//     res(dulieu);
//   }, 3000);
// });
// console.log(promise);
// async function run() {
//   const dulieu = await promise;
//   console.log(dulieu);
//   console.log(`setTimeout`);
// }
// run();
const reuslt = fetch(`https://fakestoreapi.com/products/`);
async function getData() {
  const result2 = await reuslt;
  const reuslt3 = await result2.json();

  const reusltMap = reuslt3.map(function (value, index) {
    console.log(value);
    return ` <img src="${value.image}" alt="">
                <h3>${value.price}</h3>
              `;
  });
  document.querySelector("body").innerHTML = reusltMap;
}
getData();
