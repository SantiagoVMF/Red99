import React from "react";


//premier composant

const Tableau = () => {
    const data = [
        { etudiant: 'Alice', plat: 'Pizza', heure: '12:30', livraison: true },
        { etudiant: 'Bob', plat: 'Sushi', heure: '13:00', livraison: false },
        { etudiant: 'Charlie', plat: 'Pâtes', heure: '13:30', livraison: true },
        { etudiant: 'David', plat: 'Burger', heure: '14:00', livraison: false },
    ];

    return (
        <div style={styles.tableContainer}>
            <table style={styles.table}>
                <thead>
                    <tr style={styles.headerRow}>
                        <th style={styles.headerCell}>Étudiant</th>
                        <th style={styles.headerCell}>Plat commandé</th>
                        <th style={styles.headerCell}>Heure</th>
                        <th style={styles.headerCell}>Livraison effectuée</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} style={styles.row}>
                            <td style={styles.cell}>{item.etudiant}</td>
                            <td style={styles.cell}>{item.plat}</td>
                            <td style={styles.cell}>{item.heure}</td>
                            <td style={styles.cell}>
                                <button
                                    style={{
                                        ...styles.button,
                                        backgroundColor: item.livraison ? 'green' : 'red',
                                    }}
                                >
                                    {item.livraison ? 'Oui' : 'Non'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    tableContainer: {
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    headerRow: {
        backgroundColor: '#f0f0f0',
        borderBottom: '2px solid #ccc',
    },
    headerCell: {
        padding: '10px',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    row: {
        borderBottom: '1px solid #ddd',
    },
    cell: {
        padding: '10px',
    },
    button: {
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
    },
};


export {Tableau} ;