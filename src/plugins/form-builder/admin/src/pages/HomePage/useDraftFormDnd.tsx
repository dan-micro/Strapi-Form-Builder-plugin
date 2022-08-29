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

  const addFormFields = (ref: HTMLDivElement) => {
    if (formFieldsRef.current.every((widgetRef) => widgetRef !== ref)) {
      formFieldsRef.current.push(ref);
    }
  };

  useEffect(() => {
    if (isEmpty(formFieldsRef.current)) {
      return;
    }
    const lastPos = {};

    compact(formFieldsRef.current).forEach((ref, idx) => {
      if (Draggable.get(ref)) {
        return;
      }
      Draggable.create(ref, {
        type: "x,y",
        dragClickables: true,
        onPress() {
          lastPos[idx] = { x: this.x, y: this.y };
        },
        onDragEnd() {
          compact(formFieldsRef.current).forEach((_ref, _idx) => {
            if (this.hitTest(_ref)) {
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
    addFormFields,
  };
};
