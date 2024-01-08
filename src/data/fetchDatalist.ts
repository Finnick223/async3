export const fetchDatalist = () => {
  fetch('https://dog.ceo/api/breeds/list')
    .then((res) => res.json())
    .then((data) => {
      data.message.forEach((item: string) => {
        const option = document.createElement('option');
        option.value = item;
        const breed = document.getElementById('list');
        if (!breed) throw new Error('input doesnt exist');
        breed.appendChild(option);
      });
    })
    .catch((err) => err);
};
