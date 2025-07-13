import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import { Container, Label } from "./styles";

type DragItem = {
  index: number;
  id: string;
  type: string;
};

export default function index(props: dataCards, index : number) {
  const ref = useRef();

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: {index},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop<DragItem>({
    accept: "CARD",
    hover(item , monitor) {
      console.log(item.index);
      // console.log(index);
      
    },
  });

  //Analisar o porque está dando erro nesse hook
  dragRef(dropRef(ref));

  return (
    <Container ref={dragRef} draggingEffect={isDragging }>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>{props.content}</p>
      {props.user && (
        <img
          src="https://avatars.githubusercontent.com/u/54457696?s=48&v=4"
          alt=""
        />
      )}
    </Container>
  );
}
