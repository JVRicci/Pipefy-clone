import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import { Container, Label } from "./styles";

export default function index(props: dataCards) {
  const ref = useRef();

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { id: Number },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      console.log(item);
    },
  });

  //Analisar o porque está dando erro nesse hook
  // dragRef(dropRef(ref));

  return (
    <Container ref={dragRef} isDragging={isDragging}>
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
