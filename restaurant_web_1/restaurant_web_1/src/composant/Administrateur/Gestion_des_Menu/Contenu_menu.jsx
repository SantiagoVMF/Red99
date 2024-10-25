import React, { useState } from 'react';


const Contenu_menu = () => {
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [prix, setPrix] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Ici, vous pouvez ajouter la logique de soumission des données du formulaire
        console.log('Données du formulaire:', {
          image,
          imageName,
          name,
          quantity,
          prix,
          description,
        });
        // Réinitialiser les champs du formulaire
        setImage(null);
        setImageName('');
        setName('');
        setQuantity('');
        setPrix('');
        setDescription('');
      };

      const rejetter = () => {
        setImage(null);
        setImageName('');
        setName('');
        setQuantity('');
        setPrix('');
        setDescription('');
      };
  
    const handleImageUpload = (event) => {
      setImage(event.target.files[0]);
      setImageName(event.target.files[0].name);
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleQuantityChange = (event) => {
      setQuantity(event.target.value);
    };
  
    const handlePrixChange = (event) => {
      setPrix(event.target.value);
    };
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    return (
        <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',
            textAlign: 'center', display: 'flex',  gap: '30px', flexWrap: 'wrap', paddingTop:'50px'}} >
                
          <div className="dish-form" >
          
              <h2>Information du plat</h2>
              <hr style={{height:'10px'}}/>
  
              <div style={{display:'flex', width:'100%'}}>
                  <div style={{width:'320px',height:'520px', background:'#fff', padding:'10px'}}>
  
                      <div className="dish-preview" style={{width:'300px', height:'500px', background:'#cfbd97', textAlign:'justify'}}>
                          <div style={{width:'300px', height:'250px', background:'#cfbd',borderRadius: '0 0 50% 50%'}}>
                              {image && (
                              <img src={URL.createObjectURL(image)} alt="image du plat" className="dish-image" style={{width:'300px',height:'250px' ,borderRadius: '0 0 50% 50%'}} />
                              )}
                          </div>
                          <h5 style={{textAlign:'center'}}>{name}</h5>
                          <p>{prix} CFA</p>
                          <p>{quantity}</p>
                          <p>{description}</p>
                      </div>
                  </div>
  
                  <div className="form-container" style={{width:'400px', height:'600px'}}>
  
   
                      
                      
                      <form style={{textAlign:'left', margin:'0px 50px'}} onSubmit={handleSubmit}>
                          <div className="image-upload">
                              {/* <label htmlFor="image-input">Choisir une image</label> */}
  
                              <input
                                  type="file"
                                  id="image-input"
                                  accept="image/*"
                                  onChange={handleImageUpload}
                              />
                              {imageName && <span className="image-name">{imageName}</span>}
                              
                          </div>
                          <div>
                              <p htmlFor="name">Nom du plat:</p>
                              <input
                              type="text"
                              id="name"
                              value={name}
                              onChange={handleNameChange}
                              required
                              />
                          </div>
                          <div>
                              <p htmlFor="prix">Prix:</p>
                              <input
                              type="number"
                              id="prix"
                              value={prix}
                              onChange={handlePrixChange}
                              required
                              step="0.01"
                              />
                          </div>
                          <div>
                              <p htmlFor="quantity">Quantité:</p>
                              <input
                              type="number"
                              id="quantity"
                              value={quantity}
                              onChange={handleQuantityChange}
                              required
                              />
                          </div>
                          <div>
                              <p htmlFor="description">Description:</p>
                              <textarea
                              id="description"
                              value={description}
                              onChange={handleDescriptionChange}
                              required
                              />
                          </div>
                          <div className="actions">
                              <button type="button" className="cancel" onClick={rejetter}>
                              Rejeter
                              </button>
                              <button type="submit" className="submit">
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
  
  export default Contenu_menu;