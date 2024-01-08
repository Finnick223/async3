import { getDogs } from './data/getDogs';
import { fetchDatalist } from './data/fetchDatalist';

export const getElements = () => {
  const container = document.querySelector('.container');
  const submit = document.querySelector('.submit');
  const input = document.querySelector('.breed') as HTMLInputElement;
  if (!container || !submit || !input)
    throw new Error('dom elements doesnt exist');
  return {
    container,
    submit,
    input,
  };
};

const renderImage = (link: string) => {
  const img = document.createElement('img');
  img.src = link;
  img.classList.add('child');
  const { container } = getElements();
  container?.appendChild(img);
};

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const init = () => {
  fetchDatalist();
  const { submit, input } = getElements();
  submit?.addEventListener('click', async () => {
    try {
      const images = await getDogs(String(input.value));
      // for (const i in images.message) {
      // console.log(images.message[i]);
      renderImage(images.message[getRndInteger(1, 10)]);
      // }
      input.value = '';
    } catch (err) {
      console.log(err);
    }
  });
};
init();
