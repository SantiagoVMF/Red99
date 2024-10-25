import React, { useState } from 'react';
import image1 from '../image/i1.png';
import image2 from '../image/i2.png';
import image3 from '../image/i3.png';
import image4 from '../image/i4.png';
import image5 from '../image/i5.png';
import image6 from '../image/i6.png';

const Formulaire = () => {
    
    const produit=['Spaquettie', "Viande", "Glace", 'Oeuf', 'fruit']
    const prix=['1500', '2000', '1500', '1500', '1000']
    const description=[ 
        "Les spaquetti sont des pâtes longues et fines, idéales pour une variété de plats. Originaires d'Italie, elles se marient parfaitement avec des sauces tomate, des sauces crémeuses ou simplement avec de l'huile d'olive et des herbes fraîches. Que ce soit en plat principal ou en accompagnement, les spaquetti sont un incontournable de la cuisine.",
        " La viande est une source importante de protéines et peut être préparée de nombreuses façons. Qu'il s'agisse de bœuf, de poulet, de porc ou d'agneau, chaque type de viande offre une saveur unique et peut être grillé, rôti, mijoté ou sauté pour créer des plats délicieux. C'est un élément essentiel dans de nombreuses cuisines à travers le monde",
        " La glace est un dessert rafraîchissant et crémeux, parfait pour les journées chaudes. Disponible dans une multitude de saveurs, de la vanille au chocolat en passant par des combinaisons fruitées, elle ravit les papilles de tous. Que ce soit en cornet, en coupe ou en sundae, la glace est le plaisir sucré par excellence.",
        " L'œuf est un ingrédient polyvalent et nutritif, riche en protéines et en vitamines. Il peut être consommé de diverses manières : à la coque, brouillé, poché ou en omelette. Les œufs sont également un ingrédient de base dans de nombreuses recettes, des pâtisseries aux plats principaux, et ajoutent une texture et une richesse inégalées.",
        " Les fruits sont des aliments naturels riches en vitamines, minéraux et fibres. Ils viennent dans une variété de couleurs, de saveurs et de textures, allant des pommes croquantes aux fraises juteuses. Parfaits pour une collation saine, en dessert ou en smoothie, les fruits apportent fraîcheur et énergie à votre alimentation."

    ]
    const images=[image1,image2,image3,image4, image5, image6]

    const handleSubmit = (e) => {
        e.preventDefault();
        //  la logique de soumission
      
    };

    return (
        <div className='container-fluid' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', 
            textAlign: 'center', display: 'flex',  gap: '30px', flexWrap: 'wrap'}}
            
        >
            
            {produit.map((produit, i) => (
                <form onSubmit={handleSubmit} style={{justifyContent: 'center', alignItems:'center',
                    backgroundColor: '#cfbd97', width: '250px', height: '400px', marginTop: '30px'
                }} key={i}>

                    <img 
                        src={images[i]} 
                        alt="Image de présentation"
                        style={{width:'250px', height:'200px',  borderRadius: '0 0 50% 50%' }} 
                    
                    />
                    
                   
                    <input
                        type="text"
                        id="name"
                        value={produit} 
                        readOnly
                        style={{backgroundColor:'#cfbd97', color: '#000000', border: 'none', outline: 'none',
                            textAlign: 'center', fontFamily: 'times new romain', fontSize:'20px',  width:'100%'
                        }}
                    />
                      
                    <input 
                        type="text"
                        id="name"
                        value={'Prix : ' + prix[i] +' cfa'} // Texte pré-écrit
                        readOnly
                        style={{backgroundColor:'#cfbd97', color: '#000000', border: 'none', outline: 'none',
                            textAlign: 'center', fontFamily: 'times new romain', width:'100%'
                        }}
                            
                    />
                        
                    <textarea
                        type="text" 
                        id="description" 
                        value={description[i]} 
                        readOnly
                        style={{backgroundColor:'#cfbd97', color: '#000000', border: 'none', outline: 'none',
                            textAlign: 'justify', fontFamily: 'times new romain', display: 'flex', width:'100%', height: '105px', 
                            overflow:'hidden', textOverflow:'ellipsis', padding:'10px'
                        }}
                            
                    />
                    
                    <div style={{position:'relative'}}>
                        <button type="submit"
                        style={{backgroundColor:'#000000', color: '#ffffff', border: 'none', outline: 'none',
                            textAlign: 'justify', fontFamily: 'times new romain', borderRadius: '25% 0 0 25%', position: 'relative',
                            bottom:'0', right:'0', top:'10px'
                        }} >
                            En savoir plus
                        </button>
                    </div>
                </form>
            ))}
        </div>
    );
};


export default Formulaire;