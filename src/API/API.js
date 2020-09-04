const url = "https://jsonplaceholder.typicode.com/users";

export async function getObjects() {
  // try {
  // const response =
  fetch(url)
    //   const json = await response.json();
    //   console.log("Успех:", JSON.stringify(json));
    // } catch (error) {
    //   console.error("Ошибка:", error);
    // }
    .then((response) => response.json())
    .then((listObjects) => {
      console.log(listObjects);
      return listObjects;
    });
  // }

  // return await response();
}
