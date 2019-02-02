import React from 'react'

// React Utils
const getDomProps = (props) => Object.entries(props).reduce((acc, [k, v]) => {
  return k.match(/prop-/)
    ? { ...acc, [k]: v.toString() }
    : acc
}, {});



const withProps = (children, props) => {
  return React.Children.map(children, c => {
    return React.cloneElement(c, props)
  })
}

// const childrenWithProps = React.Children.map(props.children, c => {
//   console.log(state)
//   const childProps = {
//     ...state,
//     // formState: state.formState,
//     setValue: this.setValue,
//     submitForm: props.submitForm,
//     canSubmit: props.canSubmit,
//     formName: props.name,
//   }
//
//
// });



// Utils
const defaultTo = (v, d) => isUndefined(v) ? d : v;



// Iterables
const isLast = (i, l) => i === l - 1;

const isFirst = (i) => i === 0;

const seq = (n) => Array.from(Array(n), (_, i) => i);

const fill = (n, v) => Array.from(Array(n), () => v);

// FP
const compose = (...fs) => fs.reduceRight((f, g) => (...a) => g(f(...a)), v => v)



// Boolean
const isTrue = (v) => v === true;

const isFalse = (v) => v === false;

const allFalse = (...args) => args.every(a => isFalse(a));

const allTrue = (...args) => args.every(a => isTrue(a));

const oneFalse = (...args) => args.some(a => isFalse(a));

const oneTrue = (...args) => args.some(a => isTrue(a));



// Typechecks
const isUndefined = (v) => v === undefined;






export {
  withProps,
  getDomProps,
  isTrue,
  isFalse,
  allFalse,
  allTrue,
  oneFalse,
  oneTrue,
  compose,
  defaultTo,
}
