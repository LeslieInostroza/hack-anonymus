import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import logoPng from './../../IMG/logo1.png';
import {  CreateNewFolder, AttachFile,LiveHelp} from '@material-ui/icons';
import './Modal.css'
import {Link} from 'react-router-dom';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
   /*  backgroundColor: theme.palette.background.paper, */
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

const ListaCategorias = props => <Link to="/lista" {...props} />

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <IconButton onClick={this.handleOpen}>
            <MenuIcon />
        </IconButton>
        <Modal className="ModalColor"
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >

          <div style={getModalStyle()} className={classes.paper}>

          <img className="imgLogo" src={logoPng} alt="" />
            <MenuItem className="btn" onClick={this.handleClose} >Ayuda <LiveHelp className="iconos3"></LiveHelp> </MenuItem>
            <MenuItem className="btn" onClick={this.handleClose} component={ListaCategorias}>Categorias <AttachFile className="icon"></AttachFile> </MenuItem>
            <MenuItem className="btn" onClick={this.handleClose}>Subir Archivo <CreateNewFolder className="iconos3"></CreateNewFolder></MenuItem>
          </div>
        </Modal>
          <img className="imgLogoNav" src={logoPng} alt="" />
        
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
