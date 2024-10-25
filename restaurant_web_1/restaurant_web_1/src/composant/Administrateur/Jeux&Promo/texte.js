import React, { useState } from 'react';

// Composant Modal
const Modal = ({ isOpen, onClose, onChoice }) => {
  if (!isOpen) return null;

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>

        <h2 style={{textAlign:'center', color:'#000', background:'#cfbd97'}}>Veuillez faire un choix</h2>

        <button style={{margin: '10px 10px', borderRadius:'10px', background:'#cfbd97', border:'none' , width:'100px'}} onClick={() => onChoice('Option 1')}>Option 1</button>
        <button style={{margin: '10px 10px', borderRadius:'10px', background:'#cfbd97', border:'none', width:'100px'}} onClick={() => onChoice('Option 2')}>Option 2</button>
        <div style={{margin: '10px 0', width:'100%'}}>
            <button style={{borderRadius:'10px', background:'#cfbd', border:'none', width:'100%'}} onClick={onClose}>Annuler</button>
        </div>
        
      </div>
    </div>
  );
};

// Styles pour la modale
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    background: 'white',
    
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width:'300px', 
    height:'200px',
  },
};

// Composant principal
const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userChoice, setUserChoice] = useState('');

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Redirection ou action en fonction du choix
    alert(`Vous avez choisi: ${choice}`);
    handleCloseModal();
    // Ici vous pouvez rediriger vers une autre page ou effectuer une autre action
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Page Principale</h1>
      <button onClick={handleButtonClick} >Ouvrir la modale</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onChoice={handleChoice} />
      {userChoice && <p>Votre choix: {userChoice}</p>}
    </div>
  );
};

export default App;