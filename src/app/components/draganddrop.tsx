// components/DragAndDrop.tsx
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useState } from 'react';

// Sample categories to organize
const initialItems = [
  'Automotive Machinery',
  'Processing Machinery',
  'Monitoring Gadgets',
  'Soil Testing Instruments',
  'Harvesting Equipment',
];

export default function DragAndDrop() {
  const [items, setItems] = useState(initialItems);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;

    const updatedItems = Array.from(items);
    const [movedItem] = updatedItems.splice(source.index, 1);
    updatedItems.splice(destination.index, 0, movedItem);

    setItems(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="categories">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-gray-100 p-4 rounded-lg"
          >
            {items.map((item, index) => (
              <Draggable key={item} draggableId={item} index={index}>
                {(provided) => (
                  <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="p-2 mb-2 bg-white border rounded shadow-sm"
                  >
                    {item}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
