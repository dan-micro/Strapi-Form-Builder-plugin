import { compact, isEmpty } from "lodash-es";
import { useRef, useEffect, RefObject } from "react";
import Draggable from "gsap/dist/Draggable";
import gsap from "gsap";
import { swapArrayLocs } from "../../utils/swapArrayElements";
import { formConfigAtom } from "./store";
import { useAtom } from "jotai";

export const useDraftFormDnd = () => {
  const [formConfig, setFormConfig] = useAtom(formConfigAtom);
  const formFieldsRef = useRef<HTMLDivElement[]>([]);
  const dragFields = useRef<HTMLDivElement[]>([]);

  const addFormFields = (ref: HTMLDivElement) => {
    if (formFieldsRef.current.every((widgetRef) => widgetRef !== ref)) {
      formFieldsRef.current.push(ref);
    }
  };

  const addDragFields = (ref: HTMLDivElement) => {
    if (dragFields.current.every((widgetRef) => widgetRef !== ref)) {
      dragFields.current.push(ref);
    }
  };

  useEffect(() => {
    if (isEmpty(dragFields.current)) {
      return;
    }
    const lastPos = {};
    let prevColor;
    compact(dragFields.current).forEach((ref, idx) => {
      if (Draggable.get(ref)) {
        return;
      }
      Draggable.create(ref, {
        type: "x,y",
        dragClickables: false,
        onPress() {
          lastPos[idx] = { x: this.x, y: this.y };
        },
        onDrag() {
          compact(dragFields.current).forEach((_ref, _idx) => {
            // prevColor = _ref.style.getPropertyValue("background");
            // _ref.style.setProperty(
            //   "background",
            //   this.hitTest(_ref, "50%") ? "#e6e4e4" : prevColor
            // );
          });
        },
        onDragEnd() {
          compact(dragFields.current).forEach((_ref, _idx) => {
            // _ref.style.setProperty("background", prevColor);
            if (this.hitTest(_ref, "50%")) {
              setFormConfig((prev) => swapArrayLocs(prev, _idx, idx));
            }
          });
          gsap.to(ref, { ...lastPos[idx] });
        },
      });
    });
  }, [formConfig]);

  return {
    formFieldsRef,
    addDragFields,
    addFormFields,
  };
};
