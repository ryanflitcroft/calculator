# Calculator App

// import functions and grab DOM elements

// + DOM ELEMENTS
//  each button number-key .0-9
//  each button operator-key +-*/= cl +/-
//  span display-box

## numberClick();
// numberClick should:
//  call function resetDisplay (if reset === true)
//  if display textContent is less than 17:
//   if no arrayOperator:
//    push number textContent to arrayX, assign variable x equal to value
//   else if arrayOperator:
//    push number textContent to arrayY, assign variable y equal to value
//   display textContent plus equals number textContent

## decimalClick();
// decimalClick should:
//  call function resetDisplay (if reset === true)
//  if display textContent doesn't include '.':
//  if no arrayOperator
//   push to arrayX '.'
//  else if arrayOperator:
//   push to arrayY '.'
//  display textContent plus equals '.'

## negPosClick();
// negPosClick should:
//  if x:
//   if no y, and no arrayOperator:
//    x is equal to a negative value of x
//    display textContent is equal to x
//   if y, and no reset:
//    y is equal to a negative value of y
//    display textContent is equal to operatorDisplay + y

## operatorClick();
// operatorClick should:
//  if no arrayOperator and if display textContent length is greater than 0:
//   push operator textContent to arrayOperator
//   if add, operatorDisplay is equal to +
//   if subtract, operatorDisplay is equal to -
//   if multiply, operatorDisplay is equal to *
//   if add, operatorDisplay is equal to /
//   display textContent is equal to operatorDisplay
//  else if operatorClick clear:
//   reset is equal to true;
//   call function resetDisplay

## equalsClick();
// equalsClick should:
//  if no arrayOperator:
//   if arrayOperator includes +
//    answer is equal to call function addition
//   if arrayOperator includes -
//    answer is equal to call function subtraction
//   if arrayOperator includes *
//    answer is equal to call function multiplication
//   if arrayOperator includes /
//    answer is equal to call function division
//   display textContent is equal to answer

## resetDisplay
// resetDisplay should:
//  if reset === true:
//   clear all-
//    -display textContent, arrayX, x, arrayOperator, arrayY, y
//   variable reset is equal to false;
