import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import { Container, Label } from "./styles";

type DragItem = {
  index: number;
  id: string;
  type: string;
};

type CardProps = {
  id: number;       // aceitando number
  content: string;
  user?: string | null;
  index: number;
  labels: string[]; // adiciona se precisar
};

export default function Card({ id, content, user, index }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { id, index, type: "CARD" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop<DragItem>({
    accept: "CARD",
    hover(item, monitor) {
      console.log("Hover", item.id, index);
      // Aqui você pode colocar lógica para trocar os cards
    },
  });

  // Conectando os refs
  dragRef(dropRef(ref));

  return (
    <Container ref={ref} draggingEffect={isDragging}>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>{content}</p>
      {user && (
        <img
          src="https://avatars.githubusercontent.com/u/54457696?s=48&v=4"
          alt=""
        />
      )}
    </Container>
  );
}
