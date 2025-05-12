import Button from './components/Button/Button';

const handleClick = () => {
  console.log('Click');
};

function App() {
  return (
    <>
      <div>App</div>
      <Button disabled onClick={handleClick}>
        <span>Get cat</span>
      </Button>
    </>
  );
}

export default App;
