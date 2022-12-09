axios.get(" https://restcountries.com/v3.1/all").then((response) => {
  let name = response.data;
  let flags = response.data;

  name.forEach((element) => {
    let divElement = document.createElement("div");
    let FlagElement = document.createElement("img");
    divElement.innerHTML = element.name.common;
    FlagElement.src = element.flags.svg;

    document.querySelector("div").appendChild(divElement);
    document.querySelector("div").appendChild(FlagElement);
    console.log("DATA ", response.data);
    console.log(flags);
  });
});
