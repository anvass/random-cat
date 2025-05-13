import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';

const handleClick = () => {
  console.log('Click');
};

const handleChangeEnabled = () => {
  console.log('Enabled');
};

const handleChangeRefresh = () => {
  console.log('Refresh');
};

function App() {
  return (
    <>
      <Checkbox
        label="Enabled"
        checked
        onChange={handleChangeEnabled}
      ></Checkbox>
      <Checkbox
        label="Auto-refresh every 5 seconds"
        onChange={handleChangeRefresh}
      ></Checkbox>

      <Button disabled onClick={handleClick}>
        <span>Get cat</span>
      </Button>
    </>
  );
}

export default App;
