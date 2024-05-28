import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  addCharacter,
  deleteCharacter,
  validatePassword,
  resetStatus,
  selectPasswordValue,
  selectPasswordStatus,
} from '../../features/counter/password.slice';
import './DoorPassword.css';

const DoorPassword = () => {
  const dispatch = useAppDispatch();
  const passwordValue = useAppSelector(selectPasswordValue);
  const passwordStatus = useAppSelector(selectPasswordStatus);

  const handleAddCharacter = (char: string) => {
    dispatch(resetStatus());
    dispatch(addCharacter(char));
  };

  const handleDeleteCharacter = () => {
    dispatch(resetStatus());
    dispatch(deleteCharacter());
  };

  const handleValidatePassword = () => {
    dispatch(validatePassword());
  };

  return (
    <div className={`DoorPassword ${passwordStatus}`}>
      <div className="display">{'*'.repeat(passwordValue.length)}</div>
      <div className="keyboard">
        <div className="row">
          <button onClick={() => handleAddCharacter('7')}>7</button>
          <button onClick={() => handleAddCharacter('8')}>8</button>
          <button onClick={() => handleAddCharacter('9')}>9</button>
        </div>
        <div className="row">
          <button onClick={() => handleAddCharacter('4')}>4</button>
          <button onClick={() => handleAddCharacter('5')}>5</button>
          <button onClick={() => handleAddCharacter('6')}>6</button>
        </div>
        <div className="row">
          <button onClick={() => handleAddCharacter('1')}>1</button>
          <button onClick={() => handleAddCharacter('2')}>2</button>
          <button onClick={() => handleAddCharacter('3')}>3</button>
        </div>
        <div className="row">
          <button onClick={handleDeleteCharacter}>{'<'}</button>
          <button onClick={() => handleAddCharacter('0')}>0</button>
          <button onClick={handleValidatePassword}>{'E'}</button>
        </div>
      </div>
      {passwordStatus === 'granted' && <div className="message">Access Granted</div>}
      {passwordStatus === 'denied' && <div className="message">Access Denied</div>}
    </div>
  );
};

export default DoorPassword;
