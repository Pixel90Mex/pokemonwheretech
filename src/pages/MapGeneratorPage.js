import React, {useState} from "react";
import {Container, Row, Col, Form, Button, Alert} from "react-bootstrap";
import GridComponent from "../components/GridComponent";

function MapGeneratorPage() {
    const [prato, setPrato] = useState(10);
    const [mare, setMare] = useState(10);
    const [misura, setMisura] = useState("small");
    const [mapData, setMapData] = useState(null);
    const [error, setError] = useState("");

    const getMapSize = () => {
        switch (misura) {
            case "small":
                return 100;
            case "medium":
                return 500;
            case "large":
                return 1000;
            default:
                return 100;
        }
    };

    const generaMappa = () => {
        const numeroCelle = getMapSize();
        const celleMare = Math.round((mare / 100) * numeroCelle);
        const cellePrato = Math.round((prato / 100) * numeroCelle);

        if (prato > 30 || prato < 10) {
            setError("La percentuale di prato deve essere tra il 10 ed il 30%");
            return;
        }
        if (mare > 30 || mare < 10) {
            setError("La percentuale di mare deve essere tra il 10 ed il 30%");
            return;
        }

        let grigliaMappa = Array(numeroCelle).fill("terreno");

        riempiAreaContigua(grigliaMappa, "prato", cellePrato);
        riempiAreaContigua(grigliaMappa, "mare", celleMare);

        setMapData(grigliaMappa);
        setError("");
    };

    const riempiAreaContigua = (griglia, tipo, numeroCelle) => {
        const numeroTotaleCelle = griglia.length;
        let posizioneIniziale = Math.floor(Math.random() * numeroTotaleCelle);
        let celleRimaste = numeroCelle;

        const adiacenti = (posizione) => {
            const dimensioneMappa = Math.sqrt(numeroTotaleCelle);
            const adiacenti = [];

            if (posizione - dimensioneMappa >= 0) adiacenti.push(posizione - dimensioneMappa);
            if (posizione + dimensioneMappa < numeroTotaleCelle) adiacenti.push(posizione + dimensioneMappa);
            if (posizione % dimensioneMappa !== 0) adiacenti.push(posizione - 1);
            if ((posizione + 1) % dimensioneMappa !== 0) adiacenti.push(posizione + 1);

            return adiacenti;
        };

        const visitate = new Set([posizioneIniziale]);
        griglia[posizioneIniziale] = tipo;
        celleRimaste--;

        while (celleRimaste > 0) {
            let nuoveVisite = [];

            visitate.forEach((pos) => {
                adiacenti(pos).forEach((vicino) => {
                    if (!visitate.has(vicino) && griglia[vicino] === "terreno" && celleRimaste > 0) {
                        griglia[vicino] = tipo;
                        nuoveVisite.push(vicino);
                        celleRimaste--;
                    }
                });
            });

            nuoveVisite.forEach((n) => visitate.add(n));

            if (nuoveVisite.length === 0) break;
        }
    };

    return (
        <Container>
            <h1>Genera la tua mappa</h1>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="mare">
                            <Form.Label>Imposta i dati per il mare</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={mare}
                                    onChange={(e) => setMare(Number(e.target.value))}
                                >
                                </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="prato">
                            <Form.Label>Imposta i dati per il prato</Form.Label>
                            <Form.Control
                                type="number"
                                value={prato}
                                onChange={(e) => setPrato(Number(e.target.value))}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="formSize">
                    <Form.Label>Dimensione della mappa</Form.Label>
                    <Form.Control
                        as="select"
                        value={misura}
                        onChange={(e) => setMisura(e.target.value)}>
                        <option value="small">Piccola (10x10)</option>
                        <option value="medium">Media (25x20)</option>
                        <option value="large">Grande (40x25)</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" onClick={generaMappa}>Genera</Button>
            </Form>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

            {mapData && <GridComponent mapData={mapData} misura={misura} />}
        </Container>
    );
}
export default MapGeneratorPage;