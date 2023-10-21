import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Counter from './Counter';

// 1- explanation of what you are testing 
// 2- the function you will do the checks on
test('The link that says learn react is pressed on the screen.', () => {

  //printing the component you will test on the screen (takes place in a virtual environment)
  render(<App />);
 
  // call the component you will test
  const linkElement = screen.getByText(/learn react/i); 
  //don't pay attention to uppercase and lowercase letters


  //testing the called element
  expect(linkElement).toBeInTheDocument();
});


// the button will be red at first and "change to blue" will be written inside it
// After clicking on it, it will turn blue and "Change to red" will be written on it.

test('The button has the correct color and text', () => {
  render(<App />);

 //selecting the element we will test
  const colorBtn = screen.getByRole('button', {
    name: 'Change to blue',
  });

  console.log(colorBtn);


  // Is the button red when it first appears?
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });

  // define user interaction on jsx element
  fireEvent.click(colorBtn);

  // Is the background blue after clicking?
  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' });

  
  // After clicking, is the text inside Change to red?
  expect(colorBtn).toHaveTextContent('Change to red');
});

    // Controlling whether the button is inactive when the checkbox is clicked
    test("Button activation based on checkbox status", () => {
    render(<App />);

   // call the test element
   const colorBtn = screen.getByRole('button', {
    name: /change to blue/i,
  });

   //checking that the button is active
   expect(colorBtn).toBeEnabled();

   // call checkbox
   const checbox = screen.getByRole('checkbox');

   // realize the checkbox click event
   fireEvent.click(checbox);

  // is the button inactive? checking
  expect(colorBtn).toBeDisabled();
});

   //! test the meter
   //buttons will be pulled with getByRole
   // the counter will be called with getByText
   // check if the value of the counter is 0 toHaveTestId
   // Click the + button and check if the value of the counter is 1.
   // click the - button twice to check if the counter is -1

    // describe which is related to the same feature / component
    //allows us to group tests together
    describe('Counter component tests,', () => {
 
 
    // determine common operations to be performed before each test
   //beforEach: runs the code we give it before each test
   //beforAll: at first it runs the code we gave it only once

  test('Initial value must be 0', () => {
    render(<Counter />);
    const counter = screen.getByTestId('counter-space');
    expect(counter).toHaveTextContent('0');
  });

  test('When you click on the + button, the value should increase by 1.', () => {
    render(<Counter />);
    const counter = screen.getByTestId('counter-space');

    const incraseBtn = screen.getByRole('button', { name: 'pozitive' });

    fireEvent.click(incraseBtn);

    expect(counter).toHaveTextContent('1');
  });

  test('When you click the button the value should increase by 1', () => {
    render(<Counter />);
    const counter = screen.getByTestId('counter-space');

    const decreaseBtn = screen.getByRole('button', { name: 'negative' });

    fireEvent.click(decreaseBtn);

    fireEvent.click(decreaseBtn);

    expect(counter.textContent).toBe('-2');
  });
});