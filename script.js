let inputValue = document.getElementById("inputId");
let flagValue = document.getElementById("countryName");
let mainElements = document.getElementById("main");
let optionValue = document.querySelectorAll("#optionValue");

axios.get(" https://restcountries.com/v3.1/all").then((response) => {
  let name = response.data;
  let flags = response.data;

  name.forEach((element) => {
    let divElement = document.createElement("div");
    let FlagElement = document.createElement("img");
    divElement.setAttribute("id", "my-id");
    FlagElement.setAttribute("id", "my-img");
    divElement.innerHTML = "Name: " + element.name.common;
    FlagElement.src = element.flags.svg;

    document.getElementById("main").appendChild(divElement);
    divElement.appendChild(FlagElement);

    // console.log("DATA ", response.data);
    // console.log(flags);
  });
});

let reloader = () => {
  axios.get(" https://restcountries.com/v3.1/all").then((response) => {
    let name = response.data;
    let flags = response.data;

    name.forEach((element) => {
      let divElement = document.createElement("div");
      let FlagElement = document.createElement("img");
      divElement.setAttribute("id", "my-id");
      FlagElement.setAttribute("id", "my-img");
      divElement.innerHTML = "Name: " + element.name.common;
      FlagElement.src = element.flags.svg;

      document.getElementById("main").appendChild(divElement);
      divElement.appendChild(FlagElement);

      // console.log("DATA ", response.data);
      // console.log(flags);
    });
  });
};

let myFunction = () => {
  mainElements.innerHTML = " ";
  if (inputValue.value == " ") {
    mainElements.innerHTML = " ";
    alert("Input Value can not be empty");
  }

  axios
    .get(` https://restcountries.com/v3.1/name/${inputValue.value}`)
    .then((response) => {
      const { data } = response;
      console.log(response.data);

      response.data.forEach((element) => {
        let divElement = document.createElement("div");
        let FlagElement = document.createElement("img");
        divElement.setAttribute("id", "my-id");
        FlagElement.setAttribute("id", "my-img");
        divElement.innerHTML = "Name: " + element.name.common;
        FlagElement.src = element.flags.svg;

        document.getElementById("main").appendChild(divElement);
        divElement.appendChild(FlagElement);

        // console.log("DATA ", response.data);
        // console.log(flags);
      });
      // console.log("DATA ", response.data);
    });
};
function myRegion() {
  for (let i = 0; i < countries.length; i++) {
    var x = document.getElementById("optionValue").options[i].value;
    document.getElementById("demo").innerHTML = x;
  }
}

inputId.addEventListener("keypress", myFunction);

