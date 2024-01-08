export const getDogs = (breedName: string) => {
  return fetch(`https://dog.ceo/api/breed/${breedName}/images`)
    .then((data) => data.json())
    .then((img) => {
      return img;
    });
};
