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
        dragClickables: false,
        onPress() {
          lastPos[idx] = { x: this.x, y: this.y };
        },
        onDrag() {
          compact(formFieldsRef.current).forEach((_ref, _idx) => {
            _ref.style.setProperty(
              "background",
              this.hitTest(_ref, "50%") ? "#e6e4e4" : "unset"
            );
          });
        },
        onDragEnd() {
          compact(formFieldsRef.current).forEach((_ref, _idx) => {
            _ref.style.setProperty("background", "unset");
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
    addFormFields,
  };
};
