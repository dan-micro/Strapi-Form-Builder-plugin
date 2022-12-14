import { useRef, useEffect, RefObject, MutableRefObject } from 'react';

import gsap from 'gsap';
import Draggable from 'gsap/dist/Draggable';
import { useUpdateAtom } from 'jotai/utils';
import { compact, isEmpty } from 'lodash-es';

import { FormBuildModal, formBuildModalAtom, formConfigAtom } from '../store';

export const useFormControllerDnd = (
  dropRef: RefObject<HTMLDivElement>,
  formFieldsRef: MutableRefObject<HTMLDivElement[]>,
  data: any[],
): {
  widgetRefs: MutableRefObject<HTMLDivElement[]>;
  addWidgetRefToWidgetsRefs: (ref: HTMLDivElement) => void;
} => {
  const setFormBuildModal = useUpdateAtom(formBuildModalAtom);
  const widgetRefs = useRef<HTMLDivElement[]>([]);
  const addWidgetRefToWidgetsRefs = (ref: HTMLDivElement) => {
    if (widgetRefs.current.every((widgetRef) => widgetRef !== ref)) {
      widgetRefs.current.push(ref);
    }
  };

  useEffect(() => {
    if (isEmpty(widgetRefs.current)) {
      return;
    }
    const lastPos = {};
    widgetRefs.current.forEach((ref, idx) => {
      Draggable.create(ref, {
        type: 'x,y',
        dragClickables: true,
        onPress() {
          lastPos[idx] = { x: this.x, y: this.y };
        },
        onDragEnd() {
          if (dropRef && this.hitTest(dropRef.current)) {
            let newFormModalConfig: FormBuildModal = {
              mode: 'create',
              interfaceComponent: ref.id,
              idx: '',
            };
            compact(formFieldsRef.current).forEach((formField) => {
              if (this.hitTest(formField)) {
                console.log('==> formField,ref ==>', formField, ref);
                newFormModalConfig = {
                  mode: 'create',
                  interfaceComponent: ref.id,
                  idx: formField.id,
                };
              }
            });
            console.log('==> newFormModalConfig ==>', newFormModalConfig);
            setFormBuildModal(newFormModalConfig);
          }

          const tl = gsap.timeline();
          tl.to(ref, { opacity: 0, display: 'none' });
          tl.to(ref, { ...lastPos[idx] });
          tl.to(ref, { opacity: 1, display: 'block' });
        },
      });
    });
  }, [data]);

  return {
    widgetRefs,
    addWidgetRefToWidgetsRefs,
  };
};
