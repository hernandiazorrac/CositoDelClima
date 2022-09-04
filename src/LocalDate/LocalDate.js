const LocalDate = () => {

    const currentDate = (d) => {
        let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} de ${month} de ${year}`
    }

    return(
        <>
            <div className="date">{currentDate(new Date())}</div>
        </>
    )
}

export default LocalDate;