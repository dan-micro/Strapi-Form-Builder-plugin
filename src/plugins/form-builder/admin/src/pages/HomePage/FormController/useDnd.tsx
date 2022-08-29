import { isEmpty } from "lodash-es";
import { useRef, useEffect, RefObject } from "react";
import Draggable from "gsap/dist/Draggable";
import gsap from "gsap";
import { formBuildModalAtom } from "../store";
import { useUpdateAtom } from "jotai/utils";
gsap.registerPlugin(Draggable);

export const useDnd = (
  dropRef: RefObject<HTMLDivElement>,
  data: any[]
): {
  addWidgetRefToWidgetsRefs: (ref: HTMLDivElement) => void;
} => {
  const setFormBuildModal = useUpdateAtom(formBuildModalAtom);
  const widgetRefs = useRef<HTMLDivElement[]>([]);
  const addWidgetRefToWidgetsRefs = (ref: HTMLDivElement) => {
    widgetRefs.current.push(ref);
  };

  useEffect(() => {
    if (isEmpty(widgetRefs.current)) {
      return;
    }
    const lastPos = {};
    widgetRefs.current.forEach((ref, idx) => {
      Draggable.create(ref, {
        type: "x,y",
        onPress() {
          lastPos[idx] = { x: this.x, y: this.y };
        },
        onDragEnd() {
          if (dropRef && this.hitTest(dropRef.current)) {
            console.log("==> hit passed ==>", ref.id);
            setFormBuildModal(ref.id);
          }
          const tl = gsap.timeline();
          tl.to(ref, { opacity: 0, display: "none" });
          tl.to(ref, { ...lastPos[idx] });
          tl.to(ref, { opacity: 1, display: "block" });
        },
      });
    });
  }, [data]);

  return {
    addWidgetRefToWidgetsRefs,
  };
};
