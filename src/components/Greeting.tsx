import data from "../assets/data.json";

type Props = {
  id: number;
};

export default function Greeting({ id }: Props) {
  return (
    <h1 className="col-span-2 row-span-1 w-full h-full text-left text-3xl">
      Hi, {data.firmen[id].name}
      <br />
      ich bin Nikita Nakropin
    </h1>
  );
}
