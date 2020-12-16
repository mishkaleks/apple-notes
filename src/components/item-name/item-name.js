// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  activeFolderName: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    width: '120px',
    border: '1px solid #cfe8fc',
    borderRadius: '5px',
    marginRight: '5px',
    padding: '5px',
    boxShadow: 'none',
    outline: 'none',
    background: '#fff',
    pointerEvents: 'auto'
  }
}));

function ItemName({ title, edited, handleClickItemName, handleGetItemName }) {
  const classes = useStyles();

  return (
    edited 
      ? (
        <input
          onClick={handleClickItemName}
          onChange={handleGetItemName}
          className={classes.activeFolderName}
          defaultValue={title}
        />
      )
      : (
        <div className={classes.inactiveItemName}>{title}</div>
      )
  );
};

export default ItemName;
