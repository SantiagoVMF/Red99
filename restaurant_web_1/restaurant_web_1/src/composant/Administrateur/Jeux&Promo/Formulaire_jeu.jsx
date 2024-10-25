import React, { useState } from 'react';


const Formualire_jeu = () => {
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState('');
    const [name, setName] = useState('');
    const [lien, setLien] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Ici, vous pouvez ajouter la logique de soumission des données du formulaire
        console.log('Données du formulaire:', {
          image,
          imageName,
          name,
          lien,
          
        });
        // Réinitialiser les champs du formulaire
        setImage(null);
        setImageName('');
        setName('');
        setLien('');
       
      };

      const rejetter = () => {
        setImage(null);
        setImageName('');
        setName('');
        setLien('');
        
      };
  
    const handleImageUpload = (event) => {
      setImage(event.target.files[0]);
      setImageName(event.target.files[0].name);
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handlelienChange = (event) => {
      setLien(event.target.value);
    };
  
   
    return (
        <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',
            textAlign: 'center', display: 'flex',  gap: '30px', flexWrap: 'wrap', paddingTop:'50px'}} >
                
          <div className="dish-form" >
          
              <h2>Information jeu</h2>
              <hr style={{height:'10px'}}/>
  
              <div style={{display:'flex', width:'100%'}}>
                  <div style={{width:'320px',height:'520px', background:'#fff', padding:'10px'}}>
  
                      <div className="dish-preview" style={{width:'300px', height:'500px', background:'#cfbd97', textAlign:'justify'}}>
                          <div style={{width:'300px', height:'250px', background:'#cfbd'}}>
                              {image && (
                              <img src={URL.createObjectURL(image)} alt="image du plat" className="dish-image" style={{width:'300px',height:'250px'}} />
                              )}
                          </div>
                          <h5 style={{textAlign:'center'}}>{name}</h5>
                          <p>{lien}</p>
                          
                      </div>
                  </div>
  
                  <div className="form-container" style={{width:'400px', height:'600px'}}>
  
   
                      
                      
                      <form style={{textAlign:'left', margin: '0px 80px'}} onSubmit={handleSubmit}>
                          <div className="image-upload">
                              {/* <label htmlFor="image-input">Choisir une image</label> */}
  
                              <input
                                  type="file"
                                  id="image-input"
                                  accept="image/*"
                                  onChange={handleImageUpload}
                              />
                              {/* {imageName && <span className="image-name">{imageName}</span>} */}
                              
                          </div>
                          <div>
                              <p htmlFor="name">Nom du jeu:</p>
                              <input
                              type="text"
                              id="name"
                              value={name}
                              onChange={handleNameChange}
                              required
                              />
                          </div>
                          
                          <div>
                              <p htmlFor="lien">Lien : </p>
                              <input
                              type="text"
                              id="lien"
                              value={lien}
                              onChange={handlelienChange}
                              required
                              />
                          </div>
                          
                          <div className="actions">
                              <button type="button" className="cancel" onClick={rejetter} style={{margin: '10px 10px'}}>
                              Rejeter
                              </button>
                              <button type="submit" className="submit" style={{margin: '10px 10px'}}>
                              Valider
                              </button>
                          </div>
                      </form>
  
                  </div>
  
                          
              
              </div>
  
          </div>
  
      </div>
    );
  };
  
  export default Formualire_jeu;