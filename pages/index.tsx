import Carousel from '../components/carousel';

const data = [
  {
    id: '1',
    title: 'Conference',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
  },
  {
    id: '2',
    title: 'spiderman',
    imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
  },
  {
    id: '3',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
  },
  {
    id: '4',
    imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
  },
  {
    id: '5',
    title: 'Clippy',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
  },
];

const Home: React.FC = () => {
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <Carousel items={data} />
    </div>
  );
};

export default Home;
