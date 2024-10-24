import React from 'react';
import "../style/mappa.css";

const GridComponent = ({ mapData, misura }) => {
    const dimensioneGriglia = () => {
        switch (misura) {
            case "small":
                return { rows: 10, cols: 10 };
            case "medium":
                return { rows: 25, cols: 20 };
            case "large":
                return { rows: 40, cols: 25 };
            default:
                return { rows: 10, cols: 10 };
        }
    };

    const { rows, cols } = dimensioneGriglia();

    return (
        <div className={`mappa ${misura}`}>
            {mapData.map((cella, i) => (
                <div
                    key={i}
                    className={`grid-cell ${cella}`}
                >
                </div>
            ))}
        </div>
    );
}

export default GridComponent;
