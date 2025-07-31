1)what's the output and why ? after one click

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };
  return <button onClick={handleClick}>Count: {count}</button>;
};


2) what is an updater function ?

3) what is the behavior of these codes

const Form: React.FC = () => {
  const [form, setForm] = useState({ name: '', age: 0 });
  const handleUpdate = () => {
    form.name = 'Alice';
    setForm(form);
  };
  return <button onClick={handleUpdate}>Update</button>;
};

4) What does the component render, and why?

const Toggle: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  if (!isOn) {
    setIsOn(true);
  }
  return <div>{isOn ? 'On' : 'Off'}</div>;
};

5) Does clicking the button add “New Item” to the list in the UI?

const List: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const addItem = () => {
    items.push('New Item');
    setItems(items);
  };
  return <button onClick={addItem}>Add Item</button>;
};

6) what will happen when you click the button

const Timer: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Effect ran');
  }, [count]);
  return <button onClick={() => setCount(0)}>Reset</button>;
};

7) If value changes from 1 to 2, what does the effect log?

const Display: React.FC<{ value: number }> = ({ value }) => {
  useEffect(() => {
    console.log(value);
  }, []);
  return <div>{value}</div>;
};