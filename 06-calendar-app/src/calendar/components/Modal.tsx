import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React from "react";

const ModalEvent = () => {
    
    const handleChange = () => {}

    return (
        <div className="modal show-modal">
            <div className="modal-background" />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Nuevo evento</p>
                    <button className="delete" aria-label="close" />
                </header>
                <section className="modal-card-body">
                    <form className="container">

                        <div className="field mb-2">
                            <label className="label">Fecha y hora inicio</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" />
                            </div>
                        </div>

                        <div className="field mb-2">
                            <label className="label">Fecha y hora fin</label>
                            <div className="control">
                                
                                <DatePicker
                                    onChange={handleChange}
                                    customInput={<input className="input" type="text" placeholder="Text input" />}
                                />
                            </div>
                        </div>

                        {/* <hr className="my-3" /> */}

                        <div className="field">
                            <label className="label">Titulo y notas</label>
                            <div className="control">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Título del evento"
                                    name="title"
                                    autoComplete="off" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Información adicional</label>
                            <div className="control">
                                <textarea 
                                    className="textarea" 
                                    placeholder="Contenido..." 
                                    defaultValue={""} 
                                />
                            </div>
                        </div>


                        <button type="submit" className="button is-fullwidth is-primary">
                            <i className="far fa-save"></i>
                            <span> Guardar</span>
                        </button>
                    </form>
                </section>
                {/* <footer className="modal-card-foot">
                    <button className="button is-success">Save changes</button>
                    <button className="button">Cancel</button>
                </footer> */}
            </div>
        </div>
    );
};

export default ModalEvent;
