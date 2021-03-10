import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import { Box } from '@styli/react';

export default () => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'right',
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  return (
    <Box p-200>
      <Box
        s-100
        bgBlue20
        type="button"
        ref={setReferenceElement}
        style={
          {
            // width: 100,
            // height: 100,
          }
        }
      >
        Reference element
      </Box>

      <Box
        s-200
        bgYellow20
        ref={setPopperElement}
        style={{
          ...styles.popper,
          width: 200,
          height: 200,
        }}
        {...attributes.popper}
      >
        Popper element
        <Box ref={setArrowElement} style={styles.arrow} />
      </Box>
    </Box>
  );
};
