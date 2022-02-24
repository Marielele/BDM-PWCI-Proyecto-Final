function validaRegistro() {

    let valido = false;
    let nombre = $("#idName").val();
    let apellidos = $("#idLastName").val();
    let user = $("#idUsername").val();
    let pass = $("#idPassword").val();
    let email = $("#idEmail").val();
    let img = $("#idImg").val();

    const pattern = new RegExp("^[A-Z]+$", "i");
    const letrasRegex = /^[a-zA-Z_ ]*$/;
    const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var strongRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    var soloNum = /^[0-9]+$/;

    if (
        $("#idImg").get(0).files.length === 0 ||
        nombre.length < 1 ||
        apellidos.length < 1 ||
        user.length < 1 ||
        pass.length < 1 ||
        confirmpass.length < 1 ||
        email.length < 1 ||
        dia.length < 1 ||
        mes.length < 1 ||
        anio.length < 1
    ) {
        alert("Ingrese datos faltantes");
        console.log("No files selected.");
        return valido;
    } else if (!letrasRegex.test(nombre) || !letrasRegex.test(apellidos)) {
        alert('Ingrese nombre y/o apellido valido')
        console.log("Nombre y/o apellido no válido");
        return valido;
    } else if (!emailRegex.test(email)) {
        alert('Ingrese email valido');
        console.log("Email no válido");
        return valido;
    } else if (!soloNum.test(dia) || !soloNum.test(mes) || !soloNum.test(anio)) {
        console.log("No ingreso números");
        return valido;
    } else if (!strongRegex.test(pass)) {
        alert('Ingrese contraseña valida');
        console.log("Contraseña no válida");
        return valido;
    } else {
        valido = true;
        return valido;
    }
}

function validaSesion() {
    let email = $("#idEmail").val();
    let pass = $("#idPassword").val();
    let valido = false;
    const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (email.length < 1 || pass.length < 1) {
        alert('Ingrese datos faltantes')
        console.log("Ingrese usuario y/o contraseña");
        return valido;
    } else if (!emailRegex.test(email)) {
        alert('Ingrese email valido');
        console.log("Email no válido");
        return valido;
    }
    else {
        valido = true;
        return valido;
    }
}
