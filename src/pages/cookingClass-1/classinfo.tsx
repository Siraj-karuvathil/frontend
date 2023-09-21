import React, { FC, memo, useState } from 'react'
import { ClassInfo, Lesson } from './useClassDetails';


interface ClassinfoProps {
  lesson: Lesson | null;
  classDetails: ClassInfo | null;
}


const Classinfo: FC<ClassinfoProps> = ({ lesson, classDetails }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className="container pt-5">
      <div className="block-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Class Info
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Instructor(s)
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          FAQ
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={
            toggleState === 1 ? "content  active-content" : "content"
          }
        >
          <p>
            {classDetails?.classInfo}
          </p>
        </div>

        <div
          className={
            toggleState === 2 ? "content  active-content" : "content"
          }
        >

          <p>
            {classDetails?.instrecterName}
          </p>
        </div>

        <div
          className={
            toggleState === 3 ? "content  active-content" : "content"
          }
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            sed nostrum rerum laudantium totam unde adipisci incidunt modi
            alias! Accusamus in quia odit aspernatur provident et ad vel
            distinctio recusandae totam quidem repudiandae omnis veritatis
            nostrum laboriosam architecto optio rem, dignissimos
            voluptatum beatae aperiam voluptatem atque. Beatae rerum
            dolores sunt.
          </p>
        </div>
      </div>
    </div>
  )
}

export default memo(Classinfo)